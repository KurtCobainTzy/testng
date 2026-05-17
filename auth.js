// ============================================
//  auth.js — Frontend Auth (PHP version)
//  Replace your old auth.js with this file
//  Works with auth.php backend
// ============================================

const AUTH_URL = 'auth.php';  // same folder as your HTML files

let currentUser = null;

// ── CHECK SESSION ON PAGE LOAD ──────────────
async function checkSession() {
    try {
        const res  = await fetch(`${AUTH_URL}?action=check`);
        const data = await res.json();

        if (data.loggedIn && data.user) {
            currentUser = data.user;
            updateNavUser();
        }
    } catch (e) {
        console.error('Session check failed:', e);
    }
}

// ── SIGN UP ─────────────────────────────────
async function doSignup() {
    const name     = document.getElementById('signupName').value.trim();
    const email    = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm  = document.getElementById('signupConfirm').value;
    const err      = document.getElementById('signupError');

    err.textContent = '';

    if (!name || !email || !password || !confirm) {
        err.textContent = 'Please fill in all fields.';
        return;
    }
    if (password !== confirm) {
        err.textContent = 'Passwords do not match.';
        return;
    }
    if (password.length < 6) {
        err.textContent = 'Password must be at least 6 characters.';
        return;
    }

    try {
        const res  = await fetch(`${AUTH_URL}?action=signup`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ name, email, password })
        });
        const data = await res.json();

        if (data.success) {
            currentUser = data.user;
            updateNavUser();
            closeAuth();
            showToast(data.message);

            // Auto-fill enrollment form if on enroll page
            if (document.getElementById('f_email')) document.getElementById('f_email').value = email;
            if (document.getElementById('f_name'))  document.getElementById('f_name').value  = name;
        } else {
            err.textContent = data.message;
        }
    } catch (e) {
        err.textContent = 'Connection error. Make sure XAMPP is running.';
    }
}

// ── LOGIN ────────────────────────────────────
async function doLogin() {
    const email    = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const err      = document.getElementById('loginError');

    err.textContent = '';

    if (!email || !password) {
        err.textContent = 'Please fill in all fields.';
        return;
    }

    try {
        const res  = await fetch(`${AUTH_URL}?action=login`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (data.success) {
            currentUser = data.user;
            updateNavUser();
            closeAuth();
            showToast(data.message);

            // Auto-fill enrollment form if on enroll page
            if (document.getElementById('f_email')) document.getElementById('f_email').value = email;
            if (document.getElementById('f_name'))  document.getElementById('f_name').value  = data.user.name;
        } else {
            err.textContent = data.message;
        }
    } catch (e) {
        err.textContent = 'Connection error. Make sure XAMPP is running.';
    }
}

// ── LOGOUT ───────────────────────────────────
async function logout() {
    try {
        await fetch(`${AUTH_URL}?action=logout`);
    } catch (e) {}

    currentUser = null;
    updateNavUser();

    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('open');

    showToast('Logged out.');
}

// ── UPDATE NAV UI ────────────────────────────
function updateNavUser() {
    const nameEl    = document.getElementById('navUserName');
    const dropName  = document.getElementById('dropdownName');
    const dropEmail = document.getElementById('dropdownEmail');

    if (currentUser) {
        if (nameEl)    nameEl.textContent    = currentUser.name;
        if (dropName)  dropName.textContent  = currentUser.name;
        if (dropEmail) dropEmail.textContent = currentUser.email;
    } else {
        if (nameEl)    nameEl.textContent    = '';
        if (dropName)  dropName.textContent  = '–';
        if (dropEmail) dropEmail.textContent = '–';
    }
}

// ── MODAL HELPERS ────────────────────────────
function handleUserIconClick() {
    if (currentUser) {
        const dd = document.getElementById('userDropdown');
        if (dd) dd.classList.toggle('open');
    } else {
        openAuth();
    }
}

function openAuth() {
    const bg = document.getElementById('authBg');
    if (bg) bg.classList.add('open');
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

    if (loginForm)  loginForm.style.display  = tab === 'login'  ? 'block' : 'none';
    if (signupForm) signupForm.style.display = tab === 'signup' ? 'block' : 'none';
    if (tabLogin)   tabLogin.classList.toggle('active',  tab === 'login');
    if (tabSignup)  tabSignup.classList.toggle('active', tab === 'signup');
}

// ── TOAST ────────────────────────────────────
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

// ── CLOSE DROPDOWN ON OUTSIDE CLICK ─────────
document.addEventListener('click', function (e) {
    const dd  = document.getElementById('userDropdown');
    const btn = document.getElementById('navUserBtn');
    if (dd && btn && !dd.contains(e.target) && !btn.contains(e.target)) {
        dd.classList.remove('open');
    }
});

// ── AUTO-RUN ON PAGE LOAD ────────────────────
checkSession();