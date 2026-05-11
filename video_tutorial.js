// ── VIDEO DATA ──
// Replace youtubeId with actual YouTube video IDs
const VIDEOS = [
  {
    id: 1,
    title: 'Guitar for Absolute Beginners',
    tag: 'beginner',
    duration: '12:34',
    emoji: '🎸',
    youtubeId: 'BBz-Jyr23M4', // replace with your video ID
    desc: 'The perfect starting point. Learn how to hold the guitar, tune it, and play your first notes.'
  },
  {
    id: 2,
    title: 'How to Read Guitar Tabs',
    tag: 'beginner',
    duration: '8:20',
    emoji: '📄',
    youtubeId: 'aX5KBnXDpCU',
    desc: 'Learn how to read tablature (tabs) so you can play any song you find online.'
  },
  {
    id: 3,
    title: 'C, G, D and Em — 4 Essential Chords',
    tag: 'chords',
    duration: '15:00',
    emoji: '🤚',
    youtubeId: 'OZEKdNBl5OA',
    desc: 'Master these 4 chords and you can play hundreds of popular songs right away.'
  },
  {
    id: 4,
    title: 'Beginner Strumming Patterns',
    tag: 'strumming',
    duration: '10:45',
    emoji: '🥁',
    youtubeId: 'aWAHGIa4AJM',
    desc: 'Learn the most common strumming patterns used in pop, rock, and folk music.'
  },
  {
    id: 5,
    title: 'Am, F, C, G — The Most Popular Progression',
    tag: 'chords',
    duration: '11:22',
    emoji: '🎼',
    youtubeId: 'Qe6xUkpVB60',
    desc: 'This four-chord progression is used in thousands of songs. Learn it and unlock your repertoire.'
  },
  {
    id: 6,
    title: 'Leaving on a Jet Plane — Full Tutorial',
    tag: 'songs',
    duration: '18:10',
    emoji: '✈️',
    youtubeId: 'MDBykpSXsSE',
    desc: 'A perfect beginner song using G, C, and D chords. Includes chords, strumming, and tips.'
  },
  {
    id: 7,
    title: 'Fingerpicking for Beginners',
    tag: 'beginner',
    duration: '14:05',
    emoji: '🎵',
    youtubeId: 'vJLOQQUsFXk',
    desc: 'Introduction to fingerpicking patterns. Start slow and build up speed over time.'
  },
  {
    id: 8,
    title: 'How to Play Barre Chords',
    tag: 'chords',
    duration: '20:30',
    emoji: '💪',
    youtubeId: '0YFlJQHLWlU',
    desc: 'Barre chords unlock the entire fretboard. Learn the technique step by step.'
  },
  {
    id: 9,
    title: 'Knockin on Heavens Door — Tutorial',
    tag: 'songs',
    duration: '9:55',
    emoji: '🎤',
    youtubeId: 'ckVSJgPdR0I',
    desc: 'Classic Bob Dylan song using G, D, Am, and C chords. Great for beginners.'
  },
];

let currentFilter = 'all';

// ── RENDER VIDEOS ──
function renderVideos(filter) {
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? VIDEOS : VIDEOS.filter(v => v.tag === filter);

  list.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.onclick = () => openVmodal(v);
    card.innerHTML = `
      <div class="video-thumb">
        <img
          src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg"
          alt="${v.title}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <div class="video-thumb-placeholder" style="display:none;">${v.emoji}</div>
        <div class="video-play-overlay">
          <div class="video-play-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      </div>
      <div class="video-card-body">
        <div class="video-card-tag">${v.tag.toUpperCase()}</div>
        <div class="video-card-title">${v.title}</div>
        <div class="video-card-meta">
          <span class="video-card-level ${v.tag}">${v.tag}</span>
          <span class="video-card-duration">⏱ ${v.duration}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterVideos(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.vf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderVideos(filter);
}

// ── VIDEO MODAL ──
function openVmodal(video) {
  document.getElementById('vmodalTag').textContent = video.tag.toUpperCase() + ' · ' + video.duration;
  document.getElementById('vmodalTitle').textContent = video.title;
  document.getElementById('vmodalDesc').textContent = video.desc;
  document.getElementById('vmodalPlayer').innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `;
  document.getElementById('vmodalYtBtn').href = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  document.getElementById('vmodalBg').classList.add('open');
}

function closeVmodal() {
  document.getElementById('vmodalBg').classList.remove('open');
  document.getElementById('vmodalPlayer').innerHTML = ''; // stop video
}

function handleVmodalBgClick(e) {
  if (e.target === document.getElementById('vmodalBg')) closeVmodal();
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ──
renderVideos('all');