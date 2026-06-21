const archives = [
  { id: 'weekly', title: '周报', code: 'A-001', summary: '记录每周的进展、观察、复盘与下一步行动。', line: '先从这一周留下的痕迹开始吧。' },
  { id: 'visual', title: '视觉', code: 'A-002', summary: '收录视觉实验、设计语言和不断演变的画面表达。', line: '这里保存着你看待世界的方式。' },
  { id: 'art', title: '艺术', code: 'A-003', summary: '收藏创作、灵感与那些无法被数据解释的瞬间。', line: '这一卷，更接近感受本身。' }
];

const entrance = document.querySelector('#entrance');
const activation = document.querySelector('#activation');
const archivePage = document.querySelector('#archive');
const backButton = document.querySelector('#backToEntrance');
const bookshelf = document.querySelector('#bookshelf');
const companion = document.querySelector('#companion');
const scene = document.querySelector('.companion-scene');
const detail = document.querySelector('#archiveDetail');
let selectedIndex = 0;
let blinkTimer;
let reports = [];

function escapeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderReports() {
  const reportList = document.querySelector('#reportList');
  const isReportsArchive = archives[selectedIndex]?.id === 'weekly';
  detail.classList.toggle('has-reports', isReportsArchive);
  reportList.hidden = !isReportsArchive;
  if (!isReportsArchive) return;
  if (!reports.length) {
    reportList.innerHTML = '<div class="report-empty">暂无周报，可前往 /admin 新建。</div>';
    return;
  }
  reportList.innerHTML = reports.slice(0, 3).map(report => `
    <div class="report-item">
      <time datetime="${escapeText(report.date)}">${escapeText(report.date)}</time>
      <span title="${escapeText(report.summary)}">${escapeText(report.title)}</span>
    </div>`).join('');
}

async function loadReports() {
  try {
    const response = await fetch('./public/data/reports.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    reports = await response.json();
  } catch (error) {
    console.warn('Reports index is unavailable. Run the site through an HTTP server.', error);
    reports = [];
  }
  renderReports();
}

function renderBooks() {
  bookshelf.innerHTML = archives.map((item, index) => `
    <div class="archive-slot" role="presentation">
      <button class="archive-book" role="option" aria-selected="${index === selectedIndex}" data-index="${index}">
        <span class="book-code">${item.code}</span>
        <i class="book-rule"></i>
        <span class="book-title">${item.title}</span>
        <span class="book-marker" aria-hidden="true"></span>
      </button>
    </div>`).join('');
}

function selectArchive(index, focusBook = false) {
  if (index < 0 || index >= archives.length) return;
  selectedIndex = index;
  const item = archives[index];
  const books = [...bookshelf.querySelectorAll('.archive-book')];
  books.forEach((book, bookIndex) => book.setAttribute('aria-selected', String(bookIndex === index)));
  document.querySelector('#archiveCount').textContent = `${String(index + 1).padStart(2, '0')} / ${String(archives.length).padStart(2, '0')}`;

  detail.classList.add('switching');
  companion.classList.remove('is-turning');
  scene.classList.remove('turning');
  void companion.offsetWidth;
  companion.classList.add('is-turning');
  scene.classList.add('turning');

  window.setTimeout(() => {
    document.querySelector('#detailCode').textContent = item.code;
    document.querySelector('#detailTitle').textContent = item.title;
    document.querySelector('#detailSummary').textContent = item.summary;
    document.querySelector('#companionLine').textContent = item.line;
    renderReports();
    detail.classList.remove('switching');
  }, 260);

  if (focusBook) books[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
}

function scheduleBlink() {
  window.clearTimeout(blinkTimer);
  const delay = 8000 + Math.random() * 7000;
  blinkTimer = window.setTimeout(() => {
    companion.classList.add('is-blinking');
    window.setTimeout(() => companion.classList.remove('is-blinking'), 145);
    scheduleBlink();
  }, delay);
}

function enterArchive() {
  if (entrance.classList.contains('activating')) return;
  entrance.classList.add('activating');
  window.setTimeout(() => {
    archivePage.classList.add('is-visible');
    archivePage.setAttribute('aria-hidden', 'false');
    entrance.classList.add('is-leaving');
    scheduleBlink();
  }, 720);
}

function leaveArchive() {
  window.clearTimeout(blinkTimer);
  entrance.classList.remove('is-leaving', 'activating');
  archivePage.classList.remove('is-visible');
  archivePage.setAttribute('aria-hidden', 'true');
}

function createParticles(canvas, count, color) {
  const context = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dots = [];

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    dots = Array.from({ length: count }, () => ({ x: Math.random()*width, y: Math.random()*height, r: Math.random()*1.2+.25, vx: Math.random()*.055+.01, vy: -(Math.random()*.025+.003), a: Math.random()*.3+.06, p: Math.random()*6.28 }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    dots.forEach(dot => {
      dot.x += dot.vx; dot.y += dot.vy; dot.p += .008;
      if (dot.x > width + 4) dot.x = -4;
      if (dot.y < -4) dot.y = height + 4;
      context.beginPath();
      context.fillStyle = `rgba(${color}, ${dot.a * (.72 + Math.sin(dot.p)*.28)})`;
      context.arc(dot.x, dot.y, dot.r, 0, Math.PI*2);
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

bookshelf.addEventListener('click', event => {
  const book = event.target.closest('.archive-book');
  if (book) selectArchive(Number(book.dataset.index), true);
});

bookshelf.addEventListener('wheel', event => {
  if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
  event.preventDefault();
  bookshelf.scrollLeft += event.deltaY;
}, { passive: false });

bookshelf.addEventListener('keydown', event => {
  if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
  const next = forward ? Math.min(selectedIndex + 1, archives.length - 1) : Math.max(selectedIndex - 1, 0);
  selectArchive(next, true);
  bookshelf.querySelectorAll('.archive-book')[next].focus();
});

activation.addEventListener('click', enterArchive);
backButton.addEventListener('click', leaveArchive);
renderBooks();
selectArchive(0);
createParticles(document.querySelector('#entranceParticles'), 24, '245,225,196');
createParticles(document.querySelector('#archiveParticles'), 20, '212,138,69');
loadReports();
