
  // =============================================
  // "DATABASE" — localStorage
  //
  // melody_users   → array of user objects
  //   { name, email, password, createdAt }
  //
  // melody_session → currently logged-in user
  //   { name, email }
  //
  // To view stored users in browser DevTools:
  //   Application → Local Storage → melody_users
  // =============================================

  function getUsers()        { return JSON.parse(localStorage.getItem('melody_users')   || '[]');   }
  function saveUsers(u)      { localStorage.setItem('melody_users',   JSON.stringify(u)); }
  function getSession()      { return JSON.parse(localStorage.getItem('melody_session')  || 'null'); }
  function saveSession(u)    { localStorage.setItem('melody_session',  JSON.stringify(u)); }
  function clearSession()    { localStorage.removeItem('melody_session'); }


  // =============================================
  // NAV UI
  // =============================================

  function updateNavUI() {
    const s  = getSession();
    const btn = document.getElementById('navUserBtn');
    const nm  = document.getElementById('navUserName');
    if (s) {
      btn.classList.add('logged-in');
      nm.textContent = s.name.split(' ')[0];
      document.getElementById('dropdownName').textContent  = s.name;
      document.getElementById('dropdownEmail').textContent = s.email;
    } else {
      btn.classList.remove('logged-in');
      nm.textContent = '';
    }
  }

  function handleUserIconClick() {
    if (getSession()) {
      document.getElementById('userDropdown').classList.toggle('open');
    } else {
      openAuth('login');
    }
  }

  document.addEventListener('click', e => {
    const d = document.getElementById('userDropdown');
    const b = document.getElementById('navUserBtn');
    if (!b.contains(e.target) && !d.contains(e.target)) d.classList.remove('open');
  });

  function logout() {
    document.getElementById('userDropdown').classList.remove('open');
    clearSession();
    updateNavUI();
    showToast('Logged out. See you soon!');
  }


  // =============================================
  // AUTH MODAL
  // =============================================

  function openAuth(tab) {
    switchAuthTab(tab || 'login');
    document.getElementById('authBg').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuth() {
    document.getElementById('authBg').classList.remove('open');
    document.body.style.overflow = '';
    clearFields();
  }

  function handleAuthBgClick(e) {
    if (e.target === document.getElementById('authBg')) closeAuth();
  }

  function switchAuthTab(tab) {
    const login = tab === 'login';
    document.getElementById('tabLogin').classList.toggle('active', login);
    document.getElementById('tabSignup').classList.toggle('active', !login);
    document.getElementById('loginForm').style.display  = login ? 'block' : 'none';
    document.getElementById('signupForm').style.display = login ? 'none'  : 'block';
    hideErrors();
  }

  function showError(id, msg) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.classList.add('show');
  }

  function hideErrors() {
    ['loginError','signupError'].forEach(id => {
      document.getElementById(id).textContent = '';
      document.getElementById(id).classList.remove('show');
    });
  }

  function clearFields() {
    ['loginEmail','loginPassword','signupName','signupEmail','signupPassword','signupConfirm']
      .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    hideErrors();
  }


  // =============================================
  // SIGN UP — saves to localStorage
  // =============================================

 function doSignup() {
    // 1. Kunin ang values mula sa inputs
    const name     = document.getElementById('signupName').value.trim();
    const email    = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirm  = document.getElementById('signupConfirm').value;

    // 2. Simpleng validation
    if (!name || !email || !password) {
        showError('signupError', 'Please fill in all fields.');
        return;
    }
    if (password !== confirm) {
        showError('signupError', 'Passwords do not match.');
        return;
    }

    // 3. Ipadala sa auth.php (AJAX)
    const formData = new URLSearchParams();
    formData.append('signup_submit', '1');
    formData.append('signupName', name);
    formData.append('signupEmail', email);
    formData.append('signupPassword', password);

    fetch('auth.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            showToast('Account created! Welcome to Guitarify! 🎸');
            setTimeout(() => location.reload(), 1500); // Refresh para maging logged in
        } else {
            showError('signupError', data);
        }
    })
    .catch(error => console.error('Error:', error));
}


  // =============================================
  // LOG IN — checks localStorage
  // =============================================

  function doLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showError('loginError', 'Please enter email and password.');
        return;
    }

    const formData = new URLSearchParams();
    formData.append('login_submit', '1');
    formData.append('loginEmail', email);
    formData.append('loginPassword', password);

    fetch('auth.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            showToast('Welcome back to Guitarify!');
            setTimeout(() => location.reload(), 1500);
        } else {
            showError('loginError', data);
        }
    })
    .catch(error => console.error('Error:', error));
}


  // =============================================
  // VIDEO TUTORIALS
  // Replace ytId values with your actual YouTube video IDs
  // =============================================

  const tutorials = [
    { name:"POSITIVE GRID SPARK GO PW", type:"Guitar amplifier",       price:"11,790 ₽", old:"13,700 ₽", ytId:"Kpn-NZ7a8RY" },
    { name:"FOSTEX TH610",              type:"Professional headphones", price:"69,490 ₽", old:"83,480 ₽", ytId:"ZmRRhMJqMYY" },
    { name:"IBANEZ ICGC10W",            type:"Capo",                    price:"1,790 ₽",  old:"2,200 ₽",  ytId:"K_Qj4HVN7hs" },
    { name:"MARTIN GUITARS S1 UKULELE", type:"Soprano ukulele",         price:"35,790 ₽", old:"42,700 ₽", ytId:"df-eLzao63I"  }
  ];

  function openModal(i) {
    const t = tutorials[i];
    document.getElementById('modalName').textContent  = t.name;
    document.getElementById('modalType').textContent  = t.type;
    document.getElementById('modalPrice').textContent = t.price;
    document.getElementById('modalOld').textContent   = t.old;
    document.getElementById('modalYtBtn').href = 'https://www.youtube.com/watch?v=' + t.ytId;
    document.getElementById('modalVideo').innerHTML =
      `<iframe src="https://www.youtube.com/embed/${t.ytId}?autoplay=1&rel=0"
               allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    document.getElementById('modalBg').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modalBg').classList.remove('open');
    document.getElementById('modalVideo').innerHTML = '';
    document.body.style.overflow = '';
  }

  function handleVideoBgClick(e) {
    if (e.target === document.getElementById('modalBg')) closeModal();
  }

  function toggleHeart(e, el) {
    e.stopPropagation();
    el.textContent = el.textContent === '♡' ? '♥' : '♡';
    el.style.color  = el.textContent === '♥' ? '#f66e06' : '#aaa';
  }


  // =============================================
  // TOAST
  // =============================================

  function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3200);
  }


  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    const authOpen = document.getElementById('authBg').classList.contains('open');
    if (e.key === 'Enter' && authOpen) {
      const isLogin = document.getElementById('loginForm').style.display !== 'none';
      isLogin ? doLogin() : doSignup();
    }
    if (e.key === 'Escape') { closeModal(); closeAuth(); }
  });

  // Init
  updateNavUI();
