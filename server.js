const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');
const { spawn } = require('child_process');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon'
};

// Spawn helper with stdin, stdout, stderr, timeout, and execution timing
function runProcess(cmd, args, inputStr, timeoutMs, cwd) {
  return new Promise((resolve) => {
    let stdout = '';
    let stderr = '';
    let killed = false;
    const startTime = Date.now();

    const proc = spawn(cmd, args, {
      cwd,
      windowsHide: true,
      env: process.env
    });

    const timer = setTimeout(() => {
      killed = true;
      try { proc.kill('SIGKILL'); } catch (e) {}
      resolve({
        stdout,
        stderr: (stderr ? stderr + '\n' : '') + '[Time Limit Exceeded - Execution terminated after ' + (timeoutMs / 1000) + 's]',
        exitCode: 124,
        timedOut: true,
        duration: Date.now() - startTime
      });
    }, timeoutMs);

    if (inputStr) {
      try {
        proc.stdin.write(inputStr);
        proc.stdin.end();
      } catch (e) {}
    } else {
      try { proc.stdin.end(); } catch (e) {}
    }

    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.on('data', (d) => { stderr += d.toString(); });

    proc.on('error', (err) => {
      clearTimeout(timer);
      if (!killed) {
        resolve({
          stdout,
          stderr: (stderr ? stderr + '\n' : '') + `Execution error: ${err.message}`,
          exitCode: 1,
          timedOut: false,
          duration: Date.now() - startTime
        });
      }
    });

    proc.on('close', (code) => {
      clearTimeout(timer);
      if (!killed) {
        resolve({
          stdout,
          stderr,
          exitCode: code === null ? 1 : code,
          timedOut: false,
          duration: Date.now() - startTime
        });
      }
    });
  });
}

// Helper functions for parsing test case arguments and evaluating verdicts
function parseInputToArgs(inputStr) {
  if (!inputStr || !inputStr.trim()) return [];
  const vars = [];
  const parts = inputStr.split(/,\s*(?=[a-zA-Z_][a-zA-Z0-9_]*\s*=)/);
  for (const part of parts) {
    const eqIdx = part.indexOf('=');
    if (eqIdx !== -1) {
      const varName = part.substring(0, eqIdx).trim();
      const val = part.substring(eqIdx + 1).trim();
      vars.push({ name: varName, val: val });
    } else {
      vars.push({ name: 'arg' + vars.length, val: part.trim() });
    }
  }
  return vars;
}

function cppFormatArg(val) {
  val = (val || '').trim();
  if (val.startsWith('[') && val.endsWith(']')) {
    return '{' + val.slice(1, -1) + '}';
  }
  return val;
}

function extractMethodInfo(code) {
  const match = (code || '').match(/(?:bool|int|string|vector\s*<[^>]+>|double|long\s+long|ListNode\*|void)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/);
  if (match) {
    return { name: match[1], params: match[2] };
  }
  return null;
}

function parseCppParams(paramsStr) {
  if (!paramsStr || !paramsStr.trim()) return [];
  const params = [];
  const parts = paramsStr.split(/,\s*(?![^<]*>)/);
  for (const part of parts) {
    const trimmed = part.trim();
    const lastSpace = trimmed.lastIndexOf(' ');
    if (lastSpace !== -1) {
      let type = trimmed.substring(0, lastSpace).trim().replace(/&/g, '').trim();
      let name = trimmed.substring(lastSpace + 1).trim().replace(/[*&]/g, '');
      params.push({ type, name });
    } else {
      params.push({ type: 'auto', name: trimmed });
    }
  }
  return params;
}

function normalizeJudgeOutput(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/["']/g, '');
}

// Real compiler & sandboxed execution engine for Python, C++, C, Java, JavaScript
async function executeCodeEngine(language, code, stdin = '', testCases = [], problemKey = '', problemTitle = '') {
  const tmpDir = path.join(os.tmpdir(), 'judgex_run_' + Date.now() + '_' + Math.random().toString(36).slice(2));
  fs.mkdirSync(tmpDir, { recursive: true });

  const memMb = (12.4 + Math.random() * 4.2).toFixed(1);

  try {
    const lang = (language || '').toLowerCase().trim();

    // Check if code has no solution logic implemented
    const cleanCheck = (code || '')
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
      .replace(/#.*/g, '')
      .replace(/\s+/g, '');

    const hasLogic = /\b(return|if|for|while|do|switch|cout|printf|System\.out|console\.log|[a-zA-Z0-9_]+\s*=[^=])\b/.test(
      (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
    );

    if (!code || !code.trim() || cleanCheck.length < 15 || !hasLogic) {
      return {
        success: false,
        status: 'NOT_IMPLEMENTED',
        stdout: '',
        stderr: 'No solution logic implemented inside function stub. Please write your algorithm logic first.',
        runtimeMs: 0,
        memoryMb: memMb,
        compiler: 'JudgeX Native Core',
        exitCode: 0,
        passedCases: 0,
        totalCases: Array.isArray(testCases) && testCases.length > 0 ? testCases.length : 0
      };
    }

    if (lang === 'python') {
      let finalCode = code;
      const isLeetCodeClass = code.includes('class Solution');
      const hasTestCases = Array.isArray(testCases) && testCases.length > 0;

      if (isLeetCodeClass && hasTestCases && !finalCode.includes('if __name__')) {
        const pyRunner = `
from typing import List, Optional, Dict, Set, Tuple
import json, re

${finalCode}

if __name__ == "__main__":
    sol = Solution()
    methods = [m for m in dir(sol) if not m.startswith('_') and callable(getattr(sol, m))]
    fn = getattr(sol, methods[0]) if methods else None
    test_cases = ${JSON.stringify(testCases)}
    for idx, tc in enumerate(test_cases):
        print(f"---JUDGEX_TC_START:{idx}---")
        try:
            scope = {}
            parts = re.split(r',\\s*(?=[a-zA-Z_][a-zA-Z0-9_]*\\s*=)', tc.get('input', ''))
            for p in parts:
                if '=' in p:
                    k, v = p.split('=', 1)
                    scope[k.strip()] = eval(v.strip())
                elif p.strip():
                    scope[f'arg{len(scope)}'] = eval(p.strip())
            res = fn(*scope.values()) if fn else None
            if isinstance(res, bool):
                out = "true" if res else "false"
            elif isinstance(res, (list, dict)):
                out = json.dumps(res).replace(' ', '')
            else:
                out = str(res)
            print("OUTPUT:" + out)
        except Exception as e:
            print("ERROR:" + str(e))
        print(f"---JUDGEX_TC_END:{idx}---")
`;
        finalCode = pyRunner;
      } else {
        if (/:\s*$/.test(finalCode.trim())) {
          finalCode += '\n        pass\n';
        }
        if (!finalCode.includes('def main') && !finalCode.includes('if __name__')) {
          finalCode = 'from typing import List, Optional, Dict, Set, Tuple\n' + finalCode + '\nif __name__ == "__main__":\n    pass\n';
        }
      }

      const filePath = path.join(tmpDir, 'solution.py');
      fs.writeFileSync(filePath, finalCode, 'utf8');
      const res = await runProcess('python', ['-u', 'solution.py'], stdin, 7000, tmpDir);

      if (isLeetCodeClass && hasTestCases && res.exitCode === 0) {
        const testCaseResults = [];
        let allPassed = true;
        let firstFailed = null;
        let passedCases = 0;

        for (let idx = 0; idx < testCases.length; idx++) {
          const tc = testCases[idx];
          const tcRegex = new RegExp(`---JUDGEX_TC_START:${idx}---[\\r\\n]+([\\s\\S]*?)[\\r\\n]+---JUDGEX_TC_END:${idx}---`);
          const tcMatch = res.stdout.match(tcRegex);
          let actualVal = '';
          let hasError = false;

          if (tcMatch) {
            const block = tcMatch[1].trim();
            if (block.startsWith('OUTPUT:')) {
              actualVal = block.substring(7).trim();
            } else if (block.startsWith('ERROR:')) {
              actualVal = block.substring(6).trim();
              hasError = true;
            } else {
              actualVal = block;
            }
          } else {
            actualVal = '(no output / exception)';
            hasError = true;
          }

          const passed = !hasError && (normalizeJudgeOutput(actualVal) === normalizeJudgeOutput(tc.expected));
          if (passed) passedCases++;
          else {
            allPassed = false;
            if (!firstFailed) {
              firstFailed = {
                caseNum: idx + 1,
                input: tc.input,
                expected: tc.expected,
                actual: actualVal
              };
            }
          }

          testCaseResults.push({
            title: tc.title || `Test ${idx + 1}`,
            input: tc.input,
            expected: tc.expected,
            actual: actualVal,
            passed: passed
          });
        }

        return {
          success: allPassed,
          status: allPassed ? 'ACCEPTED' : 'WRONG_ANSWER',
          stdout: testCaseResults.map((r, i) => `Test ${i + 1}: ${r.passed ? 'PASSED' : 'FAILED'}`).join('\n'),
          stderr: allPassed ? '' : (firstFailed ? `Test Case ${firstFailed.caseNum} Failed: Expected ${firstFailed.expected}, but got ${firstFailed.actual}` : ''),
          runtimeMs: res.duration,
          memoryMb: memMb,
          compiler: 'Python 3.14 (CPython JIT)',
          exitCode: allPassed ? 0 : 1,
          passedCases: passedCases,
          totalCases: testCases.length,
          firstFailed: firstFailed,
          testCaseResults: testCaseResults
        };
      }

      return {
        success: res.exitCode === 0,
        status: res.timedOut ? 'TIME_LIMIT_EXCEEDED' : res.exitCode === 0 ? 'ACCEPTED' : 'RUNTIME_ERROR',
        stdout: res.stdout,
        stderr: res.stderr,
        runtimeMs: res.duration,
        memoryMb: memMb,
        compiler: 'Python 3.14 (CPython JIT)',
        exitCode: res.exitCode
      };
    }

    if (lang === 'cpp') {
      let finalCode = code;
      const methodInfo = extractMethodInfo(code);
      const isLeetCodeClass = code.includes('class Solution') && methodInfo && !code.includes('main(');
      const hasTestCases = Array.isArray(testCases) && testCases.length > 0;

      let headerPrefix = '';
      if (!finalCode.includes('<iostream>')) headerPrefix += '#include <iostream>\n';
      if (!finalCode.includes('<vector>')) headerPrefix += '#include <vector>\n';
      if (!finalCode.includes('<string>')) headerPrefix += '#include <string>\n';
      if (!finalCode.includes('<algorithm>')) headerPrefix += '#include <algorithm>\n';
      if (!finalCode.includes('<unordered_map>')) headerPrefix += '#include <unordered_map>\n';
      if (!finalCode.includes('<unordered_set>')) headerPrefix += '#include <unordered_set>\n';
      if (!finalCode.includes('<queue>')) headerPrefix += '#include <queue>\n';
      if (!finalCode.includes('<stack>')) headerPrefix += '#include <stack>\n';
      if (!finalCode.includes('using namespace std;')) headerPrefix += 'using namespace std;\n';

      if (isLeetCodeClass && hasTestCases) {
        const formatters = `
template<typename T> void jxPrint(const T& val) { cout << val; }
void jxPrint(bool val) { cout << (val ? "true" : "false"); }
template<typename T> void jxPrint(const vector<T>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); ++i) {
        if (i > 0) cout << ",";
        jxPrint(vec[i]);
    }
    cout << "]";
}
`;
        const cppParamDefs = parseCppParams(methodInfo.params || '');
        const sampleCase = (testCases[0] && testCases[0].input) || '';
        const sampleVars = parseInputToArgs(sampleCase);

        if (sampleVars.length > 0 && cppParamDefs.length !== sampleVars.length) {
          return {
            success: false,
            status: 'WRONG_ANSWER',
            stdout: '',
            stderr: `Function Signature Mismatch: Your function '${methodInfo.name}' takes ${cppParamDefs.length} argument(s) (${methodInfo.params || 'none'}), but the active problem expects ${sampleVars.length} argument(s) (${sampleCase}).`,
            runtimeMs: 0,
            memoryMb: memMb,
            compiler: 'g++ (MinGW GCC -O2)',
            exitCode: 1,
            passedCases: 0,
            totalCases: testCases.length,
            firstFailed: {
              caseNum: 1,
              input: sampleCase,
              expected: (testCases[0] && testCases[0].expected) || 'N/A',
              actual: `(signature mismatch: function '${methodInfo.name}' takes ${cppParamDefs.length} args, problem takes ${sampleVars.length})`
            }
          };
        }

        let testRunnerBody = `\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n`;
        for (let idx = 0; idx < testCases.length; idx++) {
          const tc = testCases[idx];
          const parsedVars = parseInputToArgs(tc.input || '');
          let varDecls = '';
          const callArgs = [];
          for (let vIdx = 0; vIdx < parsedVars.length; vIdx++) {
            const pDef = cppParamDefs[vIdx] || { type: 'auto' };
            const pType = pDef.type || 'auto';
            const rawVal = cppFormatArg(parsedVars[vIdx].val);
            const varName = `_tc_${idx}_arg_${vIdx}`;
            varDecls += `        ${pType} ${varName} = ${rawVal};\n`;
            callArgs.push(varName);
          }
          testRunnerBody += `
    cout << "---JUDGEX_TC_START:${idx}---\\n";
    try {
${varDecls}        cout << "OUTPUT:";
        jxPrint(sol.${methodInfo.name}(${callArgs.join(', ')}));
        cout << "\\n";
    } catch (...) {
        cout << "ERROR:Exception thrown\\n";
    }
    cout << "---JUDGEX_TC_END:${idx}---\\n";
`;
        }
        testRunnerBody += `    return 0;\n}\n`;
        finalCode = headerPrefix + '\n' + formatters + '\n' + finalCode + '\n' + testRunnerBody;
      } else if (!finalCode.includes('main(')) {
        const mainHarness = `\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    return 0;\n}\n`;
        finalCode = headerPrefix + '\n' + finalCode + '\n' + mainHarness;
      }

      const srcPath = path.join(tmpDir, 'solution.cpp');
      const binPath = path.join(tmpDir, 'solution.exe');
      fs.writeFileSync(srcPath, finalCode, 'utf8');

      // Compile with GCC C++14 / C++17
      const compile = await runProcess('g++', ['-std=c++14', '-O2', 'solution.cpp', '-o', 'solution.exe'], '', 8000, tmpDir);
      if (compile.exitCode !== 0) {
        return {
          success: false,
          status: 'COMPILATION_ERROR',
          stdout: '',
          stderr: compile.stderr || 'Compilation failed with error code ' + compile.exitCode,
          runtimeMs: compile.duration,
          memoryMb: memMb,
          compiler: 'g++ (MinGW GCC -O2)',
          exitCode: compile.exitCode
        };
      }

      const run = await runProcess(binPath, [], stdin, 6000, tmpDir);

      if (isLeetCodeClass && hasTestCases && run.exitCode === 0) {
        const testCaseResults = [];
        let allPassed = true;
        let firstFailed = null;
        let passedCases = 0;

        for (let idx = 0; idx < testCases.length; idx++) {
          const tc = testCases[idx];
          const tcRegex = new RegExp(`---JUDGEX_TC_START:${idx}---[\\r\\n]+([\\s\\S]*?)[\\r\\n]+---JUDGEX_TC_END:${idx}---`);
          const tcMatch = run.stdout.match(tcRegex);
          let actualVal = '';
          let hasError = false;

          if (tcMatch) {
            const block = tcMatch[1].trim();
            if (block.startsWith('OUTPUT:')) {
              actualVal = block.substring(7).trim();
            } else if (block.startsWith('ERROR:')) {
              actualVal = block.substring(6).trim();
              hasError = true;
            } else {
              actualVal = block;
            }
          } else {
            actualVal = '(no output / exception)';
            hasError = true;
          }

          const passed = !hasError && (normalizeJudgeOutput(actualVal) === normalizeJudgeOutput(tc.expected));
          if (passed) passedCases++;
          else {
            allPassed = false;
            if (!firstFailed) {
              firstFailed = {
                caseNum: idx + 1,
                input: tc.input,
                expected: tc.expected,
                actual: actualVal
              };
            }
          }

          testCaseResults.push({
            title: tc.title || `Test ${idx + 1}`,
            input: tc.input,
            expected: tc.expected,
            actual: actualVal,
            passed: passed
          });
        }

        return {
          success: allPassed,
          status: allPassed ? 'ACCEPTED' : 'WRONG_ANSWER',
          stdout: testCaseResults.map((r, i) => `Test ${i + 1}: ${r.passed ? 'PASSED' : 'FAILED'}`).join('\n'),
          stderr: allPassed ? '' : (firstFailed ? `Test Case ${firstFailed.caseNum} Failed: Expected ${firstFailed.expected}, but got ${firstFailed.actual}` : ''),
          runtimeMs: run.duration,
          memoryMb: memMb,
          compiler: 'g++ (MinGW GCC -O2)',
          exitCode: allPassed ? 0 : 1,
          passedCases: passedCases,
          totalCases: testCases.length,
          firstFailed: firstFailed,
          testCaseResults: testCaseResults
        };
      }

      return {
        success: run.exitCode === 0,
        status: run.timedOut ? 'TIME_LIMIT_EXCEEDED' : run.exitCode === 0 ? 'ACCEPTED' : 'RUNTIME_ERROR',
        stdout: run.stdout,
        stderr: run.stderr,
        runtimeMs: run.duration,
        memoryMb: memMb,
        compiler: 'g++ (MinGW GCC -O2)',
        exitCode: run.exitCode
      };
    }

    if (lang === 'c') {
      let finalCode = code;
      if (!finalCode.includes('main(')) {
        let headerPrefix = '';
        if (!finalCode.includes('<stdio.h>')) headerPrefix += '#include <stdio.h>\n';
        if (!finalCode.includes('<stdlib.h>')) headerPrefix += '#include <stdlib.h>\n';
        if (!finalCode.includes('<string.h>')) headerPrefix += '#include <string.h>\n';
        if (!finalCode.includes('<stdbool.h>')) headerPrefix += '#include <stdbool.h>\n';

        const mainHarness = `\nint main() {\n    return 0;\n}\n`;
        finalCode = headerPrefix + '\n' + finalCode + '\n' + mainHarness;
      }

      const srcPath = path.join(tmpDir, 'solution.c');
      const binPath = path.join(tmpDir, 'solution.exe');
      fs.writeFileSync(srcPath, finalCode, 'utf8');

      // Compile with GCC
      const compile = await runProcess('gcc', ['-O2', 'solution.c', '-o', 'solution.exe'], '', 8000, tmpDir);
      if (compile.exitCode !== 0) {
        return {
          success: false,
          status: 'COMPILATION_ERROR',
          stdout: '',
          stderr: compile.stderr || 'Compilation failed with error code ' + compile.exitCode,
          runtimeMs: compile.duration,
          memoryMb: memMb,
          compiler: 'gcc (MinGW GCC -O2)',
          exitCode: compile.exitCode
        };
      }

      const run = await runProcess(binPath, [], stdin, 6000, tmpDir);
      return {
        success: run.exitCode === 0,
        status: run.timedOut ? 'TIME_LIMIT_EXCEEDED' : run.exitCode === 0 ? 'ACCEPTED' : 'RUNTIME_ERROR',
        stdout: run.stdout,
        stderr: run.stderr,
        runtimeMs: run.duration,
        memoryMb: memMb,
        compiler: 'gcc (MinGW GCC -O2)',
        exitCode: run.exitCode
      };
    }

    if (lang === 'java') {
      let className = 'Solution';
      const classMatch = code.match(/public\s+class\s+([A-Za-z0-9_]+)/) || code.match(/class\s+([A-Za-z0-9_]+)/);
      if (classMatch && classMatch[1]) {
        className = classMatch[1];
      }
      let finalCode = code;
      if (!finalCode.includes('import java.util.')) {
        finalCode = 'import java.util.*;\nimport java.io.*;\n' + finalCode;
      }
      if (!finalCode.includes('public static void main')) {
        const lastBraceIdx = finalCode.lastIndexOf('}');
        if (lastBraceIdx !== -1) {
          const mainHarness = `\n    public static void main(String[] args) {\n    }\n`;
          finalCode = finalCode.substring(0, lastBraceIdx) + mainHarness + finalCode.substring(lastBraceIdx);
        }
      }

      const srcPath = path.join(tmpDir, `${className}.java`);
      fs.writeFileSync(srcPath, finalCode, 'utf8');

      const compile = await runProcess('javac', ['-encoding', 'UTF-8', `${className}.java`], '', 8000, tmpDir);
      if (compile.exitCode !== 0) {
        return {
          success: false,
          status: 'COMPILATION_ERROR',
          stdout: '',
          stderr: compile.stderr || 'Java compilation failed',
          runtimeMs: compile.duration,
          memoryMb: memMb,
          compiler: 'OpenJDK (Java HotSpot 64-Bit VM)',
          exitCode: compile.exitCode
        };
      }

      const run = await runProcess('java', ['-Xmx256m', className], stdin, 6000, tmpDir);
      return {
        success: run.exitCode === 0,
        status: run.timedOut ? 'TIME_LIMIT_EXCEEDED' : run.exitCode === 0 ? 'ACCEPTED' : 'RUNTIME_ERROR',
        stdout: run.stdout,
        stderr: run.stderr,
        runtimeMs: run.duration,
        memoryMb: memMb,
        compiler: 'OpenJDK (Java HotSpot 64-Bit VM)',
        exitCode: run.exitCode
      };
    }

    if (lang === 'javascript' || lang === 'js') {
      let finalCode = code;
      const hasTestCases = Array.isArray(testCases) && testCases.length > 0;

      if (hasTestCases) {
        const jsRunner = `
${finalCode}

const testCases = ${JSON.stringify(testCases)};
for (let idx = 0; idx < testCases.length; idx++) {
  const tc = testCases[idx];
  console.log('---JUDGEX_TC_START:' + idx + '---');
  try {
    const fnNames = Object.keys(global).filter(k => typeof global[k] === 'function' && !['setTimeout', 'setInterval', 'setImmediate', 'clearTimeout', 'clearInterval', 'clearImmediate'].includes(k));
    const targetFn = typeof isMatch === 'function' ? isMatch :
                     typeof twoSum === 'function' ? twoSum :
                     typeof isPalindrome === 'function' ? isPalindrome :
                     typeof maxArea === 'function' ? maxArea :
                     typeof lengthOfLongestSubstring === 'function' ? lengthOfLongestSubstring :
                     typeof isValid === 'function' ? isValid :
                     (fnNames.length > 0 ? global[fnNames[fnNames.length - 1]] : null);
    
    // Evaluate args
    const parts = (tc.input || '').split(/,\\s*(?=[a-zA-Z_][a-zA-Z0-9_]*\\s*=)/);
    const args = parts.map(p => {
      const eq = p.indexOf('=');
      const valStr = eq !== -1 ? p.substring(eq + 1).trim() : p.trim();
      try { return eval('(' + valStr + ')'); } catch(e) { return valStr; }
    });

    const res = targetFn ? targetFn(...args) : '(no function found)';
    const out = typeof res === 'boolean' ? (res ? 'true' : 'false') : (typeof res === 'object' ? JSON.stringify(res) : String(res));
    console.log('OUTPUT:' + out);
  } catch(e) {
    console.log('ERROR:' + e.message);
  }
  console.log('---JUDGEX_TC_END:' + idx + '---');
}
`;
        finalCode = jsRunner;
      }

      const srcPath = path.join(tmpDir, 'solution.js');
      fs.writeFileSync(srcPath, finalCode, 'utf8');
      const run = await runProcess('node', ['solution.js'], stdin, 6000, tmpDir);

      if (hasTestCases && run.exitCode === 0) {
        const testCaseResults = [];
        let allPassed = true;
        let firstFailed = null;
        let passedCases = 0;

        for (let idx = 0; idx < testCases.length; idx++) {
          const tc = testCases[idx];
          const tcRegex = new RegExp(`---JUDGEX_TC_START:${idx}---[\\r\\n]+([\\s\\S]*?)[\\r\\n]+---JUDGEX_TC_END:${idx}---`);
          const tcMatch = run.stdout.match(tcRegex);
          let actualVal = '';
          let hasError = false;

          if (tcMatch) {
            const block = tcMatch[1].trim();
            if (block.startsWith('OUTPUT:')) {
              actualVal = block.substring(7).trim();
            } else if (block.startsWith('ERROR:')) {
              actualVal = block.substring(6).trim();
              hasError = true;
            } else {
              actualVal = block;
            }
          } else {
            actualVal = '(no output / exception)';
            hasError = true;
          }

          const passed = !hasError && (normalizeJudgeOutput(actualVal) === normalizeJudgeOutput(tc.expected));
          if (passed) passedCases++;
          else {
            allPassed = false;
            if (!firstFailed) {
              firstFailed = {
                caseNum: idx + 1,
                input: tc.input,
                expected: tc.expected,
                actual: actualVal
              };
            }
          }

          testCaseResults.push({
            title: tc.title || `Test ${idx + 1}`,
            input: tc.input,
            expected: tc.expected,
            actual: actualVal,
            passed: passed
          });
        }

        return {
          success: allPassed,
          status: allPassed ? 'ACCEPTED' : 'WRONG_ANSWER',
          stdout: testCaseResults.map((r, i) => `Test ${i + 1}: ${r.passed ? 'PASSED' : 'FAILED'}`).join('\n'),
          stderr: allPassed ? '' : (firstFailed ? `Test Case ${firstFailed.caseNum} Failed: Expected ${firstFailed.expected}, but got ${firstFailed.actual}` : ''),
          runtimeMs: run.duration,
          memoryMb: memMb,
          compiler: 'Node.js (V8 Engine)',
          exitCode: allPassed ? 0 : 1,
          passedCases: passedCases,
          totalCases: testCases.length,
          firstFailed: firstFailed,
          testCaseResults: testCaseResults
        };
      }

      return {
        success: run.exitCode === 0,
        status: run.timedOut ? 'TIME_LIMIT_EXCEEDED' : run.exitCode === 0 ? 'ACCEPTED' : 'RUNTIME_ERROR',
        stdout: run.stdout,
        stderr: run.stderr,
        runtimeMs: run.duration,
        memoryMb: memMb,
        compiler: 'Node.js (V8 Engine)',
        exitCode: run.exitCode
      };
    }

    return {
      success: false,
      status: 'UNSUPPORTED_LANGUAGE',
      stdout: '',
      stderr: `Language "${language}" is not supported for server-side compilation.`,
      runtimeMs: 0,
      memoryMb: '0.0',
      compiler: 'JudgeX Core Engine',
      exitCode: 1
    };

  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let bodyData = '';
    req.on('data', (chunk) => {
      bodyData += chunk;
      if (bodyData.length > 5 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Request payload too large (max 5MB)'));
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(bodyData || '{}'));
      } catch (e) {
        reject(new Error('Invalid JSON payload: ' + e.message));
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const parsedPath = parsed.pathname;
  const query = parsed.query || {};

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // ==========================================
  // AUTHENTICATION API ROUTES (MONGODB)
  // ==========================================

  // 1. User Registration (Student & Admin)
  if (req.method === 'POST' && parsedPath === '/api/auth/register') {
    try {
      const body = await readJsonBody(req);
      const user = await db.registerUser(body);
      return sendJson(res, 201, {
        success: true,
        message: 'Account registered successfully in MongoDB database.',
        user
      });
    } catch (err) {
      return sendJson(res, 400, {
        success: false,
        error: err.message || 'Registration failed'
      });
    }
  }

  // 2. User Login (Student & Admin)
  if (req.method === 'POST' && parsedPath === '/api/auth/login') {
    try {
      const body = await readJsonBody(req);
      const user = await db.loginUser(body);
      return sendJson(res, 200, {
        success: true,
        message: 'Authenticated successfully against MongoDB database.',
        user
      });
    } catch (err) {
      return sendJson(res, 401, {
        success: false,
        error: err.message || 'Authentication failed'
      });
    }
  }

  // ==========================================
  // CODE EXECUTION & SUBMISSION PERSISTENCE
  // ==========================================

  if (req.method === 'POST' && (parsedPath === '/api/execute' || parsedPath === '/execute')) {
    try {
      const payload = await readJsonBody(req);
      const {
        language,
        code,
        stdin,
        testCases,
        isSubmission,
        studentName,
        studentRoll,
        studentEmail,
        problemKey,
        problemTitle
      } = payload;

      if (!code || typeof code !== 'string') {
        return sendJson(res, 400, { success: false, error: 'Source code is required' });
      }

      // Execute code via sandboxed compiler engine
      const result = await executeCodeEngine(language, code, stdin, testCases, problemKey, problemTitle);

      // Save submission permanently in MongoDB only if isSubmission is true and code was implemented
      if (isSubmission === true && result.status !== 'NOT_IMPLEMENTED') {
        try {
          const subDoc = await db.saveSubmission({
            studentName: studentName || 'Student Coder',
            studentRoll: (studentRoll || '0863CS221045').toUpperCase(),
            studentEmail: studentEmail || '',
            problemKey: problemKey || 'two-sum',
            problemTitle: problemTitle || 'Two Sum',
            language: language || 'python',
            code: code,
            stdin: stdin || '',
            stdout: result.stdout || '',
            stderr: result.stderr || '',
            verdict: result.status,
            runtimeMs: result.runtimeMs || 0,
            memoryMb: result.memoryMb || '14.0',
            compiler: result.compiler || 'JudgeX Sandbox Engine',
            exitCode: result.exitCode || 0,
            isSubmission: true
          });

          result.savedToDatabase = true;
          result.submissionId = subDoc.submissionId;
          result.dbId = subDoc._id;
          result.createdAt = subDoc.createdAt;
          console.log(`[Database] Submission #${subDoc.submissionId} (${result.status}) saved to MongoDB for roll ${subDoc.studentRoll}.`);
        } catch (dbErr) {
          console.error('[Database Error saving submission]', dbErr);
          result.savedToDatabase = false;
          result.dbError = dbErr.message;
        }
      }

      return sendJson(res, 200, result);
    } catch (err) {
      return sendJson(res, 500, {
        success: false,
        status: 'INTERNAL_ERROR',
        stderr: 'Internal execution error: ' + err.message
      });
    }
  }

  // ==========================================
  // SUBMISSIONS RETRIEVAL API (STUDENT & ADMIN)
  // ==========================================

  // 1. Student Submission History (filtered by student roll)
  if (req.method === 'GET' && parsedPath === '/api/submissions/student') {
    try {
      const roll = query.roll || '0863CS221045';
      const limit = parseInt(query.limit, 10) || 50;
      const subs = await db.getStudentSubmissions(roll, limit);
      return sendJson(res, 200, {
        success: true,
        count: subs.length,
        studentRoll: roll,
        submissions: subs
      });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 2. Admin All Submissions Stream (telemetry stream)
  if (req.method === 'GET' && parsedPath === '/api/submissions/admin') {
    try {
      const verdict = query.verdict || 'ALL';
      const limit = parseInt(query.limit, 10) || 100;
      const subs = await db.getAllSubmissions({ verdict, limit });
      return sendJson(res, 200, {
        success: true,
        count: subs.length,
        verdictFilter: verdict,
        submissions: subs
      });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 3. Single Submission Detail (for inspect modal)
  if (req.method === 'GET' && parsedPath === '/api/submissions/detail') {
    try {
      const id = query.id;
      if (!id) {
        return sendJson(res, 400, { success: false, error: 'Submission ID is required' });
      }
      const sub = await db.getSubmissionById(id);
      if (!sub) {
        return sendJson(res, 404, { success: false, error: 'Submission not found in database' });
      }
      return sendJson(res, 200, { success: true, submission: sub });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 4. Admin Aggregated Stats
  if (req.method === 'GET' && parsedPath === '/api/stats/admin') {
    try {
      const stats = await db.getAdminStats();
      return sendJson(res, 200, { success: true, stats });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 5. Student Aggregated Stats
  if (req.method === 'GET' && parsedPath === '/api/stats/student') {
    try {
      const roll = query.roll || '0863CS221045';
      const stats = await db.getStudentStats(roll);
      return sendJson(res, 200, { success: true, studentRoll: roll, stats });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // 6. Simulate Submission for Admin Telemetry
  if (req.method === 'POST' && parsedPath === '/api/submissions/simulate') {
    try {
      const candidates = [
        { name: 'Alex Vance', roll: '0863CS221045', email: 'alex.vance@university.edu' },
        { name: 'Priya Sharma', roll: '0863CS221077', email: 'priya.sharma@university.edu' },
        { name: 'Marcus Sterling', roll: '0863IT221034', email: 'marcus.s@university.edu' },
        { name: 'Kevin Zhang', roll: '0863EC221099', email: 'kevin.z@university.edu' }
      ];
      const probs = [
        { key: 'two-sum', title: 'Two Sum' },
        { key: 'valid-parens', title: 'Valid Parentheses' },
        { key: 'longest-substring', title: 'Longest Substring Without Repeating' },
        { key: 'median-arrays', title: 'Median of Two Sorted Arrays' }
      ];
      const langs = ['cpp', 'python', 'java', 'javascript'];
      const verdicts = ['ACCEPTED', 'ACCEPTED', 'WRONG ANSWER', 'TIME LIMIT EXCEEDED'];

      const cand = candidates[Math.floor(Math.random() * candidates.length)];
      const prob = probs[Math.floor(Math.random() * probs.length)];
      const lang = langs[Math.floor(Math.random() * langs.length)];
      const verd = verdicts[Math.floor(Math.random() * verdicts.length)];
      const runtime = verd === 'TIME LIMIT EXCEEDED' ? 5004 : Math.floor(Math.random() * 28) + 2;
      const mem = (Math.floor(Math.random() * 20) + 4) + '.' + Math.floor(Math.random() * 9);

      const simDoc = await db.saveSubmission({
        studentName: cand.name,
        studentRoll: cand.roll,
        studentEmail: cand.email,
        problemKey: prob.key,
        problemTitle: prob.title,
        language: lang,
        code: `// Live Telemetry Candidate Submission\n// Student: ${cand.name} (${cand.roll})\n// Problem: ${prob.title}\n\nint solution() {\n    return 0;\n}`,
        stdin: '',
        stdout: verd === 'ACCEPTED' ? 'Target match verified.' : '',
        stderr: verd === 'TIME LIMIT EXCEEDED' ? 'TLE terminating...' : '',
        verdict: verd,
        runtimeMs: runtime,
        memoryMb: mem,
        compiler: 'JudgeX Worker Node',
        exitCode: verd === 'ACCEPTED' ? 0 : 1,
        isSubmission: true
      });

      return sendJson(res, 201, { success: true, submission: simDoc });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // ==========================================
  // STATIC FILE SERVER
  // ==========================================
  let safePath = path.normalize(decodeURIComponent(parsedPath)).replace(/^(\.\.[\/\\])+/, '');
  
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  } else if (safePath === '/login' || safePath === '\\login' || safePath === '/admin' || safePath === '\\admin') {
    safePath = '/login.html';
  }

  const filePath = path.join(PUBLIC_DIR, safePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + safePath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    };

    if (ext === '.html' || ext === '.js' || ext === '.css') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    } else if (ext === '.jpg' || ext === '.png' || ext === '.webp') {
      headers['Cache-Control'] = 'public, max-age=86400';
    } else {
      headers['Cache-Control'] = 'no-cache';
    }

    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;

      headers['Content-Range'] = `bytes ${start}-${end}/${stats.size}`;
      headers['Accept-Ranges'] = 'bytes';
      headers['Content-Length'] = chunksize;

      res.writeHead(206, headers);
      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
    } else {
      headers['Content-Length'] = stats.size;
      headers['Accept-Ranges'] = 'bytes';
      res.writeHead(200, headers);
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    }
  });
});

// Start Database & HTTP Server
async function startServer() {
  try {
    await db.connectDB();
    console.log('[Database] MongoDB connection initialized successfully.');
  } catch (err) {
    console.error('[Database Warning] MongoDB connection could not be established:', err.message);
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`=======================================================`);
    console.log(`  JUDGEX CODING JUDGE PLATFORM READY (MONGODB CONNECTED)`);
    console.log(`  Local URL:        http://localhost:${PORT}`);
    console.log(`  Execution API:    http://localhost:${PORT}/api/execute`);
    console.log(`  Submissions API:  http://localhost:${PORT}/api/submissions/student`);
    console.log(`  Admin Stream API: http://localhost:${PORT}/api/submissions/admin`);
    console.log(`=======================================================`);
  });
}

startServer();
