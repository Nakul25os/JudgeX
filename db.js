/**
 * Database Module for JudgeX Platform
 * Powered by MongoDB (native driver)
 * Database: judgex_db
 * Collections: users, submissions, problems
 */

const { MongoClient, ObjectId } = require('mongodb');
const crypto = require('crypto');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'judgex_db';

let client = null;
let db = null;
let isConnected = false;

function hashPassword(password) {
  if (!password) return '';
  return crypto.createHash('sha256').update(password + '_judgex_salt_2026').digest('hex');
}

async function connectDB() {
  if (isConnected && db) return db;

  try {
    client = new MongoClient(MONGO_URI, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 5000
    });
    await client.connect();
    db = client.db(DB_NAME);
    isConnected = true;
    console.log(`[Database] Connected to MongoDB at ${MONGO_URI}/${DB_NAME}`);

    // Initialize collections and seed default records
    await initDB();
    return db;
  } catch (err) {
    console.error(`[Database Error] Could not connect to MongoDB: ${err.message}`);
    isConnected = false;
    return null;
  }
}

async function initDB() {
  if (!db) return;

  try {
    const users = db.collection('users');
    const submissions = db.collection('submissions');

    // Create indexes
    await users.createIndex({ email: 1 }, { unique: true, sparse: true });
    await users.createIndex({ roll: 1 }, { unique: true, sparse: true });
    await submissions.createIndex({ submissionId: -1 });
    await submissions.createIndex({ studentRoll: 1 });
    await submissions.createIndex({ createdAt: -1 });

    // Seed default Admin if missing
    const adminExists = await users.findOne({ role: 'admin' });
    if (!adminExists) {
      await users.insertOne({
        name: 'Dr. Marcus Sterling',
        email: 'admin.root@judge.internal',
        role: 'admin',
        pin: '849201',
        passwordHash: hashPassword('SuperMasterPass#2026'),
        department: 'Computer Science & Engineering',
        createdAt: new Date()
      });
      console.log('[Database] Seeded default administrator account.');
    }

    // Seed default demo student if missing
    const studentExists = await users.findOne({ roll: '0863CS221045' });
    if (!studentExists) {
      await users.insertOne({
        name: 'Alex Vance',
        roll: '0863CS221045',
        email: 'alex.vance@university.edu',
        department: 'Computer Science & Eng (CSE)',
        preferredLanguage: 'python',
        role: 'student',
        passwordHash: hashPassword('studentPass2026'),
        createdAt: new Date()
      });
      console.log('[Database] Seeded default student account (Alex Vance).');
    }

    // Seed initial historical submissions if empty
    const subCount = await submissions.countDocuments();
    if (subCount === 0) {
      const initialSubs = [
        {
          submissionId: 10005,
          studentName: 'Alex Vance',
          studentRoll: '0863CS221045',
          studentEmail: 'alex.vance@university.edu',
          problemKey: 'two-sum',
          problemTitle: 'Two Sum',
          language: 'python',
          code: `class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        lookup = {}\n        for i, num in enumerate(nums):\n            diff = target - num\n            if diff in lookup:\n                return [lookup[diff], i]\n            lookup[num] = i\n        return []\n`,
          verdict: 'ACCEPTED',
          runtimeMs: 14,
          memoryMb: '14.2',
          compiler: 'Python 3.14 (CPython JIT)',
          exitCode: 0,
          isSubmission: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 5) // 5 mins ago
        },
        {
          submissionId: 10004,
          studentName: 'Dev Patel',
          studentRoll: '0863IT221089',
          studentEmail: 'dev.patel@university.edu',
          problemKey: 'two-sum',
          problemTitle: 'Two Sum',
          language: 'cpp',
          code: `#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> mp;\n        for (int i = 0; i < nums.size(); ++i) {\n            int comp = target - nums[i];\n            if (mp.count(comp)) return {mp[comp], i};\n            mp[nums[i]] = i;\n        }\n        return {};\n    }\n};\n`,
          verdict: 'ACCEPTED',
          runtimeMs: 2,
          memoryMb: '4.1',
          compiler: 'g++ (MinGW GCC -O2)',
          exitCode: 0,
          isSubmission: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 15)
        },
        {
          submissionId: 10003,
          studentName: 'Sara Chen',
          studentRoll: '0863CS221012',
          studentEmail: 'sara.chen@university.edu',
          problemKey: 'valid-parens',
          problemTitle: 'Valid Parentheses',
          language: 'java',
          code: `class Solution {\n    public boolean isValid(String s) {\n        while (s.contains("()") || s.contains("[]") || s.contains("{}")) {\n            s = s.replace("()", "").replace("[]", "").replace("{}", "");\n        }\n        return s.isEmpty();\n    }\n}\n`,
          verdict: 'TIME LIMIT EXCEEDED',
          runtimeMs: 5002,
          memoryMb: '48.5',
          compiler: 'OpenJDK (Java HotSpot 64-Bit VM)',
          exitCode: 124,
          isSubmission: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 30)
        },
        {
          submissionId: 10002,
          studentName: 'Rohan Mehta',
          studentRoll: '0863EC221034',
          studentEmail: 'rohan.mehta@university.edu',
          problemKey: 'longest-substring',
          problemTitle: 'Longest Substring Without Repeating Characters',
          language: 'cpp',
          code: `int lengthOfLongestSubstring(string s) {\n    int n = s.length();\n    int res = 0;\n    // missing loop logic\n    return res\n}\n`,
          verdict: 'COMPILATION ERROR',
          runtimeMs: 140,
          memoryMb: '0.0',
          compiler: 'g++ (MinGW GCC -O2)',
          exitCode: 1,
          isSubmission: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 45)
        },
        {
          submissionId: 10001,
          studentName: 'Maya Lin',
          studentRoll: '0863CS221099',
          studentEmail: 'maya.lin@university.edu',
          problemKey: 'two-sum',
          problemTitle: 'Two Sum',
          language: 'javascript',
          code: `function twoSum(nums, target) {\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i + 1; j < nums.length; j++) {\n            if (nums[i] + nums[j] === target) return [i + 1, j + 1];\n        }\n    }\n    return [];\n}\n`,
          verdict: 'WRONG ANSWER',
          runtimeMs: 28,
          memoryMb: '22.4',
          compiler: 'Node.js (V8 Engine)',
          exitCode: 0,
          isSubmission: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60)
        }
      ];

      await submissions.insertMany(initialSubs);
      console.log('[Database] Seeded initial database submissions.');
    }
  } catch (err) {
    console.error('[Database Init Error]', err);
  }
}

// ==========================================
// USER AUTHENTICATION & PROFILE METHODS
// ==========================================

async function registerUser({ name, roll, email, department, preferredLanguage, password, role = 'student' }) {
  const database = await connectDB();
  if (!database) throw new Error('Database connection offline');

  const users = database.collection('users');

  // Check if email or roll already exists
  if (email) {
    const existingEmail = await users.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      throw new Error(`Email ${email} is already registered. Please sign in.`);
    }
  }

  if (roll) {
    const cleanRoll = roll.trim().toUpperCase();
    const existingRoll = await users.findOne({ roll: cleanRoll });
    if (existingRoll) {
      throw new Error(`Roll Number ${cleanRoll} is already registered. Please sign in.`);
    }
  }

  const newUser = {
    name: name.trim(),
    roll: (roll || '').trim().toUpperCase(),
    email: (email || '').trim().toLowerCase(),
    department: department || 'General Engineering',
    preferredLanguage: preferredLanguage || 'python',
    role: role,
    passwordHash: hashPassword(password),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const result = await users.insertOne(newUser);
  return {
    _id: result.insertedId,
    name: newUser.name,
    roll: newUser.roll,
    email: newUser.email,
    department: newUser.department,
    preferredLanguage: newUser.preferredLanguage,
    role: newUser.role,
    createdAt: newUser.createdAt
  };
}

async function loginUser({ identifier, password, pin, role = 'student' }) {
  const database = await connectDB();
  if (!database) throw new Error('Database connection offline');

  const users = database.collection('users');
  const cleanId = (identifier || '').trim();
  const pwdHash = hashPassword(password);

  if (role === 'admin') {
    // Admin login via handle/email and pin
    const admin = await users.findOne({
      role: 'admin',
      $or: [
        { email: cleanId.toLowerCase() },
        { name: cleanId }
      ]
    });

    if (!admin) {
      throw new Error('Administrator account not found in database.');
    }

    if (admin.passwordHash !== pwdHash) {
      throw new Error('Invalid master security passphrase.');
    }

    if (pin && admin.pin && admin.pin !== pin) {
      throw new Error('Invalid 2FA security token / hardware PIN.');
    }

    return {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: 'admin',
      department: admin.department
    };
  }

  // Student login via email or university roll number
  const cleanRoll = cleanId.toUpperCase();
  const cleanEmail = cleanId.toLowerCase();

  const student = await users.findOne({
    role: 'student',
    $or: [
      { roll: cleanRoll },
      { email: cleanEmail }
    ]
  });

  if (!student) {
    throw new Error('Student account not found in database. Please register first.');
  }

  if (student.passwordHash !== pwdHash) {
    throw new Error('Incorrect password. Please verify credentials.');
  }

  return {
    _id: student._id,
    name: student.name,
    roll: student.roll,
    email: student.email,
    department: student.department,
    preferredLanguage: student.preferredLanguage,
    role: 'student'
  };
}

// ==========================================
// CODE SUBMISSION PERSISTENCE METHODS
// ==========================================

async function saveSubmission(subData) {
  const database = await connectDB();
  if (!database) throw new Error('Database connection offline');

  const submissions = database.collection('submissions');

  // Generate next sequential submission ID
  const latest = await submissions.find().sort({ submissionId: -1 }).limit(1).toArray();
  const nextId = (latest.length && latest[0].submissionId) ? latest[0].submissionId + 1 : 10001;

  const doc = {
    submissionId: nextId,
    studentName: subData.studentName || 'Anonymous Coder',
    studentRoll: (subData.studentRoll || '0863CS221045').toUpperCase(),
    studentEmail: (subData.studentEmail || '').toLowerCase(),
    problemKey: subData.problemKey || 'two-sum',
    problemTitle: subData.problemTitle || 'Two Sum',
    language: (subData.language || 'python').toLowerCase(),
    code: subData.code || '',
    stdin: subData.stdin || '',
    stdout: subData.stdout || '',
    stderr: subData.stderr || '',
    verdict: subData.verdict || 'ACCEPTED',
    runtimeMs: Number(subData.runtimeMs || 0),
    memoryMb: String(subData.memoryMb || '14.0'),
    compiler: subData.compiler || 'JudgeX Sandbox Engine',
    exitCode: Number(subData.exitCode || 0),
    isSubmission: Boolean(subData.isSubmission !== false),
    createdAt: new Date()
  };

  const result = await submissions.insertOne(doc);
  return { ...doc, _id: result.insertedId };
}

async function getStudentSubmissions(studentRoll, limit = 50) {
  const database = await connectDB();
  if (!database) return [];

  const submissions = database.collection('submissions');
  const roll = (studentRoll || '').trim().toUpperCase();

  return await submissions
    .find({ studentRoll: roll })
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}

async function getAllSubmissions({ verdict, limit = 100 } = {}) {
  const database = await connectDB();
  if (!database) return [];

  const submissions = database.collection('submissions');
  const query = {};

  if (verdict && verdict !== 'ALL') {
    query.verdict = verdict;
  }

  return await submissions
    .find(query)
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}

async function getSubmissionById(id) {
  const database = await connectDB();
  if (!database) return null;

  const submissions = database.collection('submissions');

  // Try numeric submissionId first
  const numId = parseInt(id, 10);
  if (!isNaN(numId)) {
    const sub = await submissions.findOne({ submissionId: numId });
    if (sub) return sub;
  }

  // Try ObjectId
  try {
    return await submissions.findOne({ _id: new ObjectId(id) });
  } catch (e) {
    return null;
  }
}

// ==========================================
// PLATFORM & STUDENT STATS AGGREGATION
// ==========================================

async function getAdminStats() {
  const database = await connectDB();
  if (!database) return { totalSubmissions: 0, acceptedCount: 0, studentCount: 0 };

  const submissions = database.collection('submissions');
  const users = database.collection('users');

  const totalSubmissions = await submissions.countDocuments();
  const acceptedCount = await submissions.countDocuments({ verdict: 'ACCEPTED' });
  const studentCount = await users.countDocuments({ role: 'student' });

  return {
    totalSubmissions,
    acceptedCount,
    studentCount,
    acceptanceRate: totalSubmissions > 0 ? ((acceptedCount / totalSubmissions) * 100).toFixed(1) + '%' : '100%'
  };
}

async function getStudentStats(studentRoll) {
  const database = await connectDB();
  if (!database) return { solvedCount: 0, totalCount: 0, acceptanceRate: '0%' };

  const submissions = database.collection('submissions');
  const roll = (studentRoll || '').trim().toUpperCase();

  const totalSubs = await submissions.countDocuments({ studentRoll: roll });
  const acceptedSubs = await submissions.find({ studentRoll: roll, verdict: 'ACCEPTED' }).toArray();

  // Distinct problems solved
  const solvedProblems = new Set(acceptedSubs.map(s => s.problemKey));

  return {
    solvedCount: solvedProblems.size,
    totalCount: totalSubs,
    acceptedCount: acceptedSubs.length,
    acceptanceRate: totalSubs > 0 ? ((acceptedSubs.length / totalSubs) * 100).toFixed(1) + '%' : '100%'
  };
}

module.exports = {
  connectDB,
  registerUser,
  loginUser,
  saveSubmission,
  getStudentSubmissions,
  getAllSubmissions,
  getSubmissionById,
  getAdminStats,
  getStudentStats
};
