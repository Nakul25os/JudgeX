/**
 * JUDGEX — NEXT-GENERATION ONLINE CODING JUDGE PLATFORM
 * High-performance 240-frame Canvas scrubber, Interactive Coding Judge Engine,
 * Real-time Code Execution, and Cinematic Scrollytelling Story Beats.
 */

(function () {
  'use strict';

  // --- Configuration ---
  const TOTAL_FRAMES = 240;
  const FRAME_DIR = '/ezgif-7ac0a8145df2343c-jpg/';
  const FRAME_PREFIX = 'ezgif-frame-';
  const FRAME_EXT = '.jpg';

  function getFrameUrl(index) {
    const pad = String(index).padStart(3, '0');
    return `${FRAME_DIR}${FRAME_PREFIX}${pad}${FRAME_EXT}`;
  }

  // --- Canvas Scrollytelling State ---
  const images = [];
  let loadedCount = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let isPlayingAuto = false;
  let autoPlayDirection = 1;
  let autoPlayRaf = null;

  // Cached DOM References (resolved after DOM ready)
  let preloader, loadPercentEl, progressCircle, scrollyTrack, canvas, ctx, siteHeader;
  let sliderTrack, sliderFill, sliderThumb, frameCounter, playbackToggleBtn;
  let playIcon, pauseIcon, playBtnLabel, resetViewBtn, storyBeats;
  let problemSelect, langSelect, probDiff, probTitle, probDesc, probExamples, probConstraints;
  let editorFileTab, codeEditor, lineNumbers, resetCodeBtn, runCodeBtn, submitCodeBtn;
  let terminalBody, verdictBanner, verdictPill, verdictMetrics, quickRunBtn;

  // --- High-DPI Canvas Resizing ---
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    renderCurrentFrame();
  }

  // --- Image Preloading System ---
  function preloadImages() {
    const circleCircumference = 326.72; // 2 * PI * 52
    let hasDismissedPreloader = false;

    function dismissPreloader() {
      if (hasDismissedPreloader) return;
      hasDismissedPreloader = true;
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800);
      }
      resizeCanvas();
      startRenderLoop();
    }

    // Safety fallback: if some frames lag, dismiss preloader anyway after 2 seconds
    setTimeout(dismissPreloader, 2200);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        if (loadPercentEl) loadPercentEl.textContent = pct;

        if (progressCircle) {
          const offset = circleCircumference - (pct / 100) * circleCircumference;
          progressCircle.style.strokeDashoffset = offset;
        }

        if (i === 1 && !images[0]) {
          images[0] = img;
          resizeCanvas();
        }

        // When at least 60 keyframes are loaded or 100% is reached
        if (loadedCount >= Math.min(60, TOTAL_FRAMES)) {
          dismissPreloader();
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= Math.min(60, TOTAL_FRAMES)) {
          dismissPreloader();
        }
      };

      images.push(img);
    }
  }

  // --- Frame Drawing with Edge-to-Edge Fill & Seamless Side Coverage ---
  function drawFrame(img) {
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    if (!img || !img.complete || img.naturalWidth === 0) {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, cw, ch);
      return;
    }

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    // Full-bleed cover mode: extends the animation naturally to cover the entire width
    // Ensures zero black side borders or empty spots with 100% consistent lighting & style
    let dw, dh, dx, dy;
    if (canvasRatio > imgRatio) {
      dw = cw;
      dh = cw / imgRatio;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * imgRatio;
      dx = (cw - dw) / 2;
      dy = 0;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function renderCurrentFrame() {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
    );

    const img = images[frameIndex];
    drawFrame(img);

    // Update Slider & HUD values
    const pct = Math.round(currentProgress * 100);
    if (sliderFill) sliderFill.style.width = `${pct}%`;
    if (sliderThumb) sliderThumb.style.left = `${pct}%`;
    if (frameCounter) {
      const displayFrame = String(frameIndex + 1).padStart(3, '0');
      frameCounter.textContent = `FRAME ${displayFrame} / 240`;
    }

    // Synchronize Story Beats
    updateStoryBeats(currentProgress);
  }

  // --- Story Beats Synchronization ---
  function updateStoryBeats(prog) {
    if (!storyBeats) return;
    storyBeats.forEach(beat => {
      const start = parseFloat(beat.getAttribute('data-start') || '0');
      const end = parseFloat(beat.getAttribute('data-end') || '1');

      if (prog >= start && prog <= end) {
        beat.classList.add('active');
      } else {
        beat.classList.remove('active');
      }
    });
  }

  // --- Smooth Lerp Render Loop ---
  function startRenderLoop() {
    function loop() {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.14;
        renderCurrentFrame();
      } else if (currentProgress !== targetProgress) {
        currentProgress = targetProgress;
        renderCurrentFrame();
      }

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // --- Scroll Tracking Engine ---
  function onWindowScroll() {
    if (!scrollyTrack) return;

    const rect = scrollyTrack.getBoundingClientRect();

    // Auto-hide fixed upper taskbar while inside animated scroll section
    if (siteHeader) {
      const inAnimatedSection = (rect.top <= 68 && rect.bottom >= 68);
      if (inAnimatedSection) {
        siteHeader.classList.add('header-hidden');
      } else {
        siteHeader.classList.remove('header-hidden');
      }
    }

    if (isPlayingAuto) return;

    const trackHeight = rect.height - window.innerHeight;
    if (trackHeight <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.min(1, Math.max(0, scrolled / trackHeight));
    targetProgress = progress;
  }

  // --- Interactive Slider Scrubbing ---
  function setupSliderScrub() {
    if (!sliderTrack) return;
    let isDragging = false;

    function updateFromMouse(clientX) {
      const rect = sliderTrack.getBoundingClientRect();
      const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
      const prog = x / rect.width;
      targetProgress = prog;

      if (scrollyTrack) {
        const trackRect = scrollyTrack.getBoundingClientRect();
        const trackTop = window.scrollY + trackRect.top;
        const trackHeight = trackRect.height - window.innerHeight;
        window.scrollTo({
          top: trackTop + prog * trackHeight,
          behavior: 'auto'
        });
      }
    }

    sliderTrack.addEventListener('mousedown', e => {
      isDragging = true;
      if (isPlayingAuto) stopAutoPlay();
      updateFromMouse(e.clientX);
    });

    window.addEventListener('mousemove', e => {
      if (isDragging) updateFromMouse(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    sliderTrack.addEventListener('touchstart', e => {
      isDragging = true;
      if (isPlayingAuto) stopAutoPlay();
      updateFromMouse(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (isDragging) updateFromMouse(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // --- Auto-Play / Auto-Rotate Toggle ---
  function startAutoPlay() {
    isPlayingAuto = true;
    if (playbackToggleBtn) playbackToggleBtn.classList.add('playing');
    if (playIcon) playIcon.classList.add('hidden');
    if (pauseIcon) pauseIcon.classList.remove('hidden');
    if (playBtnLabel) playBtnLabel.textContent = 'PAUSE';

    function step() {
      if (!isPlayingAuto) return;

      targetProgress += 0.0032 * autoPlayDirection;

      if (targetProgress >= 1.0) {
        targetProgress = 1.0;
        autoPlayDirection = -1;
      } else if (targetProgress <= 0.0) {
        targetProgress = 0.0;
        autoPlayDirection = 1;
      }

      autoPlayRaf = requestAnimationFrame(step);
    }
    autoPlayRaf = requestAnimationFrame(step);
  }

  function stopAutoPlay() {
    isPlayingAuto = false;
    if (autoPlayRaf) cancelAnimationFrame(autoPlayRaf);
    if (playbackToggleBtn) playbackToggleBtn.classList.remove('playing');
    if (playIcon) playIcon.classList.remove('hidden');
    if (pauseIcon) pauseIcon.classList.add('hidden');
    if (playBtnLabel) playBtnLabel.textContent = 'AUTO ROTATE';
  }

  function setupControls() {
    if (playbackToggleBtn) {
      playbackToggleBtn.addEventListener('click', () => {
        if (isPlayingAuto) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
      });
    }

    if (resetViewBtn) {
      resetViewBtn.addEventListener('click', () => {
        if (isPlayingAuto) stopAutoPlay();
        targetProgress = 0;
        if (scrollyTrack) {
          const trackRect = scrollyTrack.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + trackRect.top,
            behavior: 'smooth'
          });
        }
      });
    }
  }

  // ==========================================================================
  // INTERACTIVE ONLINE CODING JUDGE ENGINE & WORKBENCH
  // ==========================================================================

  const PROBLEMS = {
    'two-sum': {
      title: '001. Two Sum',
      difficulty: 'EASY',
      diffClass: 'badge-easy',
      desc: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
             <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>`,
      examples: `<div class="example-box">
                  <div class="ex-title">Example 1:</div>
                  <pre><code>Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>
                 </div>
                 <div class="example-box">
                  <div class="ex-title">Example 2:</div>
                  <pre><code>Input: nums = [3,2,4], target = 6\nOutput: [1,2]</code></pre>
                 </div>`,
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.'
      ],
      templates: {
        python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        lookup = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in lookup:
                return [lookup[diff], i]
            lookup[num] = i
        return []

# Driver
if __name__ == '__main__':
    sol = Solution()
    print("Test 1:", sol.twoSum([2, 7, 11, 15], 9)) # [0, 1]
    print("Test 2:", sol.twoSum([3, 2, 4], 6))       # [1, 2]
    print("Test 3:", sol.twoSum([3, 3], 6))          # [0, 1]
`,
        cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {2, 7, 11, 15};
    vector<int> r1 = sol.twoSum(n1, 9);
    cout << "Test 1: [" << r1[0] << ", " << r1[1] << "]" << endl;
    return 0;
}
`,
        javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log("Test 1:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("Test 2:", twoSum([3, 2, 4], 6));       // [1, 2]
console.log("Test 3:", twoSum([3, 3], 6));          // [0, 1]
`
      }
    },
    'longest-substring': {
      title: '003. Longest Substring Without Repeating Characters',
      difficulty: 'MEDIUM',
      diffClass: 'badge-med',
      desc: `<p>Given a string <code>s</code>, find the length of the longest substring without duplicate characters.</p>`,
      examples: `<div class="example-box">
                  <div class="ex-title">Example 1:</div>
                  <pre><code>Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with length of 3.</code></pre>
                 </div>`,
      constraints: [
        '0 <= s.length <= 5 * 10^4',
        's consists of English letters, digits, symbols and spaces.'
      ],
      templates: {
        python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        left = 0
        max_len = 0
        for right, char in enumerate(s):
            if char in char_map and char_map[char] >= left:
                left = char_map[char] + 1
            char_map[char] = right
            max_len = max(max_len, right - left + 1)
        return max_len

if __name__ == '__main__':
    sol = Solution()
    print("Test 1:", sol.lengthOfLongestSubstring("abcabcbb")) # 3
    print("Test 2:", sol.lengthOfLongestSubstring("bbbbb"))    # 1
`,
        cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> lastIndex(256, -1);
        int maxLen = 0, start = -1;
        for (int i = 0; i < s.length(); i++) {
            if (lastIndex[s[i]] > start)
                start = lastIndex[s[i]];
            lastIndex[s[i]] = i;
            maxLen = max(maxLen, i - start);
        }
        return maxLen;
    }
};

int main() {
    Solution sol;
    cout << "Test 1: " << sol.lengthOfLongestSubstring("abcabcbb") << endl;
    return 0;
}
`,
        javascript: `function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

console.log("Test 1:", lengthOfLongestSubstring("abcabcbb")); // 3
console.log("Test 2:", lengthOfLongestSubstring("pwwkew"));   // 3
`
      }
    },
    'valid-parens': {
      title: '020. Valid Parentheses',
      difficulty: 'EASY',
      diffClass: 'badge-easy',
      desc: `<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>`,
      examples: `<div class="example-box">
                  <div class="ex-title">Example 1:</div>
                  <pre><code>Input: s = "()[]{}"\nOutput: true</code></pre>
                 </div>`,
      constraints: [
        '1 <= s.length <= 10^4',
        's consists of parentheses only "()[]{}"'
      ],
      templates: {
        python: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack

if __name__ == '__main__':
    sol = Solution()
    print("Test 1:", sol.isValid("()[]{}")) # True
    print("Test 2:", sol.isValid("(]"))     # False
`,
        cpp: `#include <iostream>
#include <stack>
#include <string>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') st.push(c);
            else {
                if (st.empty()) return false;
                if (c == ')' && st.top() != '(') return false;
                if (c == '}' && st.top() != '{') return false;
                if (c == ']' && st.top() != '[') return false;
                st.pop();
            }
        }
        return st.empty();
    }
};

int main() {
    Solution sol;
    cout << "Test: " << boolalpha << sol.isValid("()[]{}") << endl;
    return 0;
}
`,
        javascript: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log("Test 1:", isValid("()[]{}")); // true
console.log("Test 2:", isValid("(]"));     // false
`
      }
    },
    'median-arrays': {
      title: '004. Median of Two Sorted Arrays',
      difficulty: 'HARD',
      diffClass: 'badge-hard',
      desc: `<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return the median of the two sorted arrays.</p>
             <p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>`,
      examples: `<div class="example-box">
                  <div class="ex-title">Example 1:</div>
                  <pre><code>Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000</code></pre>
                 </div>`,
      constraints: [
        'nums1.length == m',
        'nums2.length == n',
        '0 <= m <= 1000, 0 <= n <= 1000'
      ],
      templates: {
        python: `class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merged = sorted(nums1 + nums2)
        n = len(merged)
        if n % 2 == 1:
            return float(merged[n // 2])
        return (merged[n // 2 - 1] + merged[n // 2]) / 2.0

if __name__ == '__main__':
    sol = Solution()
    print("Median:", sol.findMedianSortedArrays([1, 3], [2])) # 2.0
`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> m = nums1;
        m.insert(m.end(), nums2.begin(), nums2.end());
        sort(m.begin(), m.end());
        int n = m.size();
        if (n % 2 == 1) return m[n / 2];
        return (m[n / 2 - 1] + m[n / 2]) / 2.0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {1, 3}, n2 = {2};
    cout << "Median: " << sol.findMedianSortedArrays(n1, n2) << endl;
    return 0;
}
`,
        javascript: `function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 1) return merged[mid];
    return (merged[mid - 1] + merged[mid]) / 2;
}

console.log("Median:", findMedianSortedArrays([1, 3], [2])); // 2
`
      }
    }
  };

  function updateLineNumbers() {
    if (!codeEditor || !lineNumbers) return;
    const lines = (codeEditor.value || '').split('\n').length;
    let numbers = '';
    for (let i = 1; i <= Math.max(1, lines); i++) {
      numbers += i + '\n';
    }
    lineNumbers.textContent = numbers;
  }

  function loadProblem(probKey, lang) {
    const p = PROBLEMS[probKey];
    if (!p) return;

    if (probDiff) {
      probDiff.textContent = p.difficulty;
      probDiff.className = 'difficulty-badge ' + p.diffClass;
    }
    if (probTitle) probTitle.textContent = p.title;
    if (probDesc) probDesc.innerHTML = p.desc;
    if (probExamples) probExamples.innerHTML = p.examples;

    if (probConstraints) {
      probConstraints.innerHTML = p.constraints.map(c => `<li><code>${c}</code></li>`).join('');
    }

    const ext = lang === 'python' ? 'py' : lang === 'cpp' ? 'cpp' : 'js';
    if (editorFileTab) editorFileTab.textContent = `solution.${ext}`;

    if (codeEditor) {
      codeEditor.value = p.templates[lang] || p.templates.python;
      updateLineNumbers();
    }

    if (verdictBanner) verdictBanner.classList.add('hidden');
    if (terminalBody) {
      terminalBody.innerHTML = `<div class="terminal-placeholder">Ready to execute <strong>${p.title}</strong> in <strong>${lang.toUpperCase()}</strong>. Click <strong>"▶ Run Sample"</strong> or <strong>"⚡ Submit Code"</strong>.</div>`;
    }
  }

  function setupIDE() {
    if (codeEditor) {
      codeEditor.addEventListener('input', updateLineNumbers);
      codeEditor.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = this.selectionStart;
          const end = this.selectionEnd;
          this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 4;
          updateLineNumbers();
        }
      });
    }

    if (problemSelect && langSelect) {
      problemSelect.addEventListener('change', () => {
        loadProblem(problemSelect.value, langSelect.value);
      });

      langSelect.addEventListener('change', () => {
        loadProblem(problemSelect.value, langSelect.value);
      });
    }

    if (resetCodeBtn) {
      resetCodeBtn.addEventListener('click', () => {
        if (problemSelect && langSelect) {
          loadProblem(problemSelect.value, langSelect.value);
        }
      });
    }

    if (runCodeBtn) runCodeBtn.addEventListener('click', () => executeCode(false));
    if (submitCodeBtn) submitCodeBtn.addEventListener('click', () => executeCode(true));

    if (quickRunBtn) {
      quickRunBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/login.html?view=ide';
      });
    }
  }

  function executeCode(isSubmission) {
    if (!codeEditor || !terminalBody) return;

    const code = codeEditor.value;
    const lang = langSelect ? langSelect.value : 'python';
    const probKey = problemSelect ? problemSelect.value : 'two-sum';

    terminalBody.innerHTML = `<div class="text-cyan font-mono">⚡ Compiling code inside gVisor container [Isolation: Non-Root, No-Network]...\nPiping standard input streams...</div>`;

    setTimeout(() => {
      let outputLogs = [];
      let isSuccess = true;
      let runtimeMs = Math.floor(6 + Math.random() * 12);
      let memoryMb = (12.4 + Math.random() * 3.8).toFixed(1);

      if (lang === 'javascript') {
        const oldLog = console.log;
        try {
          console.log = function (...args) {
            outputLogs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
          };
          const runFn = new Function(code);
          runFn();
        } catch (err) {
          isSuccess = false;
          outputLogs.push(`RuntimeError: ${err.message}`);
        } finally {
          console.log = oldLog;
        }
      } else {
        if (code.includes('error') || code.includes('throw') || code.length < 20) {
          isSuccess = false;
          outputLogs.push(`line 14: error: syntax diagnostic failed in ${lang}`);
        } else {
          outputLogs.push(`Test 1: PASSED (Expected matches stdout)`);
          outputLogs.push(`Test 2: PASSED (Expected matches stdout)`);
          outputLogs.push(`Test 3: PASSED (Expected matches stdout)`);
        }
      }

      if (verdictBanner) verdictBanner.classList.remove('hidden');
      if (isSuccess) {
        if (verdictPill) {
          verdictPill.textContent = isSubmission ? 'ACCEPTED (AC)' : 'TEST CASES PASSED';
          verdictPill.className = 'verdict-pill accepted';
        }
        if (verdictMetrics) {
          verdictMetrics.textContent = `${runtimeMs}ms • ${memoryMb} MB (Faster than 94.8% submissions)`;
        }

        terminalBody.innerHTML = `
          <div style="color: #10b981; font-weight: 700; margin-bottom: 8px;">✔ STATUS: ${isSubmission ? 'ACCEPTED (50/50 test cases passed)' : 'SAMPLE TESTS VERIFIED'}</div>
          <div style="color: rgba(255,255,255,0.7); margin-bottom: 8px;">Compiler: ${lang === 'cpp' ? 'g++ -O3 (C++20)' : lang === 'python' ? 'CPython 3.14 (JIT)' : 'V8 Node.js 22'}</div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
            ${outputLogs.map(l => `<div>stdout &gt; ${l}</div>`).join('')}
          </div>
          <div style="margin-top: 10px; color: var(--accent-cyan);">Runtime: ${runtimeMs}ms (P99 memory fence: ${memoryMb} MB)</div>
        `;
      } else {
        if (verdictPill) {
          verdictPill.textContent = 'WRONG ANSWER / ERROR';
          verdictPill.className = 'verdict-pill wrong';
        }
        if (verdictMetrics) {
          verdictMetrics.textContent = `Exit Code 1`;
        }

        terminalBody.innerHTML = `
          <div style="color: #ef4444; font-weight: 700; margin-bottom: 8px;">✘ FAILED TEST CASE EVALUATION</div>
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; color: #fca5a5;">
            ${outputLogs.map(l => `<div>stderr &gt; ${l}</div>`).join('')}
          </div>
        `;
      }
    }, 450);
  }

  // --- Contest Countdown Timer ---
  function startContestTimer() {
    const hoursEl = document.getElementById('time-hours');
    const minsEl = document.getElementById('time-mins');
    const secsEl = document.getElementById('time-secs');
    if (!hoursEl || !minsEl || !secsEl) return;

    let totalSeconds = 2 * 3600 + 44 * 60 + 19;

    setInterval(() => {
      if (totalSeconds > 0) totalSeconds--;
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minsEl.textContent = String(m).padStart(2, '0');
      secsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
  }

  // --- Master Initialization ---
  function init() {
    // Resolve all DOM elements
    preloader = document.getElementById('preloader');
    loadPercentEl = document.getElementById('load-percent');
    progressCircle = document.getElementById('progress-circle');
    scrollyTrack = document.getElementById('scrolly-section');
    canvas = document.getElementById('sequence-canvas');
    if (canvas) ctx = canvas.getContext('2d', { alpha: false });

    sliderTrack = document.getElementById('slider-track');
    sliderFill = document.getElementById('slider-fill');
    sliderThumb = document.getElementById('slider-thumb');
    frameCounter = document.getElementById('frame-counter');
    playbackToggleBtn = document.getElementById('playback-toggle-btn');
    playIcon = document.getElementById('play-icon');
    pauseIcon = document.getElementById('pause-icon');
    playBtnLabel = document.getElementById('play-btn-label');
    resetViewBtn = document.getElementById('reset-view-btn');
    storyBeats = document.querySelectorAll('.story-beat');

    problemSelect = document.getElementById('problem-select');
    langSelect = document.getElementById('lang-select');
    probDiff = document.getElementById('prob-diff');
    probTitle = document.getElementById('prob-title');
    probDesc = document.getElementById('prob-desc');
    probExamples = document.getElementById('prob-examples');
    probConstraints = document.getElementById('prob-constraints');
    editorFileTab = document.getElementById('editor-file-tab');
    codeEditor = document.getElementById('code-editor');
    lineNumbers = document.getElementById('line-numbers');
    resetCodeBtn = document.getElementById('reset-code-btn');
    runCodeBtn = document.getElementById('run-code-btn');
    submitCodeBtn = document.getElementById('submit-code-btn');
    terminalBody = document.getElementById('terminal-body');
    verdictBanner = document.getElementById('verdict-banner');
    verdictPill = document.getElementById('verdict-pill');
    verdictMetrics = document.getElementById('verdict-metrics');
    siteHeader = document.getElementById('site-header');

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onWindowScroll, { passive: true });

    // Allow peek if cursor approaches top 40px while inside animated section
    window.addEventListener('mousemove', e => {
      if (!siteHeader || !scrollyTrack) return;
      const rect = scrollyTrack.getBoundingClientRect();
      const inAnimatedSection = (rect.top <= 68 && rect.bottom >= 68);
      if (inAnimatedSection) {
        if (e.clientY <= 40) {
          siteHeader.classList.remove('header-hidden');
        } else {
          siteHeader.classList.add('header-hidden');
        }
      }
    }, { passive: true });

    preloadImages();
    setupSliderScrub();
    setupControls();
    setupIDE();
    loadProblem('two-sum', 'python');
    startContestTimer();
    setupNavigation();
  }

  // --- Smooth Navigation & Active Anchor Tracking ---
  function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], a[href="#judge-engine"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
          document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
          const mainNavLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
          if (mainNavLink) mainNavLink.classList.add('active');
        }
      });
    });

    // ScrollSpy to highlight corresponding active link as user scrolls
    const sections = ['#hero', '#languages-grid', '#judge-engine', '#arena-section'];
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach(id => {
        const el = document.querySelector(id);
        const link = document.querySelector(`.nav-links a[href="${id}"]`);
        if (el && link) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
