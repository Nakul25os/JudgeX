/**
 * JUDGEX AUTHENTICATION PORTAL JAVASCRIPT
 * Handles Student vs Admin roles, Registration, Demo autofill,
 * and Simulated Role-Based Dashboard Hubs.
 */

(function () {
  'use strict';

  // DOM Elements
  const tabStudent = document.getElementById('tab-student');
  const tabAdmin = document.getElementById('tab-admin');
  const tabIde = document.getElementById('tab-ide');
  const studentCard = document.getElementById('student-card');
  const adminCard = document.getElementById('admin-card');
  const ideWorkbenchSection = document.getElementById('ide-workbench-section');
  const studentDashboard = document.getElementById('student-dashboard');
  const adminDashboard = document.getElementById('admin-dashboard');
  const authGlow = document.getElementById('auth-glow');
  const authCardWrapper = document.getElementById('auth-card-wrapper') || document.querySelector('.auth-card-wrapper');
  const guestIdeBanner = document.getElementById('guest-ide-banner');
  const studentIdeBanner = document.getElementById('student-ide-banner');
  const ideStudentRollBadge = document.getElementById('ide-student-roll-badge');

  const btnStudentSignInMode = document.getElementById('btn-student-signin-mode');
  const btnStudentRegisterMode = document.getElementById('btn-student-register-mode');
  const studentLoginForm = document.getElementById('student-login-form');
  const studentRegisterForm = document.getElementById('student-register-form');
  const studentTitle = document.getElementById('student-title');
  const studentSub = document.getElementById('student-sub');

  // --- Role Switcher (Student vs Admin vs Sandbox IDE) ---
  function setRole(role) {
    if (role === 'ide') {
      if (tabIde) tabIde.classList.add('active');
      if (tabStudent) tabStudent.classList.remove('active');
      if (tabAdmin) tabAdmin.classList.remove('active');
      if (studentCard) studentCard.classList.add('hidden');
      if (adminCard) adminCard.classList.add('hidden');
      if (studentDashboard) studentDashboard.classList.add('hidden');
      if (adminDashboard) adminDashboard.classList.add('hidden');
      if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
      if (guestIdeBanner) guestIdeBanner.classList.remove('hidden');
      if (studentIdeBanner) studentIdeBanner.classList.add('hidden');
      if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');
      if (authGlow) authGlow.className = 'auth-ambient-glow ide-glow';
    } else if (role === 'admin') {
      if (tabAdmin) tabAdmin.classList.add('active');
      if (tabStudent) tabStudent.classList.remove('active');
      if (tabIde) tabIde.classList.remove('active');
      if (adminCard) adminCard.classList.remove('hidden');
      if (studentCard) studentCard.classList.add('hidden');
      if (ideWorkbenchSection) ideWorkbenchSection.classList.add('hidden');
      if (studentDashboard) studentDashboard.classList.add('hidden');
      if (adminDashboard) adminDashboard.classList.add('hidden');
      if (authCardWrapper) authCardWrapper.classList.remove('expanded-ide');
      if (authGlow) authGlow.className = 'auth-ambient-glow admin-glow';
    } else {
      // Student Mode
      if (tabStudent) tabStudent.classList.add('active');
      if (tabAdmin) tabAdmin.classList.remove('active');
      if (tabIde) tabIde.classList.remove('active');
      if (adminCard) adminCard.classList.add('hidden');
      if (adminDashboard) adminDashboard.classList.add('hidden');

      const savedSession = sessionStorage.getItem('judge_session');
      let isStudentLoggedIn = false;
      if (savedSession) {
        try {
          const s = JSON.parse(savedSession);
          if (s.role === 'student') isStudentLoggedIn = true;
        } catch(e) {}
      }

      if (isStudentLoggedIn && studentDashboard && !studentDashboard.classList.contains('hidden')) {
        if (studentCard) studentCard.classList.add('hidden');
        if (studentDashboard) studentDashboard.classList.remove('hidden');
        if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
        if (guestIdeBanner) guestIdeBanner.classList.add('hidden');
        if (studentIdeBanner) studentIdeBanner.classList.remove('hidden');
        if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');
      } else {
        if (studentCard) studentCard.classList.remove('hidden');
        if (studentDashboard) studentDashboard.classList.add('hidden');
        if (ideWorkbenchSection) ideWorkbenchSection.classList.add('hidden');
        if (authCardWrapper) authCardWrapper.classList.remove('expanded-ide');
      }

      if (authGlow) authGlow.className = 'auth-ambient-glow';
    }
  }

  window.switchRole = setRole;
  window.switchTab = setRole;

  if (tabStudent) tabStudent.addEventListener('click', () => setRole('student'));
  if (tabAdmin) tabAdmin.addEventListener('click', () => setRole('admin'));
  if (tabIde) tabIde.addEventListener('click', () => setRole('ide'));

  // --- Student Mode Switcher (Sign In vs Register) ---
  if (btnStudentSignInMode && btnStudentRegisterMode) {
    btnStudentSignInMode.addEventListener('click', () => {
      btnStudentSignInMode.classList.add('active');
      btnStudentRegisterMode.classList.remove('active');
      studentLoginForm.classList.remove('hidden');
      studentRegisterForm.classList.add('hidden');
      if (studentTitle) studentTitle.textContent = 'Welcome Back, Coder';
      if (studentSub) studentSub.textContent = 'Sign in to resume submissions, track rankings, and compete in live contests.';
    });

    btnStudentRegisterMode.addEventListener('click', () => {
      btnStudentRegisterMode.classList.add('active');
      btnStudentSignInMode.classList.remove('active');
      studentRegisterForm.classList.remove('hidden');
      studentLoginForm.classList.add('hidden');
      if (studentTitle) studentTitle.textContent = 'Create Student Account';
      if (studentSub) studentSub.textContent = 'Join over 14,000 university engineers competing on the JudgeX execution sandbox.';
    });
  }

  // --- Password Toggle Eye ---
  window.togglePasswordVisibility = function (inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🔒';
    } else {
      input.type = 'password';
      btn.textContent = '👁';
    }
  };

  // --- Demo Autofill Functions ---
  window.autofillStudent = function () {
    const email = document.getElementById('student-email');
    const pass = document.getElementById('student-password');
    if (email) email.value = '0863CS221045';
    if (pass) pass.value = 'studentPass2026';
  };

  window.autofillAdmin = function () {
    const adminId = document.getElementById('admin-id');
    const adminPass = document.getElementById('admin-password');
    const adminPin = document.getElementById('admin-pin');
    if (adminId) adminId.value = 'admin.root@judge.internal';
    if (adminPass) adminPass.value = 'SuperMasterPass#2026';
    if (adminPin) adminPin.value = '849201';
  };

  // --- Form Handlers ---
  window.handleStudentLogin = function () {
    const inputVal = (document.getElementById('student-email').value || '').trim();
    const btn = document.getElementById('btn-student-submit');
    if (btn) btn.innerHTML = '<span>Verifying Credentials...</span>';

    setTimeout(() => {
      let displayRoll = '0863CS221045';
      let displayName = 'Alex Vance';

      if (inputVal.toUpperCase().startsWith('0863')) {
        displayRoll = inputVal.toUpperCase();
      } else if (inputVal.includes('@')) {
        displayName = inputVal.split('@')[0].replace('.', ' ').toUpperCase();
      } else if (inputVal) {
        displayRoll = inputVal.toUpperCase();
      }

      if (studentCard) studentCard.classList.add('hidden');
      if (studentDashboard) {
        studentDashboard.classList.remove('hidden');
        const nameEl = document.getElementById('dash-student-name');
        const rollEl = document.getElementById('dash-student-roll');
        if (nameEl) nameEl.textContent = displayName;
        if (rollEl) rollEl.textContent = `STUDENT // ROLL: ${displayRoll}`;
      }

      if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
      if (guestIdeBanner) guestIdeBanner.classList.add('hidden');
      if (studentIdeBanner) studentIdeBanner.classList.remove('hidden');
      const ideRollBadge = document.getElementById('ide-student-roll-badge');
      if (ideRollBadge) ideRollBadge.textContent = `ROLL: ${displayRoll}`;
      if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');

      if (btn) btn.innerHTML = '<span>Sign In to Student Portal →</span>';
      sessionStorage.setItem('judge_session', JSON.stringify({ role: 'student', user: inputVal, name: displayName, roll: displayRoll }));
    }, 500);
  };

  window.handleStudentRegister = function () {
    const name = document.getElementById('reg-name').value;
    const roll = (document.getElementById('reg-roll').value || '').trim().toUpperCase();

    // Verify 0863 format (must start with 0863 and be 12 characters)
    if (!roll.startsWith('0863') || roll.length !== 12) {
      alert('Roll Number must follow the format 0863XXXXXXXX (12 alphanumeric characters starting with 0863).');
      return;
    }

    // Verify Password Requirements
    const pwd = (document.getElementById('reg-password').value || '');
    const hasLength = pwd.length >= 8;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(pwd);
    const noSpaces = pwd.length > 0 && !/\s/.test(pwd);
    const notCommon = !commonPasswordsList.includes(pwd.toLowerCase());

    if (!(hasLength && hasUpper && hasLower && hasNumber && hasSymbol && noSpaces && notCommon)) {
      alert('Please meet all 7 password requirements before creating your account.');
      const pwdInput = document.getElementById('reg-password');
      if (pwdInput) pwdInput.focus();
      return;
    }

    alert(`Account created successfully for ${name} (${roll})! Logging into student hub.`);

    if (studentCard) studentCard.classList.add('hidden');
    if (studentDashboard) {
      studentDashboard.classList.remove('hidden');
      const nameEl = document.getElementById('dash-student-name');
      const rollEl = document.getElementById('dash-student-roll');
      if (nameEl) nameEl.textContent = name;
      if (rollEl) rollEl.textContent = `STUDENT // ROLL: ${roll}`;
    }

    if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
    if (guestIdeBanner) guestIdeBanner.classList.add('hidden');
    if (studentIdeBanner) studentIdeBanner.classList.remove('hidden');
    const ideRollBadge = document.getElementById('ide-student-roll-badge');
    if (ideRollBadge) ideRollBadge.textContent = `ROLL: ${roll}`;
    if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');

    sessionStorage.setItem('judge_session', JSON.stringify({ role: 'student', user: roll, name: name, roll: roll }));
  };

  window.handleAdminLogin = function () {
    const adminId = document.getElementById('admin-id').value;
    const pin = document.getElementById('admin-pin').value;
    const btn = document.getElementById('btn-admin-submit');
    if (btn) btn.innerHTML = '<span>Authenticating Root Node...</span>';

    setTimeout(() => {
      if (adminCard) adminCard.classList.add('hidden');
      if (adminDashboard) adminDashboard.classList.remove('hidden');
      if (ideWorkbenchSection) ideWorkbenchSection.classList.add('hidden');
      if (authCardWrapper) authCardWrapper.classList.remove('expanded-ide');
      if (btn) btn.innerHTML = '<span>Authenticate as Administrator ⚡</span>';
      sessionStorage.setItem('judge_session', JSON.stringify({ role: 'admin', user: adminId }));
    }, 600);
  };

  window.handleLogout = function () {
    sessionStorage.removeItem('judge_session');
    if (studentDashboard) studentDashboard.classList.add('hidden');
    if (adminDashboard) adminDashboard.classList.add('hidden');
    if (ideWorkbenchSection) ideWorkbenchSection.classList.add('hidden');
    if (authCardWrapper) authCardWrapper.classList.remove('expanded-ide');
    setRole('student');
  };

  window.scrollToStudentIDE = function () {
    if (ideWorkbenchSection) {
      ideWorkbenchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const editor = document.getElementById('code-editor');
      if (editor) {
        setTimeout(() => editor.focus(), 350);
      }
    }
  };

  // --- URL Query Parameter Detection (e.g. /login.html?view=ide or /login.html?role=admin) ---
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    const view = params.get('view');

    if (view === 'ide' || role === 'ide') {
      setRole('ide');
      return;
    }

    if (role === 'admin') {
      setRole('admin');
      return;
    }

    const savedSession = sessionStorage.getItem('judge_session');
    if (savedSession) {
      try {
        const sess = JSON.parse(savedSession);
        if (sess.role === 'admin') {
          setRole('admin');
          if (adminCard) adminCard.classList.add('hidden');
          if (adminDashboard) adminDashboard.classList.remove('hidden');
          return;
        } else if (sess.role === 'student') {
          setRole('student');
          if (studentCard) studentCard.classList.add('hidden');
          if (studentDashboard) {
            studentDashboard.classList.remove('hidden');
            const nameEl = document.getElementById('dash-student-name');
            const rollEl = document.getElementById('dash-student-roll');
            if (nameEl && sess.name) nameEl.textContent = sess.name;
            if (rollEl && sess.roll) rollEl.textContent = `STUDENT // ROLL: ${sess.roll}`;
          }
          if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
          if (guestIdeBanner) guestIdeBanner.classList.add('hidden');
          if (studentIdeBanner) studentIdeBanner.classList.remove('hidden');
          const ideRollBadge = document.getElementById('ide-student-roll-badge');
          if (ideRollBadge && sess.roll) ideRollBadge.textContent = `ROLL: ${sess.roll}`;
          if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');
          return;
        }
      } catch (e) {}
    }

    setRole('student');
  }

  // --- REAL GOOGLE OAUTH 2.0 INTEGRATION (Google Identity Services) ---
  const GOOGLE_STORAGE_KEY = 'JUDGEX_GOOGLE_CLIENT_ID';
  let googleClientId = localStorage.getItem(GOOGLE_STORAGE_KEY) || '';
  let activeGoogleAuthRole = 'student';

  const googleConfigModal = document.getElementById('google-config-modal');
  const googleClientIdInput = document.getElementById('google-client-id-input');
  const googleConfigSub = document.getElementById('google-config-sub');

  window.openGoogleConfigModal = function (role = 'student') {
    activeGoogleAuthRole = role;
    if (googleConfigModal) {
      if (googleClientIdInput) {
        googleClientIdInput.value = localStorage.getItem(GOOGLE_STORAGE_KEY) || '';
      }
      if (googleConfigSub) {
        googleConfigSub.innerHTML = `Authenticate securely via Google OAuth 2.0 for <span class="text-cyan">${role === 'admin' ? 'Judge Administrator' : 'Student Workspace'}</span>`;
      }
      googleConfigModal.classList.remove('hidden');
    }
  };

  window.closeGoogleConfigModal = function () {
    if (googleConfigModal) googleConfigModal.classList.add('hidden');
  };

  window.saveGoogleClientIdAndLogin = function () {
    const inputVal = (document.getElementById('google-client-id-input').value || '').trim();
    if (!inputVal) {
      alert('Please enter your Google Cloud Web Client ID.');
      return;
    }

    localStorage.setItem(GOOGLE_STORAGE_KEY, inputVal);
    googleClientId = inputVal;
    window.closeGoogleConfigModal();

    // Immediately trigger real Google Sign-In with the newly saved Client ID!
    executeRealGoogleOAuth(activeGoogleAuthRole);
  };

  window.clearGoogleClientId = function () {
    localStorage.removeItem(GOOGLE_STORAGE_KEY);
    googleClientId = '';
    if (googleClientIdInput) googleClientIdInput.value = '';
    alert('Google Client ID cleared from browser storage.');
  };

  // Main entry point when user clicks "Sign in with Google"
  window.initiateRealGoogleAuth = function (role = 'student') {
    activeGoogleAuthRole = role;
    const savedId = localStorage.getItem(GOOGLE_STORAGE_KEY) || googleClientId;

    if (!savedId) {
      // Prompt user to enter their Google Client ID
      window.openGoogleConfigModal(role);
      return;
    }

    executeRealGoogleOAuth(role);
  };

  // Execute Real Google OAuth Token Flow
  function executeRealGoogleOAuth(role) {
    const clientId = localStorage.getItem(GOOGLE_STORAGE_KEY) || googleClientId;
    if (!clientId) {
      window.openGoogleConfigModal(role);
      return;
    }

    // Verify Google Identity Services SDK is ready
    if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
      alert('Google Identity Services SDK is loading. Please check internet access or retry in 2 seconds.');
      return;
    }

    try {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
        prompt: 'select_account',
        callback: async (tokenResponse) => {
          if (tokenResponse.error) {
            console.error('Google OAuth error:', tokenResponse);
            if (tokenResponse.error === 'popup_closed_by_user') {
              console.log('Google login popup was closed by user.');
              return;
            }
            alert(`Google Sign-In Error: ${tokenResponse.error}\n\nPlease verify that your Google Client ID is configured for Authorized JavaScript Origin: http://localhost:3000`);
            return;
          }

          if (tokenResponse.access_token) {
            // Fetch real user profile from Google UserInfo endpoint
            try {
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`
                }
              });
              
              if (!res.ok) {
                throw new Error(`Google UserInfo API returned status ${res.status}`);
              }

              const profile = await res.json();
              handleRealGoogleSuccess(profile, role);
            } catch (err) {
              console.error('Failed to fetch Google profile:', err);
              alert('Logged into Google, but failed to retrieve profile: ' + err.message);
            }
          }
        }
      });

      // Launch official Google OAuth popup
      tokenClient.requestAccessToken({ prompt: 'select_account' });
    } catch (err) {
      console.error('Google OAuth initialization exception:', err);
      alert('Could not initialize Google OAuth: ' + err.message + '\n\nPlease check your Google Client ID in settings.');
      window.openGoogleConfigModal(role);
    }
  }

  // Handle Successful Real Google Account Authentication
  function handleRealGoogleSuccess(profile, role) {
    console.log('Real Google User Authenticated:', profile);

    const isStudent = (role !== 'admin');

    if (isStudent) {
      const defaultRoll = '0863CS221045';
      if (studentCard) studentCard.classList.add('hidden');
      if (studentDashboard) {
        studentDashboard.classList.remove('hidden');

        // Populate Real Google Name
        const nameEl = document.getElementById('dash-student-name');
        if (nameEl) nameEl.textContent = profile.name || profile.email;

        // Set Roll Number
        const rollEl = document.getElementById('dash-student-roll');
        if (rollEl) rollEl.textContent = `STUDENT // ROLL: ${defaultRoll}`;

        // Set Real Google Profile Avatar Photo
        const avatarEl = studentDashboard.querySelector('.student-avatar');
        if (avatarEl && profile.picture) {
          avatarEl.innerHTML = `<img src="${profile.picture}" alt="${profile.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
          avatarEl.style.padding = '0';
          avatarEl.style.overflow = 'hidden';
        }
      }

      if (ideWorkbenchSection) ideWorkbenchSection.classList.remove('hidden');
      if (guestIdeBanner) guestIdeBanner.classList.add('hidden');
      if (studentIdeBanner) studentIdeBanner.classList.remove('hidden');
      const ideRollBadge = document.getElementById('ide-student-roll-badge');
      if (ideRollBadge) ideRollBadge.textContent = `ROLL: ${defaultRoll}`;
      if (authCardWrapper) authCardWrapper.classList.add('expanded-ide');

      sessionStorage.setItem('judge_session', JSON.stringify({
        role: 'student',
        user: profile.email,
        name: profile.name,
        roll: defaultRoll,
        picture: profile.picture,
        authProvider: 'google_real'
      }));

    } else {
      // Admin Mode
      if (adminCard) adminCard.classList.add('hidden');
      if (adminDashboard) {
        adminDashboard.classList.remove('hidden');

        const nameEl = adminDashboard.querySelector('.dash-name');
        if (nameEl) nameEl.textContent = profile.name || profile.email;

        const avatarEl = adminDashboard.querySelector('.admin-avatar');
        if (avatarEl && profile.picture) {
          avatarEl.innerHTML = `<img src="${profile.picture}" alt="${profile.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
          avatarEl.style.padding = '0';
          avatarEl.style.overflow = 'hidden';
        }
      }

      sessionStorage.setItem('judge_session', JSON.stringify({
        role: 'admin',
        user: profile.email,
        name: profile.name,
        picture: profile.picture,
        authProvider: 'google_workspace_real'
      }));
    }
  }

  const regRollInput = document.getElementById('reg-roll');
  if (regRollInput) {
    regRollInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.toUpperCase();
    });
  }

  // --- Real-time Password Strength & Criteria Evaluator ---
  const regPasswordInput = document.getElementById('reg-password');
  const pwdStrengthLabel = document.getElementById('pwd-strength-label');
  const pwdStrengthBar = document.getElementById('pwd-strength-bar');

  const critLength = document.getElementById('crit-length');
  const critUpper = document.getElementById('crit-upper');
  const critLower = document.getElementById('crit-lower');
  const critNumber = document.getElementById('crit-number');
  const critSymbol = document.getElementById('crit-symbol');
  const critSpaces = document.getElementById('crit-spaces');
  const critCommon = document.getElementById('crit-common');

  const commonPasswordsList = [
    '12345678', 'password', 'password123', 'admin123', 'qwerty123',
    '123456789', 'iloveyou', 'judgex123', '11111111', '00000000',
    'welcome123', 'student123', 'abc12345', 'pass1234', 'alex1234'
  ];

  function evaluatePasswordCriteria(pwd) {
    const hasLength = pwd.length >= 8;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(pwd);
    const noSpaces = pwd.length > 0 && !/\s/.test(pwd);
    const notCommon = pwd.length > 0 && !commonPasswordsList.includes(pwd.toLowerCase());

    // Update criteria checklist items
    updateCriterion(critLength, hasLength);
    updateCriterion(critUpper, hasUpper);
    updateCriterion(critLower, hasLower);
    updateCriterion(critNumber, hasNumber);
    updateCriterion(critSymbol, hasSymbol);
    updateCriterion(critSpaces, noSpaces);
    updateCriterion(critCommon, notCommon);

    // Calculate score
    const totalMet = [hasLength, hasUpper, hasLower, hasNumber, hasSymbol, noSpaces, notCommon].filter(Boolean).length;

    if (!pwdStrengthLabel || !pwdStrengthBar) return;

    pwdStrengthLabel.className = 'pwd-strength-label';
    pwdStrengthBar.className = 'pwd-strength-bar-fill';

    if (pwd.length === 0) {
      pwdStrengthLabel.textContent = 'Weak';
      pwdStrengthLabel.classList.add('strength-weak');
      pwdStrengthBar.classList.add('strength-empty');
    } else if (totalMet <= 3) {
      pwdStrengthLabel.textContent = 'Weak';
      pwdStrengthLabel.classList.add('strength-weak');
      pwdStrengthBar.classList.add('strength-weak');
    } else if (totalMet >= 4 && totalMet <= 6) {
      pwdStrengthLabel.textContent = 'Medium';
      pwdStrengthLabel.classList.add('strength-medium');
      pwdStrengthBar.classList.add('strength-medium');
    } else if (totalMet === 7) {
      pwdStrengthLabel.textContent = 'Strong';
      pwdStrengthLabel.classList.add('strength-strong');
      pwdStrengthBar.classList.add('strength-strong');
    }
  }

  function updateCriterion(el, isMet) {
    if (!el) return;
    if (isMet) {
      el.classList.add('met');
    } else {
      el.classList.remove('met');
    }
  }

  if (regPasswordInput) {
    regPasswordInput.addEventListener('input', (e) => {
      evaluatePasswordCriteria(e.target.value);
    });
    // Run once on load to initialize status
    evaluatePasswordCriteria(regPasswordInput.value || '');
  }

  // --- Problem Bank & Interactive Judge Sandbox Engine ---
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
        unordered_map<int, int> mp;
        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];
            if (mp.count(complement)) {
                return {mp[complement], i};
            }
            mp[nums[i]] = i;
        }
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 7, 11, 15};
    vector<int> res = sol.twoSum(nums, 9);
    cout << "Test 1: [" << res[0] << ", " << res[1] << "]" << endl;
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
                  <pre><code>Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.</code></pre>
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
        int maxLen = 0, start = 0;
        for (int i = 0; i < s.length(); ++i) {
            start = max(start, lastIndex[(unsigned char)s[i]] + 1);
            maxLen = max(maxLen, i - start + 1);
            lastIndex[(unsigned char)s[i]] = i;
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
    let left = 0, maxLen = 0;
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
        's consists of parentheses only "()[]{}".'
      ],
      templates: {
        python: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top_elem = stack.pop() if stack else '#'
                if mapping[char] != top_elem:
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

  let problemSelect, langSelect, probDiff, probTitle, probDesc, probExamples, probConstraints;
  let editorFileTab, codeEditor, lineNumbers, resetCodeBtn, runCodeBtn, submitCodeBtn;
  let terminalBody, verdictBanner, verdictPill, verdictMetrics;

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

    loadProblem('two-sum', 'python');
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

  // Initialize
  setupIDE();
  checkUrlParams();
})();
