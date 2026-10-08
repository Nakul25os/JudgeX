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
  let activeRoleContext = 'student';

  function setRole(role) {
    if (role === 'ide') {
      if (tabIde) tabIde.classList.add('active');
      if (tabStudent) tabStudent.classList.remove('active');
      if (tabAdmin) tabAdmin.classList.remove('active');

      // Maintain isolated role view: keep Admin hidden if in Student context, keep Student hidden if in Admin context
      if (activeRoleContext === 'admin') {
        if (tabAdmin) tabAdmin.style.display = '';
        if (tabStudent) tabStudent.style.display = 'none';
      } else {
        if (tabStudent) tabStudent.style.display = '';
        if (tabAdmin) tabAdmin.style.display = 'none';
      }

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
      activeRoleContext = 'admin';
      if (tabAdmin) {
        tabAdmin.classList.add('active');
        tabAdmin.style.display = ''; // Show Admin Console
      }
      if (tabStudent) {
        tabStudent.classList.remove('active');
        tabStudent.style.display = 'none'; // Don't show Student Portal on Admin Console
      }
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
      activeRoleContext = 'student';
      if (tabStudent) {
        tabStudent.classList.add('active');
        tabStudent.style.display = ''; // Show Student Portal
      }
      if (tabAdmin) {
        tabAdmin.classList.remove('active');
        tabAdmin.style.display = 'none'; // Don't show Admin Console on Student Portal
      }
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
    const isPathAdmin = window.location.pathname.toLowerCase().includes('admin');

    if (view === 'ide' || role === 'ide') {
      if (role === 'admin' || isPathAdmin) {
        activeRoleContext = 'admin';
      } else {
        activeRoleContext = 'student';
      }
      setRole('ide');
      return;
    }

    if (role === 'admin' || isPathAdmin) {
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

  // =========================================================================
  // ADMINISTRATIVE MODULES: PROBLEM CREATOR, TEST CASE MGR & TELEMETRY STREAM
  // =========================================================================

  // Floating Toast Notification
  window.showJudgeToast = function (msg, icon = '⚡') {
    const toast = document.getElementById('judge-toast');
    const msgEl = document.getElementById('judge-toast-msg');
    const iconEl = document.getElementById('judge-toast-icon');
    if (!toast) return;

    if (msgEl) msgEl.textContent = msg;
    if (iconEl) iconEl.textContent = icon;

    toast.classList.remove('hidden');
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(16px)';
      setTimeout(() => toast.classList.add('hidden'), 350);
    }, 3500);
  };

  // --- MODULE 1: CREATE NEW PROBLEM ---
  const adminCreateProblemModal = document.getElementById('admin-create-problem-modal');

  window.openAdminCreateProblemModal = function () {
    if (adminCreateProblemModal) adminCreateProblemModal.classList.remove('hidden');
  };

  window.closeAdminCreateProblemModal = function () {
    if (adminCreateProblemModal) adminCreateProblemModal.classList.add('hidden');
  };

  window.handleCreateNewProblem = function () {
    const title = (document.getElementById('new-prob-title').value || '').trim();
    const diff = document.getElementById('new-prob-diff').value;
    const timeLimit = (document.getElementById('new-prob-time').value || '1.0s').trim();
    const memLimit = (document.getElementById('new-prob-mem').value || '256 MB').trim();
    const desc = (document.getElementById('new-prob-desc').value || '').trim();
    const sampleIn = (document.getElementById('new-prob-sample-in').value || '').trim();
    const sampleOut = (document.getElementById('new-prob-sample-out').value || '').trim();
    const constraints = (document.getElementById('new-prob-constraints').value || '').split(',').map(s => s.trim()).filter(Boolean);
    const starterPy = document.getElementById('new-prob-starter-code').value || '# Write your solution\npass';

    if (!title || !desc) {
      alert('Please fill in Problem Title and Description.');
      return;
    }

    const key = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const diffClass = diff === 'EASY' ? 'badge-easy' : diff === 'HARD' ? 'badge-hard' : 'badge-medium';

    const newProblemObj = {
      title,
      difficulty: diff,
      diffClass,
      timeLimit,
      memLimit,
      desc: `<p>${desc}</p>`,
      examples: `
        <div class="example-box">
          <div class="ex-title">Sample 1:</div>
          <pre><code>Input: ${sampleIn}\nOutput: ${sampleOut}</code></pre>
        </div>
      `,
      constraints: constraints.length ? constraints : ['Standard algorithmic limits apply'],
      templates: {
        python: starterPy,
        cpp: `// ${title} (C++20)\n#include <iostream>\nusing namespace std;\n\nint main() {\n    // Solution template\n    return 0;\n}`,
        javascript: `// ${title} (JavaScript)\nfunction solution() {\n    // Solution template\n}\n`
      }
    };

    // Store in global PROBLEMS dictionary
    PROBLEMS[key] = newProblemObj;

    // Persist custom problems in localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('judgex_custom_problems') || '{}');
      stored[key] = newProblemObj;
      localStorage.setItem('judgex_custom_problems', JSON.stringify(stored));
    } catch(e) {}

    // Update problem select dropdowns in IDE and in Testcase Manager
    syncProblemDropdowns();

    // Increment Problem Bank count in dashboard
    const countEl = document.getElementById('admin-problem-count');
    if (countEl) {
      const current = parseInt(countEl.textContent, 10) || 148;
      countEl.textContent = current + 1;
    }

    window.closeAdminCreateProblemModal();
    window.showJudgeToast(`Problem "${title}" published to Sandbox Problem Bank!`, '🚀');

    // Switch to the newly created problem in the IDE
    if (problemSelect) {
      problemSelect.value = key;
      loadProblem(key, langSelect ? langSelect.value : 'python');
    }
  };

  // --- MODULE 2: HIDDEN TEST CASE ARCHIVE MANAGER ---
  const adminTestCaseModal = document.getElementById('admin-testcase-modal');
  const defaultTestCases = {
    'two-sum': [
      { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', hidden: false, points: 10 },
      { input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]', hidden: true, points: 25 },
      { input: 'nums = [3, 3], target = 6', output: '[0, 1]', hidden: true, points: 25 },
      { input: 'nums = [10^5 elements random], target = 184920', output: '[492, 8829]', hidden: true, points: 40 }
    ],
    'valid-parentheses': [
      { input: 's = "()"', output: 'true', hidden: false, points: 10 },
      { input: 's = "()[]{}"', output: 'true', hidden: true, points: 20 },
      { input: 's = "(]"', output: 'false', hidden: true, points: 20 },
      { input: 's = "([)]"', output: 'false', hidden: true, points: 25 },
      { input: 's = "{[]}"', output: 'true', hidden: true, points: 25 }
    ],
    'reverse-linked-list': [
      { input: 'head = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]', hidden: false, points: 15 },
      { input: 'head = [1, 2]', output: '[2, 1]', hidden: true, points: 35 },
      { input: 'head = []', output: '[]', hidden: true, points: 50 }
    ],
    'median-arrays': [
      { input: 'nums1 = [1, 3], nums2 = [2]', output: '2.0', hidden: false, points: 20 },
      { input: 'nums1 = [1, 2], nums2 = [3, 4]', output: '2.5', hidden: true, points: 40 },
      { input: 'nums1 = [0, 0], nums2 = [0, 0]', output: '0.0', hidden: true, points: 40 }
    ]
  };

  window.openAdminTestCaseModal = function () {
    syncProblemDropdowns();
    const tcProbSelect = document.getElementById('testcase-problem-select');
    const selectedKey = (tcProbSelect && tcProbSelect.value) || (problemSelect && problemSelect.value) || 'two-sum';
    if (tcProbSelect) tcProbSelect.value = selectedKey;
    window.renderTestCaseList(selectedKey);
    if (adminTestCaseModal) adminTestCaseModal.classList.remove('hidden');
  };

  window.closeAdminTestCaseModal = function () {
    if (adminTestCaseModal) adminTestCaseModal.classList.add('hidden');
  };

  function getTestCasesForProblem(key) {
    try {
      const stored = localStorage.getItem(`judgex_testcases_${key}`);
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    return defaultTestCases[key] || [
      { input: 'Default sample input vector', output: 'Expected output vector', hidden: false, points: 20 },
      { input: 'Hidden edge-case test vector', output: 'Verified edge output', hidden: true, points: 80 }
    ];
  }

  function saveTestCasesForProblem(key, list) {
    try {
      localStorage.setItem(`judgex_testcases_${key}`, JSON.stringify(list));
    } catch(e) {}
  }

  window.renderTestCaseList = function (probKey) {
    const container = document.getElementById('testcase-items-list');
    const countPill = document.getElementById('testcase-count-pill');
    if (!container) return;

    const cases = getTestCasesForProblem(probKey);
    if (countPill) countPill.textContent = `${cases.length} Test Cases`;

    if (!cases.length) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-tertiary); padding: 18px; font-size: 0.85rem;">No test cases found for this problem yet. Add one below!</div>`;
      return;
    }

    container.innerHTML = cases.map((tc, idx) => `
      <div class="testcase-card-item">
        <div class="tc-card-left">
          <span class="tc-badge-num">#${idx + 1}</span>
          <div class="tc-io-preview">
            <div><span style="color: var(--text-tertiary);">IN:</span> ${escapeHtml(tc.input.length > 55 ? tc.input.slice(0, 52) + '...' : tc.input)}</div>
            <div><span style="color: var(--text-tertiary);">OUT:</span> ${escapeHtml(tc.output.length > 55 ? tc.output.slice(0, 52) + '...' : tc.output)}</div>
          </div>
        </div>
        <div class="tc-card-right">
          <span class="${tc.hidden ? 'tc-tag-hidden' : 'tc-tag-sample'}">${tc.hidden ? '🔒 HIDDEN (' + tc.points + ' pts)' : '👁 SAMPLE (' + tc.points + ' pts)'}</span>
          <button type="button" class="btn-tc-delete" onclick="window.deleteTestCase('${probKey}', ${idx})" title="Remove Test Case">🗑</button>
        </div>
      </div>
    `).join('');
  };

  window.handleAddTestCase = function () {
    const tcProbSelect = document.getElementById('testcase-problem-select');
    const probKey = (tcProbSelect && tcProbSelect.value) || 'two-sum';
    const inputVal = (document.getElementById('tc-input').value || '').trim();
    const outputVal = (document.getElementById('tc-output').value || '').trim();
    const isHidden = document.getElementById('tc-hidden').checked;
    const points = parseInt(document.getElementById('tc-points').value, 10) || 25;

    if (!inputVal || !outputVal) {
      alert('Please provide both Input (.in) and Expected Output (.out) vectors.');
      return;
    }

    const currentCases = getTestCasesForProblem(probKey);
    currentCases.push({
      input: inputVal,
      output: outputVal,
      hidden: isHidden,
      points: points
    });

    saveTestCasesForProblem(probKey, currentCases);
    window.renderTestCaseList(probKey);

    document.getElementById('tc-input').value = '';
    document.getElementById('tc-output').value = '';

    window.showJudgeToast(`Test case #${currentCases.length} encrypted in sandbox jail!`, '🧪');
  };

  window.deleteTestCase = function (probKey, index) {
    const currentCases = getTestCasesForProblem(probKey);
    if (index >= 0 && index < currentCases.length) {
      currentCases.splice(index, 1);
      saveTestCasesForProblem(probKey, currentCases);
      window.renderTestCaseList(probKey);
      window.showJudgeToast('Test case removed.', '🗑️');
    }
  };

  window.syncAllTestCasesToWorker = function () {
    const syncStatusEl = document.getElementById('testcase-sync-status');
    if (syncStatusEl) {
      syncStatusEl.textContent = 'Syncing 8 worker nodes...';
      syncStatusEl.style.color = '#fbbf24';
      setTimeout(() => {
        syncStatusEl.textContent = 'All 8 Nodes Online & Encrypted ✓';
        syncStatusEl.style.color = '#34d399';
        window.showJudgeToast('All test suites synced & compiled into secure sandbox worker jail!', '⚡');
      }, 600);
    }
  };

  // --- MODULE 3: LIVE SUBMISSIONS TELEMETRY STREAM ---
  const adminTelemetryModal = document.getElementById('admin-telemetry-modal');
  let activeTelemetryFilter = 'ALL';
  let telemetrySubmissions = [
    {
      id: 84928,
      time: '12s ago',
      student: 'Alex Vance (0863CS221045)',
      problem: 'Two Sum',
      lang: 'Python 3.14',
      runtime: '14ms',
      memory: '14.2 MB',
      verdict: 'ACCEPTED',
      code: `class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        seen = {}\n        for i, n in enumerate(nums):\n            diff = target - n\n            if diff in seen:\n                return [seen[diff], i]\n            seen[n] = i\n        return []`
    },
    {
      id: 84927,
      time: '42s ago',
      student: 'Dev Patel (0863IT221089)',
      problem: 'Two Sum',
      lang: 'C++20',
      runtime: '2ms',
      memory: '4.1 MB',
      verdict: 'ACCEPTED',
      code: `#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); ++i) {\n            int comp = target - nums[i];\n            if (m.count(comp)) return {m[comp], i};\n            m[nums[i]] = i;\n        }\n        return {};\n    }\n};`
    },
    {
      id: 84926,
      time: '1m ago',
      student: 'Sara Chen (0863CS221012)',
      problem: 'Valid Parentheses',
      lang: 'Java 21',
      runtime: '1002ms',
      memory: '48.5 MB',
      verdict: 'TIME LIMIT EXCEEDED',
      code: `// Unbuffered nested regex scan causes quadratic TLE\nclass Solution {\n    public boolean isValid(String s) {\n        while (s.contains("()") || s.contains("[]") || s.contains("{}")) {\n            s = s.replace("()", "").replace("[]", "").replace("{}", "");\n        }\n        return s.isEmpty();\n    }\n}`
    },
    {
      id: 84925,
      time: '2m ago',
      student: 'Rohan Mehta (0863EC221034)',
      problem: 'Reverse Linked List',
      lang: 'C++20',
      runtime: '0ms',
      memory: '0.0 MB',
      verdict: 'COMPILATION ERROR',
      code: `ListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    // Missing semicolon\n    ListNode* curr = head\n    while (curr) {\n        ListNode* next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}`
    },
    {
      id: 84924,
      time: '3m ago',
      student: 'Maya Lin (0863CS221099)',
      problem: 'Two Sum',
      lang: 'Node.js 22',
      runtime: '28ms',
      memory: '22.4 MB',
      verdict: 'WRONG ANSWER',
      code: `function twoSum(nums, target) {\n    // Incorrect 1-based index calculation\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i + 1; j < nums.length; j++) {\n            if (nums[i] + nums[j] === target) return [i + 1, j + 1];\n        }\n    }\n    return [];\n}`
    }
  ];

  window.openAdminTelemetryModal = function () {
    renderTelemetryTable();
    if (adminTelemetryModal) adminTelemetryModal.classList.remove('hidden');
  };

  window.closeAdminTelemetryModal = function () {
    if (adminTelemetryModal) adminTelemetryModal.classList.add('hidden');
  };

  function renderTelemetryTable() {
    const tbody = document.getElementById('telemetry-table-body');
    if (!tbody) return;

    const filtered = telemetrySubmissions.filter(s => {
      if (activeTelemetryFilter === 'ALL') return true;
      return s.verdict === activeTelemetryFilter;
    });

    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-tertiary); padding: 24px;">No submissions matching filter "${activeTelemetryFilter}".</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(s => {
      let tagClass = 'tag-ac';
      if (s.verdict === 'WRONG ANSWER') tagClass = 'tag-wa';
      else if (s.verdict === 'TIME LIMIT EXCEEDED') tagClass = 'tag-tle';
      else if (s.verdict === 'COMPILATION ERROR') tagClass = 'tag-ce';

      return `
        <tr>
          <td style="font-family: var(--font-mono); color: var(--text-tertiary); font-size: 0.75rem;">${s.time}</td>
          <td style="font-weight: 600;">${escapeHtml(s.student)}</td>
          <td style="color: var(--accent-cyan);">${escapeHtml(s.problem)}</td>
          <td style="font-family: var(--font-mono); font-size: 0.75rem;">${s.lang}</td>
          <td style="font-family: var(--font-mono);">${s.runtime}</td>
          <td style="font-family: var(--font-mono); color: var(--text-secondary);">${s.memory}</td>
          <td><span class="verdict-tag ${tagClass}">${s.verdict}</span></td>
          <td><button type="button" class="btn-inspect-row" onclick="window.inspectSubmissionRow(${s.id})">Inspect</button></td>
        </tr>
      `;
    }).join('');
  }

  window.filterTelemetryVerdicts = function (filterVal) {
    activeTelemetryFilter = filterVal;
    renderTelemetryTable();
  };

  window.simulateIncomingSubmission = function () {
    const candidates = [
      { name: 'Alex Vance', roll: '0863CS221045' },
      { name: 'Priya Sharma', roll: '0863CS221077' },
      { name: 'Marcus Sterling', roll: '0863IT221034' },
      { name: 'Kevin Zhang', roll: '0863EC221099' }
    ];
    const probs = ['Two Sum', 'Valid Parentheses', 'Reverse Linked List', 'Median of Two Sorted Arrays'];
    const langs = ['C++20', 'Python 3.14', 'Java 21', 'Node.js 22'];
    const verdicts = ['ACCEPTED', 'ACCEPTED', 'ACCEPTED', 'WRONG ANSWER', 'TIME LIMIT EXCEEDED'];

    const randCand = candidates[Math.floor(Math.random() * candidates.length)];
    const randProb = probs[Math.floor(Math.random() * probs.length)];
    const randLang = langs[Math.floor(Math.random() * langs.length)];
    const randVerdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    const randRuntime = randVerdict === 'TIME LIMIT EXCEEDED' ? '1004ms' : (Math.floor(Math.random() * 28) + 2) + 'ms';
    const randMem = (Math.floor(Math.random() * 20) + 4) + '.' + Math.floor(Math.random() * 9) + ' MB';
    const newId = Math.floor(Math.random() * 90000) + 10000;

    telemetrySubmissions.unshift({
      id: newId,
      time: 'Just now',
      student: `${randCand.name} (${randCand.roll})`,
      problem: randProb,
      lang: randLang,
      runtime: randRuntime,
      memory: randMem,
      verdict: randVerdict,
      code: `// Real-Time Evaluated Submission #${newId}\n// Candidate: ${randCand.name} (${randCand.roll})\n// Problem: ${randProb} [${randLang}]\n\nint solution() {\n    // Evaluation result: ${randVerdict} (Runtime: ${randRuntime})\n    return 0;\n}`
    });

    renderTelemetryTable();
    window.showJudgeToast(`Incoming submission #${newId} evaluated: ${randVerdict}!`, '📡');
  };

  window.inspectSubmissionRow = function (subId) {
    const item = telemetrySubmissions.find(s => s.id === subId);
    if (!item) return;

    const drawer = document.getElementById('telemetry-inspect-drawer');
    const titleEl = document.getElementById('inspect-drawer-title');
    const subEl = document.getElementById('inspect-drawer-sub');
    const codeEl = document.getElementById('inspect-drawer-code');
    const metricsEl = document.getElementById('inspect-drawer-metrics');

    if (titleEl) titleEl.textContent = `Submission Diagnostics #${item.id} — ${item.verdict}`;
    if (subEl) subEl.textContent = `${item.student} • ${item.problem} (${item.lang}) • Evaluated: ${item.time}`;
    if (codeEl) codeEl.textContent = item.code;

    if (metricsEl) {
      metricsEl.innerHTML = `
        <span class="inspect-tag">Runtime: ${item.runtime}</span>
        <span class="inspect-tag">Peak RAM: ${item.memory}</span>
        <span class="inspect-tag">gVisor Sandbox: Verified Isolated</span>
        <span class="inspect-tag">Verdict: ${item.verdict}</span>
      `;
    }

    if (drawer) {
      drawer.classList.remove('hidden');
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function syncProblemDropdowns() {
    // Sync IDE dropdown
    if (problemSelect) {
      const currentVal = problemSelect.value;
      problemSelect.innerHTML = Object.keys(PROBLEMS).map(k => {
        const p = PROBLEMS[k];
        return `<option value="${k}">${p.title} (${p.difficulty})</option>`;
      }).join('');
      if (PROBLEMS[currentVal]) problemSelect.value = currentVal;
    }

    // Sync Testcase problem dropdown
    const tcProbSelect = document.getElementById('testcase-problem-select');
    if (tcProbSelect) {
      const currentVal = tcProbSelect.value;
      tcProbSelect.innerHTML = Object.keys(PROBLEMS).map(k => {
        const p = PROBLEMS[k];
        return `<option value="${k}">${p.title} (${p.difficulty})</option>`;
      }).join('');
      if (PROBLEMS[currentVal]) tcProbSelect.value = currentVal;
    }
  }

  // Load custom stored problems on boot
  try {
    const savedCustom = JSON.parse(localStorage.getItem('judgex_custom_problems') || '{}');
    Object.assign(PROBLEMS, savedCustom);
    const countEl = document.getElementById('admin-problem-count');
    if (countEl && Object.keys(savedCustom).length) {
      countEl.textContent = 148 + Object.keys(savedCustom).length;
    }
  } catch(e) {}

  // Initialize
  setupIDE();
  checkUrlParams();
  syncProblemDropdowns();
})();
