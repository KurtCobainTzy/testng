// ── SONG DATA ──
const SONGS = [
  {
    id: 1,
    title: "Leaving on a Jet Plane",
    artist: "John Denver",
    emoji: "✈️",
    difficulty: "beginner",
    genre: "folk",
    key: "G",
    bpm: 100,
    chords: [
      { name:"G", shape:"320003" },
      { name:"C", shape:"x32010" },
      { name:"D", shape:"xx0232" },
    ],
    strumPattern: "D DU UDU",
    progression: ["G","C","G","D"],
    youtubeId: "MDBykpSXsSE",
    lyrics: `[G]All my bags are [C]packed, I'm ready to [G]go
[G]I'm standin' here [C]outside your [D]door
[G]I hate to wake you [C]up to say good[G]bye [D]

[G]But the dawn is [C]breakin', it's early [G]morn
[G]The taxi's waitin', [C]he's blowin' his [D]horn
[G]Already I'm so [C]lonesome I could [D]die

[G]So kiss me and [C]smile for me
[G]Tell me that you'll [C]wait for me
[G]Hold me like you'll [D]never let me go

[G]'Cause I'm [C]leavin' on a jet [G]plane
[D]Don't know when I'll be back a[G]gain
[G]Oh babe, I [C]hate to [D]go`
  },
  {
    id: 2,
    title: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    emoji: "🚪",
    difficulty: "beginner",
    genre: "rock",
    key: "G",
    bpm: 75,
    chords: [
      { name:"G", shape:"320003" },
      { name:"D", shape:"xx0232" },
      { name:"Am", shape:"x02210" },
      { name:"C", shape:"x32010" },
    ],
    strumPattern: "D D DU",
    progression: ["G","D","Am","G","D","C"],
    youtubeId: "ckVSJgPdR0I",
    lyrics: `[G]Mama, take this [D]badge off of [Am]me
[G]I can't use it [D]anymore [C]
[G]It's gettin' dark, [D]too dark for me to [Am]see
[G]I feel like I'm [D]knockin' on heaven's [C]door

[G]Knock, knock, [D]knockin' on heaven's [Am]door
[G]Knock, knock, [D]knockin' on heaven's [C]door`
  },
  {
    id: 3,
    title: "Let Her Go",
    artist: "Passenger",
    emoji: "🌙",
    difficulty: "beginner",
    genre: "folk",
    key: "G",
    bpm: 105,
    chords: [
      { name:"G", shape:"320003" },
      { name:"D", shape:"xx0232" },
      { name:"Em", shape:"022000" },
      { name:"C", shape:"x32010" },
    ],
    strumPattern: "DU DU DU DU",
    progression: ["G","D","Em","C"],
    youtubeId: "RBumgq5yVrA",
    lyrics: `[G]Well you only need the [D]light when it's burning [Em]low
[C]Only miss the sun when it starts to [G]snow
[G]Only know you love her when you [D]let her go [Em][C]

[G]Only know you've been high when you're [D]feeling low
[Em]Only hate the road when you're [C]missing home
[G]Only know you love her when you [D]let her go
[Em][C]And you let her go`
  },
  {
    id: 4,
    title: "Wonderwall",
    artist: "Oasis",
    emoji: "🧱",
    difficulty: "intermediate",
    genre: "rock",
    key: "Am",
    bpm: 87,
    chords: [
      { name:"Em7", shape:"022033" },
      { name:"G", shape:"320033" },
      { name:"Dsus4", shape:"xx0233" },
      { name:"A7sus4", shape:"x02033" },
      { name:"C", shape:"x32033" },
    ],
    strumPattern: "DU U DU D",
    progression: ["Em7","G","Dsus4","A7sus4"],
    youtubeId: "6hzrDeceEKc",
    lyrics: `[Em7]Today is gonna be the day that they're
[G]gonna throw it back to [Dsus4]you [A7sus4]
[Em7]By now you should've somehow
[G]Realized what you gotta [Dsus4]do [A7sus4]

[Em7]I don't believe that anybody
[G]Feels the way I do a[Dsus4]bout you [A7sus4]now

[C]Backbeat, the word was on the [Dsus4]street
That the [Em7]fire in your heart is [G]out
[C]I'm sure you've heard it all be[Dsus4]fore
But you [Em7]never really had a [G]doubt`
  },
  {
    id: 5,
    title: "Stand By Me",
    artist: "Ben E. King",
    emoji: "🌟",
    difficulty: "beginner",
    genre: "pop",
    key: "A",
    bpm: 120,
    chords: [
      { name:"A", shape:"x02220" },
      { name:"F#m", shape:"244222" },
      { name:"D", shape:"xx0232" },
      { name:"E", shape:"022100" },
    ],
    strumPattern: "D DU UDU",
    progression: ["A","F#m","D","E","A"],
    youtubeId: "hwZNL7QVJjE",
    lyrics: `[A]When the night has come
And the land is [F#m]dark
And the moon is the [D]only light we'll [E]see
[A]No I won't be afraid
Oh I [F#m]won't be afraid
Just as [D]long as you stand, [E]stand by [A]me

So [A]darling, darling stand by [F#m]me
Oh stand by [D]me [E]
Oh [A]stand, stand by [F#m]me
Stand by [D]me [E][A]`
  },
  {
    id: 6,
    title: "Horse With No Name",
    artist: "America",
    emoji: "🐴",
    difficulty: "beginner",
    genre: "folk",
    key: "Em",
    bpm: 112,
    chords: [
      { name:"Em", shape:"022000" },
      { name:"D6", shape:"xx0202" },
    ],
    strumPattern: "D D DU D DU",
    progression: ["Em","D6","Em","D6"],
    youtubeId: "B40N1iCXJU4",
    lyrics: `[Em]On the first part of the [D6]journey
[Em]I was looking at all the [D6]life
[Em]There were plants and birds and [D6]rocks and things
[Em]There was sand and hills and [D6]rings

[Em]The first thing I met was a [D6]fly with a buzz
[Em]And the sky with no [D6]clouds
[Em]The heat was hot and the [D6]ground was dry
[Em]But the air was full of [D6]sound

[Em]I've been through the desert on a [D6]horse with no name
[Em]It felt good to be out of the [D6]rain`
  },
];

let currentFilter = 'all';
let searchQuery = '';

// ── RENDER SONGS ──
function renderSongs() {
  const grid = document.getElementById('songsGrid');
  grid.innerHTML = '';
  let list = SONGS;
  if (currentFilter !== 'all') {
    list = list.filter(s => s.difficulty === currentFilter || s.genre === currentFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(s => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    grid.innerHTML = '<div style="color:#555;font-size:13px;padding:20px 0;">No songs found.</div>';
    return;
  }

  list.forEach(song => {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.onclick = () => openSongModal(song);
    card.innerHTML = `
      <div class="song-card-top">
        <div class="song-emoji">${song.emoji}</div>
        <div class="song-card-info">
          <div class="song-card-title">${song.title}</div>
          <div class="song-card-artist">${song.artist}</div>
        </div>
      </div>
      <div class="song-card-chords">
        ${song.chords.map(c => `<span class="chord-pill">${c.name}</span>`).join('')}
      </div>
      <div class="song-card-footer">
        <span class="song-difficulty ${song.difficulty}">${song.difficulty}</span>
        <span class="song-genre">${song.genre} · Key of ${song.key}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterSongs(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.sf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSongs();
}

function searchSongs() {
  searchQuery = document.getElementById('songSearch').value;
  renderSongs();
}

// ── SONG MODAL ──
function openSongModal(song) {
  document.getElementById('smArtist').textContent = song.artist;
  document.getElementById('smTitle').textContent = song.title;
  document.getElementById('smMeta').textContent = `Key of ${song.key} · ${song.bpm} BPM · ${song.difficulty} · ${song.genre}`;

  // Chords
  document.getElementById('smChordsRow').innerHTML = song.chords.map(c => `
    <div class="sm-chord-box">
      <div class="sm-chord-name">${c.name}</div>
      <div class="sm-chord-shape">${c.shape}</div>
    </div>
  `).join('');

  // Strum pattern
  const strumHTML = song.strumPattern.split('').map(ch => {
    if (ch === 'D') return `<span style="color:#f66e06">D</span>`;
    if (ch === 'U') return `<span style="color:#aaa">U</span>`;
    return `<span style="color:#333"> </span>`;
  }).join('');
  document.getElementById('smStrum').innerHTML = strumHTML;

  // Progression
  const prog = song.progression;
  document.getElementById('smProgression').innerHTML = prog.map((c, i) =>
    `<span class="sm-prog-chord">${c}</span>${i < prog.length-1 ? '<span class="sm-prog-arrow">→</span>' : ''}`
  ).join('');

  // Lyrics - convert [Chord] markers to styled spans
  const lyricsHTML = song.lyrics.replace(/\[([^\]]+)\]/g, '<span class="chord-mark">[$1]</span>');
  document.getElementById('smLyrics').innerHTML = lyricsHTML;

  // YouTube
  document.getElementById('smYtBtn').href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

  document.getElementById('songModalBg').classList.add('open');
}

function closeSongModal() {
  document.getElementById('songModalBg').classList.remove('open');
}

function handleSongBgClick(e) {
  if (e.target === document.getElementById('songModalBg')) closeSongModal();
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ──
renderSongs();