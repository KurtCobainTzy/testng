// ══════════════════════════════════════
//  GUITARIFY — auth.js  (updated)
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  updateNavUser();

  document.addEventListener('click', function (e) {
    const btn      = document.getElementById('navUserBtn');
    const dropdown = document.getElementById('userDropdown');
    if (!btn || !dropdown) return;
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// ── NAV USER ICON ──
function handleUserIconClick() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    document.getElementById('userDropdown').classList.toggle('open');
  } else {
    openAuth('login');
  }
}

// ── UPDATE NAV ──
function updateNavUser() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName   = localStorage.getItem('userName') || '';
  const userEmail  = localStorage.getItem('userEmail') || '';

  const navUserName   = document.getElementById('navUserName');
  const dropdownName  = document.getElementById('dropdownName');
  const dropdownEmail = document.getElementById('dropdownEmail');

  if (navUserName)   navUserName.textContent   = isLoggedIn ? userName : '';
  if (dropdownName)  dropdownName.textContent  = isLoggedIn ? userName : '–';
  if (dropdownEmail) dropdownEmail.textContent = isLoggedIn ? userEmail : '–';
}

// ══════════════════════════════════════
//  AUTH MODAL
// ══════════════════════════════════════

function openAuth(tab) {
  const bg = document.getElementById('authBg');
  if (!bg) return;
  bg.classList.add('open');
  switchAuthTab(tab || 'login');
}

function closeAuth() {
  const bg = document.getElementById('authBg');
  if (bg) bg.classList.remove('open');
}

function handleAuthBgClick(e) {
  if (e.target === document.getElementById('authBg')) closeAuth();
}

function switchAuthTab(tab) {
  const loginForm  = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabLogin   = document.getElementById('tabLogin');
  const tabSignup  = document.getElementById('tabSignup');

  if (tab === 'login') {
    if (loginForm)  loginForm.style.display  = 'block';
    if (signupForm) signupForm.style.display = 'none';
    if (tabLogin)   tabLogin.classList.add('active');
    if (tabSignup)  tabSignup.classList.remove('active');
  } else {
    if (loginForm)  loginForm.style.display  = 'none';
    if (signupForm) signupForm.style.display = 'block';
    if (tabLogin)   tabLogin.classList.remove('active');
    if (tabSignup)  tabSignup.classList.add('active');
  }

  const loginError  = document.getElementById('loginError');
  const signupError = document.getElementById('signupError');
  if (loginError)  loginError.textContent  = '';
  if (signupError) signupError.textContent = '';
}

// ══════════════════════════════════════
//  LOGIN
// ══════════════════════════════════════

function doLogin() {
  const email   = document.getElementById('loginEmail').value.trim();
  const password= document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');

  if (!email || !password) {
    errorEl.textContent = 'Please fill in all fields.';
    return;
  }

  const formData = new FormData();
  formData.append('login_submit', true);
  formData.append('loginEmail', email);
  formData.append('loginPassword', password);

  fetch('auth.php', { method: 'POST', body: formData })
    .then(r => r.text())
    .then(data => {
      const res = data.trim();

      // PHP returns "success|ActualName" on successful login
      if (res.startsWith('success')) {
        const parts = res.split('|');
        const name  = parts[1] || email.split('@')[0];

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);

        closeAuth();
        updateNavUser();
        showToast('👋 Welcome back, ' + name + '!');
      } else {
        errorEl.textContent = res || 'Invalid email or password.';
      }
    })
    .catch(() => {
      errorEl.textContent = 'Connection error. Please try again.';
    });
}

// ══════════════════════════════════════
//  SIGNUP
// ══════════════════════════════════════

function doSignup() {
  const name    = document.getElementById('signupName').value.trim();
  const email   = document.getElementById('signupEmail').value.trim();
  const pass    = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  const errorEl = document.getElementById('signupError');

  if (!name || !email || !pass || !confirm) {
    errorEl.textContent = 'Please fill in all fields.';
    return;
  }
  if (pass !== confirm) {
    errorEl.textContent = 'Passwords do not match.';
    return;
  }
  if (pass.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters.';
    return;
  }

  const formData = new FormData();
  formData.append('signup_submit', true);
  formData.append('signupName', name);
  formData.append('signupEmail', email);
  formData.append('signupPassword', pass);

  fetch('auth.php', { method: 'POST', body: formData })
    .then(r => r.text())
    .then(data => {
      const res = data.trim();
      if (res === 'success') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        closeAuth();
        updateNavUser();
        showToast('🎸 Account created! Welcome, ' + name + '!');
      } else {
        errorEl.textContent = res || 'Signup failed. Try again.';
      }
    })
    .catch(() => {
      errorEl.textContent = 'Connection error. Please try again.';
    });
}

// ══════════════════════════════════════
//  LOGOUT
// ══════════════════════════════════════

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');

  const dropdown = document.getElementById('userDropdown');
  if (dropdown) dropdown.classList.remove('open');

  updateNavUser();
  showToast('✓ Logged out successfully.');
}

// ══════════════════════════════════════
//  TOAST
// ══════════════════════════════════════

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}