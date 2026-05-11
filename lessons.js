// ── LESSON DATA ──
const LESSONS = [
  {
    id: 1,
    icon: '🎸',
    number: 'Module 01',
    title: 'Getting Started with Guitar',
    level: 'beginner',
    duration: '10 min',
    content: `
      <h3>What You Need</h3>
      <ul>
        <li>An acoustic or electric guitar</li>
        <li>A guitar pick (optional for beginners)</li>
        <li>A quiet space to practice</li>
        <li>Patience and consistency</li>
      </ul>
      <h3>Parts of the Guitar</h3>
      <ul>
        <li><strong style="color:#f0ede0">Headstock</strong> — holds the tuning pegs</li>
        <li><strong style="color:#f0ede0">Neck</strong> — where you press the frets</li>
        <li><strong style="color:#f0ede0">Body</strong> — the main resonating part</li>
        <li><strong style="color:#f0ede0">Strings</strong> — 6 strings, E A D G B E (low to high)</li>
        <li><strong style="color:#f0ede0">Frets</strong> — metal strips that divide the neck</li>
        <li><strong style="color:#f0ede0">Soundhole</strong> — projects the sound (acoustic)</li>
      </ul>
      <div class="tip"><strong>Tip:</strong> Before playing, always make sure your guitar is in tune. Use a free tuner app on your phone.</div>
      <h3>How to Hold the Guitar</h3>
      <p>Sit up straight and rest the guitar on your dominant thigh. Keep your fretting hand relaxed with curved fingers. Your thumb should rest behind the neck, not over it.</p>
    `
  },
  {
    id: 2,
    icon: '🎵',
    number: 'Module 02',
    title: 'Reading Guitar Tabs',
    level: 'beginner',
    duration: '8 min',
    content: `
      <h3>What is a Tab?</h3>
      <p>Guitar tabs (tablature) are a simple way to read music without knowing how to read sheet music. Each line represents a string, and numbers tell you which fret to press.</p>
      <h3>Tab Layout</h3>
      <ul>
        <li>e — 1st string (thinnest, highest)</li>
        <li>B — 2nd string</li>
        <li>G — 3rd string</li>
        <li>D — 4th string</li>
        <li>A — 5th string</li>
        <li>E — 6th string (thickest, lowest)</li>
      </ul>
      <div class="tip"><strong>Example:</strong> If you see "2" on the A string, press the 2nd fret of the A string and pluck it.</div>
      <h3>Common Symbols</h3>
      <ul>
        <li>0 — Open string (no fret pressed)</li>
        <li>h — Hammer-on</li>
        <li>p — Pull-off</li>
        <li>/ — Slide up</li>
        <li>b — Bend the string</li>
      </ul>
    `
  },
  {
    id: 3,
    icon: '🤚',
    number: 'Module 03',
    title: 'Your First Chords: C and G',
    level: 'beginner',
    duration: '15 min',
    content: `
      <h3>The C Major Chord</h3>
      <p>Place your fingers like this:</p>
      <ul>
        <li>Ring finger — 3rd fret, A string</li>
        <li>Middle finger — 2nd fret, D string</li>
        <li>Index finger — 1st fret, B string</li>
      </ul>
      <div class="chord-diagram-row">
        <div class="chord-mini"><div class="chord-mini-name">C</div><div class="chord-mini-fingers">x32010</div></div>
        <div class="chord-mini"><div class="chord-mini-name">G</div><div class="chord-mini-fingers">320003</div></div>
      </div>
      <h3>The G Major Chord</h3>
      <ul>
        <li>Middle finger — 3rd fret, low E string</li>
        <li>Index finger — 2nd fret, A string</li>
        <li>Ring finger — 3rd fret, high E string</li>
      </ul>
      <div class="tip"><strong>Practice tip:</strong> Switch between C and G slowly. Focus on clean notes before speeding up.</div>
    `
  },
  {
    id: 4,
    icon: '🎼',
    number: 'Module 04',
    title: 'More Chords: D, Em, Am',
    level: 'beginner',
    duration: '15 min',
    content: `
      <h3>D Major</h3>
      <ul>
        <li>Index finger — 2nd fret, G string</li>
        <li>Middle finger — 2nd fret, high E string</li>
        <li>Ring finger — 3rd fret, B string</li>
      </ul>
      <div class="chord-diagram-row">
        <div class="chord-mini"><div class="chord-mini-name">D</div><div class="chord-mini-fingers">xx0232</div></div>
        <div class="chord-mini"><div class="chord-mini-name">Em</div><div class="chord-mini-fingers">022000</div></div>
        <div class="chord-mini"><div class="chord-mini-name">Am</div><div class="chord-mini-fingers">x02210</div></div>
      </div>
      <h3>E Minor</h3>
      <ul>
        <li>Middle finger — 2nd fret, A string</li>
        <li>Ring finger — 2nd fret, D string</li>
      </ul>
      <h3>A Minor</h3>
      <ul>
        <li>Index finger — 1st fret, B string</li>
        <li>Middle finger — 2nd fret, D string</li>
        <li>Ring finger — 2nd fret, G string</li>
      </ul>
      <div class="tip"><strong>Goal:</strong> Practice all 5 chords (C, G, D, Em, Am) in a circle. These cover hundreds of songs!</div>
    `
  },
  {
    id: 5,
    icon: '🥁',
    number: 'Module 05',
    title: 'Basic Strumming Patterns',
    level: 'beginner',
    duration: '12 min',
    content: `
      <h3>Down Strumming</h3>
      <p>Start with simple down strums. Keep your wrist loose and strum from your elbow, not your shoulder.</p>
      <ul>
        <li>Pattern 1: D D D D (4/4 time, one strum per beat)</li>
        <li>Pattern 2: D _ D _ (strum on beats 1 and 3)</li>
      </ul>
      <h3>Down-Up Strumming</h3>
      <ul>
        <li>Pattern 3: D DU DU (common beginner pattern)</li>
        <li>Pattern 4: DDUUDU (the classic pop pattern)</li>
      </ul>
      <div class="tip"><strong>Tip:</strong> D = down strum, U = up strum, _ = skip (don't strum). Practice slowly with a metronome first.</div>
      <h3>Practice Exercise</h3>
      <p>Hold a G chord and strum Pattern 4 (DDUUDU) for 1 minute without stopping. Then switch to C chord and repeat.</p>
    `
  },
  {
    id: 6,
    icon: '🎶',
    number: 'Module 06',
    title: 'Chord Transitions',
    level: 'intermediate',
    duration: '20 min',
    content: `
      <h3>Why Transitions Matter</h3>
      <p>Smooth chord transitions are what separate beginners from intermediate players. The goal is to change chords without pausing or losing the rhythm.</p>
      <h3>Tips for Faster Transitions</h3>
      <ul>
        <li>Look ahead — think about the next chord before you need it</li>
        <li>Find common fingers — keep fingers that don't move in place</li>
        <li>Practice just the transition, not the whole song</li>
        <li>Use a metronome and start slow</li>
      </ul>
      <div class="tip"><strong>Exercise:</strong> Set a timer for 1 minute. Count how many times you can switch from G to C cleanly. Try to beat your record daily.</div>
      <h3>Common Transitions to Practice</h3>
      <ul>
        <li>G → C → D → Em (pop progression)</li>
        <li>Am → F → C → G (emotional ballad)</li>
        <li>E → A → D (blues rock)</li>
      </ul>
    `
  },
  {
    id: 7,
    icon: '🎤',
    number: 'Module 07',
    title: 'Playing Your First Song',
    level: 'intermediate',
    duration: '25 min',
    content: `
      <h3>Choosing Your First Song</h3>
      <p>Pick a song that uses chords you already know. Great beginner songs include:</p>
      <ul>
        <li>Knockin' on Heaven's Door — G, D, Am, C</li>
        <li>Leaving on a Jet Plane — G, C, D</li>
        <li>Horse With No Name — Em, D6/9</li>
        <li>Love Me Do — G, C, D</li>
      </ul>
      <h3>Breaking It Down</h3>
      <ul>
        <li>Step 1 — Learn the chord sequence without strumming</li>
        <li>Step 2 — Add strumming slowly</li>
        <li>Step 3 — Play along with the original song at half speed</li>
        <li>Step 4 — Try at full speed</li>
      </ul>
      <div class="tip"><strong>Tip:</strong> Use YouTube's playback speed feature to slow down songs while learning.</div>
    `
  },
  {
    id: 8,
    icon: '🔥',
    number: 'Module 08',
    title: 'Barre Chords',
    level: 'advanced',
    duration: '30 min',
    content: `
      <h3>What is a Barre Chord?</h3>
      <p>A barre chord uses your index finger to press all 6 strings across one fret, acting like a moveable nut. This unlocks every key on the guitar.</p>
      <h3>F Major (the hardest beginner chord)</h3>
      <ul>
        <li>Index — barre all strings at fret 1</li>
        <li>Ring — 3rd fret, A string</li>
        <li>Pinky — 3rd fret, D string</li>
        <li>Middle — 2nd fret, G string</li>
      </ul>
      <div class="tip"><strong>Warning:</strong> Barre chords require finger strength. Your fingers will hurt at first — that's normal. Build up gradually with short practice sessions.</div>
      <h3>Building Finger Strength</h3>
      <ul>
        <li>Practice the barre press alone first (no other fingers)</li>
        <li>Check each string rings clearly one by one</li>
        <li>5-10 minutes a day is enough — rest is important</li>
      </ul>
    `
  },
  {
    id: 9,
    icon: '🎯',
    number: 'Module 09',
    title: 'Fingerpicking Basics',
    level: 'advanced',
    duration: '25 min',
    content: `
      <h3>Introduction to Fingerpicking</h3>
      <p>Instead of using a pick, you use your thumb and fingers to pluck individual strings. This creates a softer, more melodic sound.</p>
      <h3>Finger Assignment</h3>
      <ul>
        <li>Thumb (p) — plays E, A, D strings (bass strings)</li>
        <li>Index (i) — plays G string</li>
        <li>Middle (m) — plays B string</li>
        <li>Ring (a) — plays high E string</li>
      </ul>
      <h3>Basic Pattern: p-i-m-a</h3>
      <p>Hold a C chord. Pluck: thumb (E string), index (G), middle (B), ring (high E). Repeat slowly.</p>
      <div class="tip"><strong>Tip:</strong> Keep your wrist slightly arched and fingers curved. Avoid resting your palm on the body while fingerpicking.</div>
    `
  }
];

let currentLessonIndex = 0;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
let currentFilter = 'all';

// ── RENDER MODULES ──
function renderModules(filter) {
  const grid = document.getElementById('modulesGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? LESSONS : LESSONS.filter(l => l.level === filter);

  filtered.forEach((lesson, i) => {
    const done = completedLessons.includes(lesson.id);
    const card = document.createElement('div');
    card.className = 'module-card' + (done ? ' done' : '');
    card.onclick = () => openLessonModal(lesson);
    card.innerHTML = `
      <div class="module-card-top">
        <div class="module-icon">${lesson.icon}</div>
        <div class="module-meta">
          <div class="module-number">${lesson.number}</div>
          <div class="module-title">${lesson.title}</div>
        </div>
      </div>
      <div class="module-card-bottom">
        <span class="module-level ${lesson.level}">${lesson.level}</span>
        <span class="module-duration">⏱ ${lesson.duration}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  updateProgress();
}

function filterModules(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderModules(filter);
}

function updateProgress() {
  const total = LESSONS.length;
  const done = completedLessons.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent = `${done} / ${total} completed`;
}

// ── LESSON MODAL ──
function openLessonModal(lesson) {
  currentLessonIndex = LESSONS.findIndex(l => l.id === lesson.id);
  const done = completedLessons.includes(lesson.id);
  document.getElementById('modalTag').textContent = lesson.number + ' · ' + lesson.level.toUpperCase();
  document.getElementById('modalTitle').textContent = lesson.title;
  document.getElementById('modalBody').innerHTML = lesson.content;
  const btnDone = document.getElementById('btnDone');
  btnDone.textContent = done ? '✓ Completed' : '✓ Mark as Done';
  btnDone.className = 'lesson-btn-done' + (done ? ' done' : '');
  document.getElementById('lessonModalBg').classList.add('open');
}

function closeLessonModal() {
  document.getElementById('lessonModalBg').classList.remove('open');
}

function handleLessonBgClick(e) {
  if (e.target === document.getElementById('lessonModalBg')) closeLessonModal();
}

function markDone() {
  const lesson = LESSONS[currentLessonIndex];
  if (!completedLessons.includes(lesson.id)) {
    completedLessons.push(lesson.id);
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    showToast('✓ Lesson marked as done!');
  }
  document.getElementById('btnDone').textContent = '✓ Completed';
  document.getElementById('btnDone').className = 'lesson-btn-done done';
  renderModules(currentFilter);
}

function nextLesson() {
  if (currentLessonIndex < LESSONS.length - 1) {
    openLessonModal(LESSONS[currentLessonIndex + 1]);
  } else {
    showToast('🎉 You finished all lessons!');
    closeLessonModal();
  }
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ──
renderModules('all');
