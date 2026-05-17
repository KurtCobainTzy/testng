// ══════════════════════════════════════════
//  CHORD DATA
//  fingers: array of {string, fret, finger}
//    string: 1=high e, 6=low E
//    fret: 0=open
//    finger: 1-4 (null = open/muted)
//  muted: array of string numbers that are muted (x)
//  open:  array of string numbers that are open (o)
//  barre: { fret, fromString, toString } — optional
//  songs: song examples
//  youtubeId: YouTube video ID for "Watch Video Lesson"
//  photo: optional path to finger photo (e.g. 'photos/g_major.jpg')
// ══════════════════════════════════════════

const CHORDS = [
  {
    name: 'G', type: 'major', label: 'G Major',
    fingers: [{s:6,f:3,fn:2},{s:5,f:2,fn:1},{s:1,f:3,fn:3}],
    muted: [], open: [4,3,2],
    shape: '320003',
    songs: ['Leaving on a Jet Plane', 'Knockin on Heavens Door', 'Country Roads'],
    youtubeId: 'OZEKdNBl5OA',
    photo: ''
  },
  {
    name: 'C', type: 'major', label: 'C Major',
    fingers: [{s:5,f:3,fn:3},{s:4,f:2,fn:2},{s:2,f:1,fn:1}],
    muted: [6], open: [3,1],
    shape: 'x32010',
    songs: ['Let Her Go', 'Hallelujah', 'Stand By Me'],
    youtubeId: 'aWAHGIa4AJM',
    photo: ''
  },
  {
    name: 'D', type: 'major', label: 'D Major',
    fingers: [{s:3,f:2,fn:1},{s:1,f:2,fn:2},{s:2,f:3,fn:3}],
    muted: [6,5], open: [4],
    shape: 'xx0232',
    songs: ['Wonderwall', 'Brown Eyed Girl', 'Sweet Home Alabama'],
    youtubeId: 'aWAHGIa4AJM',
    photo: ''
  },
  {
    name: 'E', type: 'major', label: 'E Major',
    fingers: [{s:5,f:2,fn:2},{s:4,f:2,fn:3},{s:3,f:1,fn:1}],
    muted: [], open: [6,2,1],
    shape: '022100',
    songs: ['Smells Like Teen Spirit', 'Purple Haze', 'Back in Black'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'A', type: 'major', label: 'A Major',
    fingers: [{s:4,f:2,fn:1},{s:3,f:2,fn:2},{s:2,f:2,fn:3}],
    muted: [6], open: [5,1],
    shape: 'x02220',
    songs: ['Wish You Were Here', 'Hotel California', 'Sweet Child O Mine'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'F', type: 'major', label: 'F Major',
    fingers: [{s:6,f:1,fn:1,barre:true},{s:5,f:3,fn:3},{s:4,f:3,fn:4},{s:3,f:2,fn:2}],
    muted: [], open: [],
    barre: {fret:1, from:1, to:6},
    shape: '133211',
    songs: ['Let Her Go', 'Wonderwall', 'No Woman No Cry'],
    youtubeId: '0YFlJQHLWlU',
    photo: ''
  },
  {
    name: 'Em', type: 'minor', label: 'E Minor',
    fingers: [{s:5,f:2,fn:2},{s:4,f:2,fn:3}],
    muted: [], open: [6,3,2,1],
    shape: '022000',
    songs: ['Wonderwall', 'Horse With No Name', 'Nothing Else Matters'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Am', type: 'minor', label: 'A Minor',
    fingers: [{s:4,f:2,fn:2},{s:3,f:2,fn:3},{s:2,f:1,fn:1}],
    muted: [6], open: [5,1],
    shape: 'x02210',
    songs: ['Stairway to Heaven', 'The Sound of Silence', 'Harana'],
    youtubeId: 'aWAHGIa4AJM',
    photo: ''
  },
  {
    name: 'Dm', type: 'minor', label: 'D Minor',
    fingers: [{s:4,f:0,fn:null},{s:3,f:2,fn:2},{s:2,f:3,fn:3},{s:1,f:1,fn:1}],
    muted: [6,5], open: [4],
    shape: 'xx0231',
    songs: ['Losing My Religion', 'Eleanor Rigby', 'House of the Rising Sun'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Gm', type: 'minor', label: 'G Minor',
    fingers: [{s:6,f:3,fn:3},{s:5,f:5,fn:4},{s:4,f:5,fn:4},{s:3,f:3,fn:2}],
    muted: [], open: [],
    barre: {fret:3, from:1, to:6},
    shape: '355333',
    songs: ['Huling El Bimbo', 'Alapaap', 'Tadhana'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Bm', type: 'minor', label: 'B Minor',
    fingers: [{s:5,f:2,fn:1},{s:4,f:4,fn:3},{s:3,f:4,fn:4},{s:2,f:3,fn:2}],
    muted: [6], open: [],
    barre: {fret:2, from:1, to:5},
    shape: 'x24432',
    songs: ['Wonderwall', 'Let Her Go', 'Stay With Me'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Cm', type: 'minor', label: 'C Minor',
    fingers: [{s:5,f:3,fn:3},{s:4,f:5,fn:4},{s:3,f:5,fn:4},{s:2,f:4,fn:2}],
    muted: [6], open: [],
    barre: {fret:3, from:1, to:5},
    shape: 'x35543',
    songs: ['Chandelier', 'Someone Like You', 'The Night We Met'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'G7', type: '7th', label: 'G7',
    fingers: [{s:6,f:3,fn:3},{s:5,f:2,fn:2},{s:1,f:1,fn:1}],
    muted: [], open: [4,3,2],
    shape: '320001',
    songs: ['Twist and Shout', 'La Bamba', 'Johnny B. Goode'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'C7', type: '7th', label: 'C7',
    fingers: [{s:5,f:3,fn:3},{s:4,f:2,fn:2},{s:2,f:1,fn:1},{s:3,f:3,fn:4}],
    muted: [6], open: [1],
    shape: 'x32310',
    songs: ['Blue Suede Shoes', 'Rock Around the Clock', 'Roll Over Beethoven'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'D7', type: '7th', label: 'D7',
    fingers: [{s:4,f:0,fn:null},{s:3,f:2,fn:2},{s:2,f:1,fn:1},{s:1,f:2,fn:3}],
    muted: [6,5], open: [4],
    shape: 'xx0212',
    songs: ['Brown Eyed Girl', 'Knockin on Heavens Door', 'Royals'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'E7', type: '7th', label: 'E7',
    fingers: [{s:5,f:2,fn:2},{s:3,f:1,fn:1}],
    muted: [], open: [6,4,2,1],
    shape: '020100',
    songs: ['Lay Down Sally', 'Crossroads', 'Pride and Joy'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'A7', type: '7th', label: 'A7',
    fingers: [{s:4,f:2,fn:2},{s:2,f:2,fn:3}],
    muted: [6], open: [5,3,1],
    shape: 'x02020',
    songs: ['She Loves You', 'From Me to You', 'P.S. I Love You'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'B7', type: '7th', label: 'B7',
    fingers: [{s:5,f:2,fn:1},{s:3,f:2,fn:2},{s:1,f:2,fn:3},{s:4,f:4,fn:4}],
    muted: [6], open: [],
    shape: 'x21202',
    songs: ['Norwegian Wood', 'Love Me Do', 'Day Tripper'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Cadd9', type: 'other', label: 'Cadd9',
    fingers: [{s:5,f:3,fn:3},{s:4,f:2,fn:2},{s:2,f:3,fn:4}],
    muted: [6], open: [3,1],
    shape: 'x32033',
    songs: ['Wonderwall', 'Champagne Supernova', 'Mr. Jones'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
  {
    name: 'Dsus2', type: 'other', label: 'Dsus2',
    fingers: [{s:3,f:2,fn:1},{s:2,f:3,fn:3}],
    muted: [6,5], open: [4,1],
    shape: 'xx0230',
    songs: ['Creep', 'With or Without You', 'Bad Moon Rising'],
    youtubeId: 'BBz-Jyr23M4',
    photo: ''
  },
];

// ── AUDIO ──
const OPEN_MIDI = [64,59,55,50,45,40];
let audioCtx = null, wafPlayer = null, guitarFont = null, soundReady = false;
let currentChord = null;

function loadAudio() {
  const lib = document.createElement('script');
  lib.src = 'https://cdn.jsdelivr.net/npm/webaudiofont@2.3.1/npm/dist/WebAudioFontPlayer.js';
  lib.onload = () => {
    const font = document.createElement('script');
    font.src = 'https://cdn.jsdelivr.net/npm/webaudiofont@2.3.1/npm/dist/R/0240_Guitar_sf2_file.js';
    font.onload = () => {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        wafPlayer = new WebAudioFontPlayer();
        const fontKey = Object.keys(window).find(k => k.match(/^_\d+_Guitar/));
        if (fontKey) {
          guitarFont = window[fontKey];
          wafPlayer.loader.decodeAfterLoading(audioCtx, fontKey);
          soundReady = 'font';
        } else { soundReady = 'synth'; }
        document.getElementById('cmStrumBtn').disabled = false;
      } catch(e) { soundReady = 'synth'; document.getElementById('cmStrumBtn').disabled = false; }
    };
    font.onerror = () => { soundReady = 'synth'; document.getElementById('cmStrumBtn').disabled = false; };
    document.head.appendChild(font);
  };
  lib.onerror = () => { soundReady = 'synth'; document.getElementById('cmStrumBtn').disabled = false; };
  document.head.appendChild(lib);
}

function strumChord() {
  if (!currentChord) return;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Parse shape string to get frets
  const shape = currentChord.shape;
  const notes = [];
  for (let i = 0; i < shape.length; i++) {
    const c = shape[i];
    if (c === 'x') continue;
    const fret = parseInt(c) || 0;
    const si = i; // 0=low E (string index in OPEN_MIDI reversed)
    const midi = OPEN_MIDI[5 - i] + fret;
    notes.push(midi);
  }

  notes.forEach((midi, i) => {
    const delay = i * 0.055;
    if (soundReady === 'font' && wafPlayer && guitarFont) {
      setTimeout(() => {
        try { wafPlayer.queueWaveTable(audioCtx, audioCtx.destination, guitarFont, audioCtx.currentTime, midi, 2.0, 0.7); }
        catch(e) { synthNote(midi, 0); }
      }, i * 55);
    } else { synthNote(midi, delay); }
  });
}

function synthNote(midi, delay) {
  if (!audioCtx) return;
  const freq = 440 * Math.pow(2, (midi - 69) / 12);
  const t = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filt = audioCtx.createBiquadFilter();
  osc.type = 'sawtooth'; osc.frequency.value = freq;
  osc2.type = 'triangle'; osc2.frequency.value = freq * 2.005;
  filt.type = 'lowpass';
  filt.frequency.setValueAtTime(5000, t);
  filt.frequency.exponentialRampToValueAtTime(600, t + 0.4);
  osc.connect(filt); osc2.connect(filt); filt.connect(gain); gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.2, t + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);
  osc.start(t); osc2.start(t); osc.stop(t + 2.0); osc2.stop(t + 2.0);
}

// ── SVG CHORD DIAGRAM ──
function buildDiagramSVG(chord) {
  const FRETS = 5;
  const STRINGS = 6;
  const W = 140, H = 130;
  const LEFT = 28, TOP = 28, RIGHT = W - 10, BOT = TOP + (FRETS * 20);
  const CELL_W = (RIGHT - LEFT) / (STRINGS - 1);
  const CELL_H = 20;

  // Determine starting fret
  const fretNums = chord.fingers.filter(f => f.f > 0).map(f => f.f);
  const minFret = fretNums.length ? Math.min(...fretNums) : 1;
  const startFret = minFret > 1 ? minFret : 1;
  const showFretNum = startFret > 1;

  let svg = `<svg width="${W}" height="${H + 20}" viewBox="0 0 ${W} ${H + 20}" xmlns="http://www.w3.org/2000/svg">`;

  // Nut (thick top bar if startFret === 1)
  if (startFret === 1) {
    svg += `<rect x="${LEFT}" y="${TOP - 4}" width="${RIGHT - LEFT}" height="5" rx="2" fill="#1a1a1a"/>`;
  } else {
    svg += `<text x="${RIGHT + 6}" y="${TOP + 10}" font-size="10" fill="#888">${startFret}fr</text>`;
  }

  // Fret lines
  for (let f = 0; f <= FRETS; f++) {
    const y = TOP + f * CELL_H;
    svg += `<line x1="${LEFT}" y1="${y}" x2="${RIGHT}" y2="${y}" stroke="#ccc" stroke-width="${f === 0 ? 2 : 1}"/>`;
  }

  // String lines
  for (let s = 0; s < STRINGS; s++) {
    const x = LEFT + s * CELL_W;
    svg += `<line x1="${x}" y1="${TOP}" x2="${x}" y2="${BOT}" stroke="#888" stroke-width="${1 + s * 0.2}"/>`;
  }

  // Barre
  if (chord.barre) {
    const bf = chord.barre.fret - startFret + 1;
    const x1 = LEFT + (STRINGS - chord.barre.to) * CELL_W;
    const x2 = LEFT + (STRINGS - chord.barre.from) * CELL_W;
    const y = TOP + (bf - 0.5) * CELL_H;
    svg += `<rect x="${x1 - 10}" y="${y - 10}" width="${x2 - x1 + 20}" height="20" rx="10" fill="#1a1a1a" opacity="0.85"/>`;
  }

  // Finger dots
  chord.fingers.forEach(f => {
    if (f.f === 0 || !f.fn) return;
    const relFret = f.f - startFret + 1;
    if (relFret < 1 || relFret > FRETS) return;
    const x = LEFT + (STRINGS - f.s) * CELL_W;
    const y = TOP + (relFret - 0.5) * CELL_H;
    svg += `<circle cx="${x}" cy="${y}" r="9" fill="#f66e06"/>`;
    svg += `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">${f.fn}</text>`;
  });

  // Open / muted markers above nut
  for (let s = 0; s < STRINGS; s++) {
    const x = LEFT + s * CELL_W;
    const strNum = STRINGS - s; // 1=high e, 6=low E
    const isMuted = chord.muted.includes(strNum);
    const isOpen  = chord.open.includes(strNum);
    if (isMuted) {
      svg += `<text x="${x}" y="${TOP - 8}" text-anchor="middle" font-size="12" font-weight="900" fill="#e05555">✕</text>`;
    } else if (isOpen) {
      svg += `<circle cx="${x}" cy="${TOP - 9}" r="5" fill="none" stroke="#555" stroke-width="1.5"/>`;
    }
  }

  svg += '</svg>';
  return svg;
}

// ── RENDER CHORD CARDS ──
function renderCards(filter) {
  const grid = document.getElementById('chordGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? CHORDS : CHORDS.filter(c => c.type === filter);

  list.forEach(chord => {
    const card = document.createElement('div');
    card.className = 'cl-card';
    card.onclick = () => openModal(chord);
    card.innerHTML = `
      <div class="cl-card-name">${chord.name}</div>
      <div class="cl-card-type">${chord.label}</div>
      <div class="cl-mini-diagram">${buildMiniDiagram(chord)}</div>
      <div class="cl-card-learn">Learn →</div>
    `;
    grid.appendChild(card);
  });
}

function buildMiniDiagram(chord) {
  // Tiny version for the card
  const FRETS = 4, STRINGS = 6;
  const W = 110, LEFT = 16, TOP = 16, CELL_W = (W - LEFT - 10) / (STRINGS - 1), CELL_H = 14, BOT = TOP + FRETS * CELL_H;
  const fretNums = chord.fingers.filter(f => f.f > 0).map(f => f.f);
  const startFret = fretNums.length ? Math.min(...fretNums) : 1;
  let svg = `<svg width="${W}" height="${BOT + 20}" viewBox="0 0 ${W} ${BOT + 20}" xmlns="http://www.w3.org/2000/svg">`;
  if (startFret === 1) svg += `<rect x="${LEFT}" y="${TOP - 3}" width="${W - LEFT - 10}" height="4" rx="1" fill="#333"/>`;
  for (let f = 0; f <= FRETS; f++) { const y = TOP + f * CELL_H; svg += `<line x1="${LEFT}" y1="${y}" x2="${W-10}" y2="${y}" stroke="#444" stroke-width="0.8"/>`; }
  for (let s = 0; s < STRINGS; s++) { const x = LEFT + s * CELL_W; svg += `<line x1="${x}" y1="${TOP}" x2="${x}" y2="${BOT}" stroke="#555" stroke-width="0.8"/>`; }
  chord.fingers.forEach(f => {
    if (f.f === 0 || !f.fn) return;
    const rel = f.f - startFret + 1;
    if (rel < 1 || rel > FRETS) return;
    const x = LEFT + (STRINGS - f.s) * CELL_W;
    const y = TOP + (rel - 0.5) * CELL_H;
    svg += `<circle cx="${x}" cy="${y}" r="6" fill="#f66e06"/>`;
  });
  svg += '</svg>';
  return svg;
}

// ── MODAL ──
function openModal(chord) {
  currentChord = chord;
  document.getElementById('cmTitle').textContent = chord.label.toUpperCase();
  document.getElementById('cmDiagram').innerHTML = buildDiagramSVG(chord);
  document.getElementById('cmFingers').textContent = chord.shape;

  // Photo
  const img = document.getElementById('cmPhotoImg');
  const placeholder = document.getElementById('cmPhotoPlaceholder');
  if (chord.photo) {
    img.src = chord.photo;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'block';
  }

  // Songs
  const songsList = document.getElementById('cmSongs');
  songsList.innerHTML = chord.songs.map(s => `<li>${s}</li>`).join('');

  // Video button
  document.getElementById('cmVideoBtn').href = `https://www.youtube.com/watch?v=${chord.youtubeId}`;

  document.getElementById('cmBg').classList.add('open');
}

function closeCm() {
  document.getElementById('cmBg').classList.remove('open');
}

function handleCmBgClick(e) {
  if (e.target === document.getElementById('cmBg')) closeCm();
}

// ── FILTER ──
function filterChords(filter, btn) {
  document.querySelectorAll('.cl-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards(filter);
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ──
renderCards('all');
loadAudio();

// ══════════════════════════════════════════
//  FRETBOARD EXPLORER
// ══════════════════════════════════════════

const FB_NOTES       = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FB_CHORD_TYPES = ['Major','Minor','7','5','dim','dim7','aug','sus2','sus4','maj7','m7','7sus4'];
const FB_ADV_TYPES   = ['maj9','maj11','maj13','add9','6add9','m6','m9','m11','madd9','mmaj7','m7b5','6','9','11','13','7b5','7#5','7b9','7#9'];
const FB_STRINGS     = ['E','B','G','D','A','E'];
const FB_OPEN_MIDI   = [64,59,55,50,45,40];
const FB_TOTAL_FRETS = 16;
const FB_MARKERS     = [3,5,7,9,12,15];

const FB_CHORD_DATA = {
  'C_Major': { f:[{s:1,n:0,open:true},{s:2,n:1,fn:2},{s:3,n:0,open:true},{s:4,n:2,fn:3},{s:5,n:3,fn:4}], m:[5] },
  'C_Minor': { f:[{s:1,n:3,fn:4},{s:2,n:1,fn:2},{s:3,n:0,open:true},{s:4,n:1,fn:1},{s:5,n:3,fn:3}], m:[5] },
  'C_7':     { f:[{s:1,n:0,open:true},{s:2,n:1,fn:2},{s:3,n:3,fn:4},{s:4,n:2,fn:3},{s:5,n:3,fn:4}], m:[5] },
  'C_5':     { f:[{s:3,n:2,fn:2},{s:4,n:3,fn:3}], m:[0,1,2,5] },
  'C_dim':   { f:[{s:1,n:2,fn:2},{s:2,n:1,fn:1},{s:3,n:2,fn:3},{s:4,n:3,fn:4}], m:[4,5] },
  'C_dim7':  { f:[{s:1,n:2,fn:2},{s:2,n:1,fn:1},{s:3,n:2,fn:3},{s:4,n:3,fn:4},{s:5,n:2,fn:2}], m:[5] },
  'C_aug':   { f:[{s:1,n:1,fn:1},{s:2,n:1,fn:1},{s:3,n:1,fn:1},{s:4,n:2,fn:2},{s:5,n:3,fn:3}], m:[5] },
  'C_sus2':  { f:[{s:1,n:0,open:true},{s:2,n:3,fn:4},{s:3,n:0,open:true},{s:4,n:2,fn:2},{s:5,n:3,fn:3}], m:[5] },
  'C_sus4':  { f:[{s:1,n:1,fn:1},{s:2,n:1,fn:1},{s:3,n:0,open:true},{s:4,n:3,fn:3},{s:5,n:3,fn:4}], m:[5] },
  'C_maj7':  { f:[{s:1,n:0,open:true},{s:2,n:0,open:true},{s:3,n:0,open:true},{s:4,n:2,fn:2},{s:5,n:3,fn:3}], m:[5] },
  'C_m7':    { f:[{s:1,n:3,fn:4},{s:2,n:1,fn:1},{s:3,n:3,fn:4},{s:4,n:1,fn:1},{s:5,n:3,fn:3}], m:[5] },
  'C_7sus4': { f:[{s:1,n:1,fn:1},{s:2,n:1,fn:1},{s:3,n:3,fn:4},{s:4,n:2,fn:2},{s:5,n:3,fn:3}], m:[5] },
};

let fbSelNote = 'C', fbSelType = 'Minor', fbCurPos = 1, fbAdvMode = false;
let fbAudioCtx = null, fbWafPlayer = null, fbGuitarFont = null, fbSoundReady = false;

// ── SHOW / HIDE FRETBOARD ──
function showFretboard(btn) {
  // Switch tabs
  document.querySelectorAll('.cl-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide chord grid, show fretboard
  document.getElementById('clWrap').style.display = 'none';
  document.getElementById('fretboardWrap').style.display = 'block';

  // Init fretboard if first time
  if (!fbInitialized) {
    fbInitialized = true;
    fbBuildFretNumbers();
    fbBuildFretboard();
    fbBuildPosBtns();
    fbBuildNotes();
    fbBuildTypes();
    fbLoadSamples();

    document.getElementById('fbAdvancedBtn').onclick = () => {
      fbAdvMode = !fbAdvMode;
      document.getElementById('fbAdvancedBtn').textContent = fbAdvMode ? 'Common' : 'Advanced';
      fbBuildTypes();
    };
  }
}

let fbInitialized = false;

// Override filterChords to also show chord grid
const _origFilterChords = filterChords;
window.filterChords = function(filter, btn) {
  document.getElementById('clWrap').style.display = 'block';
  document.getElementById('fretboardWrap').style.display = 'none';
  _origFilterChords(filter, btn);
};

// ── AUDIO ──
function fbLoadSamples() {
  const lib = document.createElement('script');
  lib.src = 'https://cdn.jsdelivr.net/npm/webaudiofont@2.3.1/npm/dist/WebAudioFontPlayer.js';
  lib.onload = () => {
    const font = document.createElement('script');
    font.src = 'https://cdn.jsdelivr.net/npm/webaudiofont@2.3.1/npm/dist/R/0240_Guitar_sf2_file.js';
    font.onload = () => {
      try {
        fbAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        fbWafPlayer = new WebAudioFontPlayer();
        const fontKey = Object.keys(window).find(k => k.match(/^_\d+_Guitar/));
        if (fontKey) {
          fbGuitarFont = window[fontKey];
          fbWafPlayer.loader.decodeAfterLoading(fbAudioCtx, fontKey);
          fbSetStatus('✓ Guitar samples loaded!', '#4caf50');
          document.getElementById('fbPlayBtn').disabled = false;
          fbSoundReady = 'font';
        } else { fbUseSynth(); }
      } catch(e) { fbUseSynth(); }
    };
    font.onerror = fbUseSynth;
    document.head.appendChild(font);
  };
  lib.onerror = fbUseSynth;
  document.head.appendChild(lib);
}

function fbUseSynth() {
  if (!fbAudioCtx) fbAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  fbSoundReady = 'synth';
  document.getElementById('fbPlayBtn').disabled = false;
  fbSetStatus('⚠ Using synthesized sound', '#f66e06');
  setTimeout(() => fbSetStatus(''), 3000);
}

function fbSetStatus(msg, color) {
  const el = document.getElementById('fbStatusBar');
  el.textContent = msg;
  el.style.color = color || '#888';
}

function fbPlayChord() {
  if (!fbAudioCtx) fbAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (fbAudioCtx.state === 'suspended') fbAudioCtx.resume();

  const chord = fbGetChord();
  const muted = new Set(chord.m || []);
  const notes = [];
  for (let si = 5; si >= 0; si--) {
    if (muted.has(si)) continue;
    const fd = chord.f.find(x => x.s === si);
    if (!fd) continue;
    notes.push(FB_OPEN_MIDI[si] + fd.n);
  }
  notes.forEach((midi, i) => {
    if (fbSoundReady === 'font' && fbWafPlayer && fbGuitarFont) {
      setTimeout(() => {
        try { fbWafPlayer.queueWaveTable(fbAudioCtx, fbAudioCtx.destination, fbGuitarFont, fbAudioCtx.currentTime, midi, 2.0, 0.75); }
        catch(e) { fbSynthNote(midi, 0); }
      }, i * 55);
    } else { fbSynthNote(midi, i * 0.055); }
  });
}

function fbSynthNote(midi, delay) {
  if (!fbAudioCtx) return;
  const freq = 440 * Math.pow(2, (midi - 69) / 12);
  const t = fbAudioCtx.currentTime + delay;
  const osc = fbAudioCtx.createOscillator();
  const osc2 = fbAudioCtx.createOscillator();
  const gain = fbAudioCtx.createGain();
  const filt = fbAudioCtx.createBiquadFilter();
  osc.type = 'sawtooth'; osc.frequency.value = freq;
  osc2.type = 'triangle'; osc2.frequency.value = freq * 2.005;
  filt.type = 'lowpass';
  filt.frequency.setValueAtTime(5000, t);
  filt.frequency.exponentialRampToValueAtTime(600, t + 0.4);
  osc.connect(filt); osc2.connect(filt); filt.connect(gain); gain.connect(fbAudioCtx.destination);
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.22, t + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.05, t + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);
  osc.start(t); osc2.start(t); osc.stop(t + 2.0); osc2.stop(t + 2.0);
}

// ── CHORD LOGIC ──
function fbGetChord() {
  const key = fbSelNote + '_' + fbSelType;
  const base = FB_CHORD_DATA[key] || FB_CHORD_DATA['C_' + fbSelType] || FB_CHORD_DATA['C_Minor'];
  const shift = FB_NOTES.indexOf(fbSelNote);
  if (shift === 0) return base;
  const c = JSON.parse(JSON.stringify(base));
  c.f = c.f.map(x => ({ ...x, n: x.open ? 0 : Math.max(0, x.n + shift) }));
  return c;
}

// ── UI BUILDERS ──
function fbBuildFretNumbers() {
  const el = document.getElementById('fbFretNumbers');
  el.innerHTML = '';
  for (let i = 0; i < FB_TOTAL_FRETS; i++) {
    const d = document.createElement('div');
    d.className = 'fb-fret-num'; d.textContent = i;
    el.appendChild(d);
  }
}

function fbBuildFretboard() {
  const area = document.getElementById('fbStringsArea');
  area.innerHTML = '';
  const chord = fbGetChord();
  const fmap = {};
  chord.f.forEach(x => { fmap[`${x.s}_${x.n}`] = x; });
  const muted = new Set(chord.m || []);
  const root = FB_NOTES.indexOf(fbSelNote);
  const intervals = (fbSelType==='Minor'||fbSelType==='m7'||fbSelType==='dim'||fbSelType==='dim7')
    ? [0,2,3,5,7,8,10] : [0,2,4,5,7,9,11];
  const scale = new Set(intervals.map(i => (root+i)%12));

  FB_STRINGS.forEach((name, si) => {
    const row = document.createElement('div');
    row.className = 'fb-string-row';

    const lbl = document.createElement('div');
    lbl.className = 'fb-string-label'; lbl.textContent = name;
    row.appendChild(lbl);

    const muteEl = document.createElement('div');
    muteEl.className = 'fb-string-mute'; muteEl.textContent = muted.has(si) ? '✕' : '';
    row.appendChild(muteEl);

    const wrap = document.createElement('div');
    wrap.className = 'fb-string-line-wrap';
    const line = document.createElement('div'); line.className = 'fb-string-line';
    wrap.appendChild(line);

    const cells = document.createElement('div');
    cells.className = 'fb-fret-cells';

    for (let fi = 0; fi < FB_TOTAL_FRETS; fi++) {
      const cell = document.createElement('div');
      cell.className = 'fb-fret-cell' + (fi%2===0 ? ' dark-fret' : '');

      if (si===3 && FB_MARKERS.includes(fi)) {
        const mk = document.createElement('div'); mk.className = 'fb-fret-marker';
        if (fi===12) {
          mk.style.left='calc(50% - 8px)';
          const m2 = document.createElement('div'); m2.className='fb-fret-marker'; m2.style.left='calc(50% + 4px)';
          cell.appendChild(m2);
        }
        cell.appendChild(mk);
      }

      const fd = fmap[`${si}_${fi}`];
      if (fd) {
        const dot = document.createElement('div');
        dot.className = 'fb-note-dot ' + (fd.open ? 'open-dot' : 'finger');
        dot.textContent = fd.fn || '';
        if (fi===0) dot.style.marginLeft='-8px';
        cell.appendChild(dot);
      } else {
        const noteAtFret = (FB_OPEN_MIDI[si]%12 + fi) % 12;
        if (fi>=3 && scale.has(noteAtFret) && !chord.f.some(x=>x.s===si)) {
          const dot = document.createElement('div');
          dot.className = 'fb-note-dot scale';
          cell.appendChild(dot);
        }
      }
      cells.appendChild(cell);
    }
    wrap.appendChild(cells); row.appendChild(wrap); area.appendChild(row);
  });
}

function fbBuildPosBtns() {
  const el = document.getElementById('fbPosBtns'); el.innerHTML='';
  for (let i=1;i<=4;i++) {
    const b=document.createElement('button'); b.className='fb-pos-btn'+(i===fbCurPos?' active':'');
    b.textContent=i; b.onclick=()=>{fbCurPos=i;fbBuildPosBtns();};
    el.appendChild(b);
  }
}

function fbBuildNotes() {
  const el=document.getElementById('fbNoteSelector'); el.innerHTML='';
  FB_NOTES.forEach(n=>{
    const b=document.createElement('button'); b.className='fb-note-btn'+(n===fbSelNote?' active':'');
    b.textContent=n;
    b.onclick=()=>{fbSelNote=n;fbBuildNotes();fbBuildFretboard();fbUpdateTitle();};
    el.appendChild(b);
  });
}

function fbBuildTypes() {
  const el=document.getElementById('fbChordTypeSelector'); el.innerHTML='';
  const list=fbAdvMode?[...FB_CHORD_TYPES,...FB_ADV_TYPES]:FB_CHORD_TYPES;
  list.forEach(t=>{
    const b=document.createElement('button'); b.className='fb-type-btn'+(t===fbSelType?' active':'');
    b.textContent=t;
    b.onclick=()=>{fbSelType=t;fbBuildTypes();fbBuildFretboard();fbUpdateTitle();};
    el.appendChild(b);
  });
}

function fbUpdateTitle() {
  document.getElementById('fbChordName').textContent = fbSelNote + ' ' + fbSelType;
}

// ══════════════════════════════════════════
//  VIDEO MODAL
// ══════════════════════════════════════════

// ─────────────────────────────────────────
//  VIDEO DATA — REPLACE youtubeId VALUES
//  with your actual YouTube video IDs.
//
//  HOW TO GET THE ID:
//  YouTube URL: https://www.youtube.com/watch?v=ABC123XYZ
//  The ID is the part after "v="  →  ABC123XYZ
//
//  Replace each 'youtubeId' value below
//  with your own video ID per chord.
// ─────────────────────────────────────────
const CHORD_VIDEOS = {
  'G':      { src: 'videos/G MAJOR.mp4',  title: 'G Major — Full Lesson' },
  'C':      { src: 'videos/C.mp4',  title: 'C Major — Full Lesson' },
  'D':      { src: 'videos/D.mp4',  title: 'D Major — Full Lesson' },
  'E':      { src: 'videos/E.mp4',  title: 'E Major — Full Lesson' },
  'A':      { src: 'videos/A MAJOR.mp4',  title: 'A Major — Full Lesson' },
  'F':      { src: 'videos/F.mp4',  title: 'F Major — Full Lesson' },
  'Em':     { src: 'videos/E MINOR.mp4',  title: 'E Minor — Full Lesson' },
  'Am':     { src: 'videos/A MINOR.mp4',  title: 'A Minor — Full Lesson' },
  'Dm':     { src: 'videos/D MINOR.mp4',  title: 'D Minor — Full Lesson' },
  'Gm':     { src: 'videos/g_minor.mp4',  title: 'G Minor — Full Lesson' },
  'Bm':     { src: 'videos/Bm.mp4',  title: 'B Minor — Full Lesson' },
  'Cm':     { src: 'videos/C MINOR.mp4',  title: 'C Minor — Full Lesson' },
  'G7':     { src: 'videos/G7.mp4',       title: 'G7 — Full Lesson' },
  'C7':     { src: 'videos/C7.mp4',       title: 'C7 — Full Lesson' },
  'D7':     { src: 'videos/D 7.mp4',       title: 'D7 — Full Lesson' },
  'E7':     { src: 'videos/E7.mp4',       title: 'E7 — Full Lesson' },
  'A7':     { src: 'videos/A 7.mp4',       title: 'A7 — Full Lesson' },
  'B7':     { src: 'videos/B7.mp4',       title: 'B7 — Full Lesson' },
  'Cadd9':  { src: 'videos/Cadd9.mp4',    title: 'Cadd9 — Full Lesson' },
  'Dsus2':  { src: 'videos/Dsus2.mp4',    title: 'Dsus2 — Full Lesson' },
};

function openVm(chord) {
  const video = CHORD_VIDEOS[chord.name] || { src: '', title: chord.label + ' Lesson' };

  document.getElementById('vmChordLabel').textContent = chord.label;

  const player = document.getElementById('vmPlayer');
  if (video.src) {
    player.innerHTML = `
      <video
        controls
        autoplay
        style="width:100%;height:100%;background:#000;display:block;"
        src="${video.src}">
        Your browser does not support the video tag.
      </video>`;
  } else {
    player.innerHTML = `
      <div class="vm-player-placeholder">
        <div class="vm-play-icon">▶</div>
        <div>No video added yet for <strong style="color:#f0ede0">${chord.label}</strong>.<br/>
        I-lagay ang video file sa <code>videos/</code> folder at i-update ang <code>CHORD_VIDEOS</code> sa <code>chord_library.js</code>.</div>
      </div>`;
  }

  document.getElementById('vmYtLink').style.display = 'none';
  document.getElementById('vmBg').classList.add('open');
}

function closeVm() {
  document.getElementById('vmBg').classList.remove('open');
  document.getElementById('vmPlayer').innerHTML = '';
}

function handleVmBgClick(e) {
  if (e.target === document.getElementById('vmBg')) closeVm();
}

// Override the Watch Video button in the chord modal
// to open the video modal instead of going to YouTube
document.addEventListener('DOMContentLoaded', () => {
  const videoBtn = document.getElementById('cmVideoBtn');
  if (videoBtn) {
    videoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentChord) openVm(currentChord);
    });
  }
});