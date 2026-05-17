// ── VIDEO DATA ──
// Put your MP4 files in a "videos/" folder next to your HTML file
// Then reference them as 'videos/yourfile.mp4'
// DO NOT use full Windows paths like C:\Users\... — browsers cannot access those
const VIDEOS = [
  {
    id: 1,
    title: 'Guitar for Absolute Beginners',
    tag: 'beginner',
    duration: '12:34',
    emoji: '🎸',
    videoSrc: 'videos/WONDERWALL.mp4',
    desc: 'The perfect starting point. Learn how to hold the guitar, tune it, and play your first notes.'
  },
  {
    id: 2,
    title: 'How to Read Guitar Tabs',
    tag: 'beginner',
    duration: '8:20',
    emoji: '📄',
    videoSrc: 'videos/guitar-tabs.mp4',
    desc: 'Learn how to read tablature (tabs) so you can play any song you find online.'
  },
  {
    id: 3,
    title: 'C, G, D and Em — 4 Essential Chords',
    tag: 'chords',
    duration: '15:00',
    emoji: '🤚',
    videoSrc: 'videos/cgdem-chords.mp4',
    desc: 'Master these 4 chords and you can play hundreds of popular songs right away.'
  },
  {
    id: 4,
    title: 'Beginner Strumming Patterns',
    tag: 'strumming',
    duration: '10:45',
    emoji: '🥁',
    videoSrc: 'videos/strumming-patterns.mp4',
    desc: 'Learn the most common strumming patterns used in pop, rock, and folk music.'
  },
  {
    id: 5,
    title: 'Am, F, C, G — The Most Popular Progression',
    tag: 'chords',
    duration: '11:22',
    emoji: '🎼',
    videoSrc: 'videos/TUTU.mp4',
    desc: 'This four-chord progression is used in thousands of songs. Learn it and unlock your repertoire.'
  },
  {
    id: 6,
    title: 'Leaving on a Jet Plane — Full Tutorial',
    tag: 'songs',
    duration: '18:10',
    emoji: '✈️',
    videoSrc: 'videos/leaving-on-a-jet-plane.mp4',
    desc: 'A perfect beginner song using G, C, and D chords. Includes chords, strumming, and tips.'
  },
  {
    id: 7,
    title: 'Fingerpicking for Beginners',
    tag: 'beginner',
    duration: '14:05',
    emoji: '🎵',
    videoSrc: 'videos/TUTS 3.mp4',
    desc: 'Introduction to fingerpicking patterns. Start slow and build up speed over time.'
  },
  {
    id: 8,
    title: 'How to Play Barre Chords',
    tag: 'chords',
    duration: '20:30',
    emoji: '💪',
    videoSrc: 'videos/TUTS 2.mp4',
    desc: 'Barre chords unlock the entire fretboard. Learn the technique step by step.'
  },
  {
    id: 9,
    title: 'Knockin on Heavens Door — Tutorial',
    tag: 'songs',
    duration: '9:55',
    emoji: '🎤',
    videoSrc: 'videos/knockin-on-heavens-door.mp4',
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
        <div class="video-thumb-placeholder" style="display:flex;">${v.emoji}</div>
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

  // Use HTML5 <video> instead of YouTube iframe
  document.getElementById('vmodalPlayer').innerHTML = `
    <video
      src="${video.videoSrc}"
      controls
      autoplay
      style="width:100%; height:100%; background:#000;">
      Your browser does not support the video tag.
    </video>
  `;

  // Update the button to link directly to the video file (download/open)
  const ytBtn = document.getElementById('vmodalYtBtn');
  if (ytBtn) {
    ytBtn.href = video.videoSrc;
    ytBtn.textContent = '📥 Open Video File';
    ytBtn.removeAttribute('target'); // open in same tab, not YouTube
  }

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