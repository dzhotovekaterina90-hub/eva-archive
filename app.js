const archives = [
  { id: 'weekly', title: '周报', code: 'A-001', summary: '记录每周的进展、观察、复盘与下一步行动。', line: '先从这一周留下的痕迹开始吧。' },
  { id: 'visual', title: '视觉', code: 'A-002', summary: '收录视觉实验、设计语言和不断演变的画面表达。', line: '这里保存着你看待世界的方式。' },
  { id: 'art', title: '艺术', code: 'A-003', summary: '收藏创作、灵感与那些无法被数据解释的瞬间。', line: '这一卷，更接近感受本身。' }
];

const demoReport = {
  slug: 'week-25',
  code: 'A-025',
  title: 'WEEK 25',
  date: '2026-06-21',
  type: 'WEEKLY REPORT',
  author: 'EVA',
  tags: ['GROWTH', 'ARCHIVE', 'WEEKLY'],
  summary: '在混乱的信息中，继续搭建能够长期复利的增长系统。',
  body: `# Week 25

这一周没有宏大的结论，只有几条逐渐变得清晰的轨迹。比起追赶即时流量，我更在意那些可以留下、可以复用、也可以在下一轮继续生长的结构。

网站的入口、档案馆与内容阅读室开始形成一条完整路径。它不再只是几个页面，而像一座有方向感的空间：从远处看见建筑，进入档案馆挑选记录，最后在安静的光线里读完一份被保存下来的文本。

## 本周记录

内容系统完成了第一轮闭环。周报以 Markdown 保存，图片进入 uploads，构建脚本把内容整理成前台可读取的索引。发布不再依赖手动修改页面，而是一次写作、一次保存、一次自动部署。

视觉上，我放弃了常见的作品集和控制台语言。这里不需要证明效率，也不需要制造信息密度。档案应该有重量，阅读应该有停顿，用户应该感觉自己正在接触一件留下来的东西。

## 观察

真正困难的并不是增加更多功能，而是持续删除那些破坏氛围的东西：过亮的边框、过多的标签、像按钮一样的档案、像后台一样的内容区。每删掉一层界面感，空间就更接近它原本该有的样子。

同时，艺术表达不能牺牲可读性。场景负责建立情绪，档案负责承载内容。讲台和书必须足够大，文字必须在第一眼就能被阅读。环境只能托住它，不能抢走它。

## 下一步

下一轮会继续完善真实内容的接入，让每份周报、项目和实验都有稳定的 slug。翻页会保持克制，灰尘与呼吸感也只作为空间的微小证据存在。

我希望这座档案馆最终保存的不是漂亮页面，而是一段长期构建过程的真实痕迹。多年以后回来看，仍然能知道当时在想什么、验证什么，以及为什么决定继续走下去。

## 留给下一周

需要继续观察的，是内容与空间之间的节奏。每份记录不必很长，但它应该有足够的上下文，让一个陌生读者也能理解问题从哪里开始。项目档案会保存决策，实验档案会保存假设和结果，周报则负责把这些分散的证据重新连成时间线。

自动化同样需要保持克制。它应该减少重复劳动，却不能让记录失去人的判断。真正重要的部分仍然要亲自写下：什么发生了，为什么发生，哪些判断已经被证伪，以及下一次准备怎样改变行动。

当这些记录逐渐积累，档案馆才会真正拥有意义。它不依赖某一次发布，也不依赖某一个平台，而是成为一套可以迁移、可以检索、可以被未来继续阅读的个人知识遗迹。

## 保存原则

第一，记录事实与判断的边界。数据告诉我发生了什么，解释则需要注明假设，避免把一次偶然结果写成确定规律。第二，保留失败过程。被放弃的方向往往比成功截图更有价值，因为它能提醒未来的自己哪些道路已经走过。第三，让文件保持开放格式。Markdown、JSON 和普通图片并不华丽，却足够稳定，也更容易在新的工具中继续使用。

最后，为每一份档案留下明确的日期、编号和入口。秩序不是为了把创作变成表格，而是让时间过去之后，仍然能够重新找到当时的现场。这里保存的每一页，都应该是一块可以被下一次行动踩住的石头。

这套原则也会影响接下来的视觉工作。背景可以继续变得丰富，但阅读层级不会再后退。光束负责指向档案，废墟负责提供尺度，纸张负责承载文字。所有动画都应该在用户开始阅读之后安静下来，不要求注意，也不重复表演。

下一周真正要验证的，是第一批真实档案进入之后，这个结构是否仍然自然。只有当上传、部署、选择、阅读与返回都不需要解释时，这座空间才算真正完成了第一轮建造。`
};

const demoVisual = {
  slug: 'visual-study-01',
  code: 'A-101',
  title: 'VISUAL STUDY 01',
  date: '2026-06-22',
  type: 'VISUAL RECORD',
  author: 'EVA',
  tags: ['VISUAL', 'ATMOSPHERE'],
  summary: '关于光线、尺度与档案空间的第一份视觉记录。',
  body: `# Visual Study 01

这份记录保存三级阅读室的视觉原则：环境提供尺度，光线指向内容，打开的档案始终是画面的阅读中心。

单一光源从破损穹顶落下，让讲台和纸页自然成为视线终点。废墟不承担叙事说明，它只需要留下时间、距离与安静感。

## 视觉边界

避免现代面板、发光边框和密集状态信息。材质来自旧石、磨损木材、暗铜与纸张；动画保持缓慢，只让空间拥有轻微生命感。

后续视觉实验会继续记录构图、色温、字体与内容密度的变化。每次调整都应优先回答同一个问题：用户是否仍能在第一眼开始阅读。`
};

const demoArt = {
  slug: 'art-fragment-01',
  code: 'A-201',
  title: 'ART FRAGMENT 01',
  date: '2026-06-22',
  type: 'ART RECORD',
  author: 'EVA',
  tags: ['ART', 'FRAGMENT'],
  summary: '一段关于遗迹、记忆与保存行为的艺术档案。',
  body: `# Art Fragment 01

档案馆不是为了冻结过去，而是让某些尚未完成的想法能够穿过时间。纸页上的痕迹并不完整，它们更像一组等待未来继续回答的问题。

在这座虚构的遗迹中，孤独并不等于绝望。穹顶已经坍塌，但光仍然会进入；文明留下废墟，也留下可以被重新阅读的记录。

## 保存

艺术档案会收纳图像、片段、灵感和无法被数据解释的瞬间。它不追求统一结论，只保留创作发生时的温度。

当一份记录被再次打开，它便不再只是过去的遗物，而成为此刻与未来之间的一次安静对话。`
};

const demoRecords = {
  weekly: demoReport,
  visual: demoVisual,
  art: demoArt
};

const archiveCollections = {
  weekly: ['reports'],
  visual: ['visual', 'writing'],
  art: ['art', 'writing']
};

const entrance = document.querySelector('#entrance');
const activation = document.querySelector('#activation');
const archivePage = document.querySelector('#archive');
const readingChamber = document.querySelector('#readingChamber');
const backButton = document.querySelector('#backToEntrance');
const bookshelf = document.querySelector('#bookshelf');
const companion = document.querySelector('#companion');
const scene = document.querySelector('.companion-scene');
const detail = document.querySelector('#archiveDetail');
const reportList = document.querySelector('#reportList');
const archiveVolume = document.querySelector('#archiveVolume');

let selectedIndex = 0;
let blinkTimer;
let introTimer;
let recordsByCollection = {};
let contentEntries = Object.values(demoRecords);
let activeRecord = null;
let readerPages = [];
let readerPageIndex = 0;

function escapeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function displayDate(value) {
  return String(value || 'DATE UNKNOWN').replaceAll('-', '.');
}

function recordCode(record, index = 0) {
  if (record.code) return record.code;
  const number = String(record.slug || '').match(/\d+/)?.[0];
  return `A-${String(number || index + 1).padStart(3, '0')}`;
}

function normalizeRecord(record, collection, index) {
  return {
    ...record,
    collection,
    slug: record.slug || `record-${index + 1}`,
    code: recordCode(record, index),
    title: record.title || 'UNTITLED RECORD',
    date: record.date || '',
    type: String(record.type || collection || 'ARCHIVE RECORD').replaceAll('-', ' ').toUpperCase(),
    author: record.author || 'EVA',
    tags: Array.isArray(record.tags) ? record.tags : [],
    body: record.body || record.summary || 'This record contains no recovered text.'
  };
}

function recordsForArchive(archiveId) {
  const collections = archiveCollections[archiveId] || [];
  const seen = new Set();
  const records = collections
    .flatMap(collection => recordsByCollection[collection] || [])
    .filter(record => {
      if (seen.has(record.slug)) return false;
      seen.add(record.slug);
      return true;
    });
  return records.length ? records.slice(0, 3) : [demoRecords[archiveId]];
}

function getCurrentArchiveRecord() {
  const archiveId = archives[selectedIndex]?.id;
  const records = recordsForArchive(archiveId);
  return records[0] || demoRecords[archiveId] || demoReport;
}

function openCurrentArchive() {
  openReader(getCurrentArchiveRecord());
}

function renderRecords() {
  const archiveId = archives[selectedIndex]?.id;
  const records = recordsForArchive(archiveId);
  detail.classList.add('has-reports');
  reportList.hidden = false;
  reportList.setAttribute('aria-label', `${archives[selectedIndex]?.title || '档案'}内容`);
  reportList.innerHTML = records.map(record => `
    <button class="record-item" type="button" data-slug="${escapeText(record.slug)}">
      <time datetime="${escapeText(record.date)}">${escapeText(displayDate(record.date))}</time>
      <span title="${escapeText(record.summary)}">${escapeText(record.title)}</span>
      <b aria-hidden="true">READ →</b>
    </button>`).join('');
}

async function loadContentCollections() {
  const collections = ['reports', 'visual', 'writing', 'art', 'projects', 'experiments'];
  const loaded = await Promise.all(collections.map(async collection => {
    try {
      const response = await fetch(`/data/${collection}.json`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const records = await response.json();
      return [collection, records.map((record, index) => normalizeRecord(record, collection, index))];
    } catch (error) {
      console.info(`${collection} index is unavailable.`, error.message);
      return [collection, []];
    }
  }));

  recordsByCollection = Object.fromEntries(loaded);
  const realRecords = Object.values(recordsByCollection).flat();
  const demoSlugs = new Set(Object.values(demoRecords).map(record => record.slug));
  contentEntries = [...Object.values(demoRecords), ...realRecords.filter(record => !demoSlugs.has(record.slug))];
  renderRecords();
  openRouteFromLocation();
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
    renderRecords();
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

function paginateText(source, targetLength = 680) {
  const blocks = String(source || '').trim().split(/\n\s*\n/).filter(Boolean);
  const pages = [];
  let page = '';

  blocks.forEach(block => {
    const pieces = block.length > targetLength
      ? block.match(new RegExp(`.{1,${targetLength}}(?:[。！？.!?]|$)`, 'gs')) || [block]
      : [block];
    pieces.forEach(piece => {
      if (page && page.length + piece.length > targetLength + 180) {
        pages.push(page.trim());
        page = '';
      }
      page += `${page ? '\n\n' : ''}${piece.trim()}`;
    });
  });
  if (page) pages.push(page.trim());
  return pages.length ? pages : ['This record contains no recovered text.'];
}

function inlineMarkdown(value) {
  return escapeText(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function renderMarkdown(source) {
  const lines = source.split('\n');
  const html = [];
  let listOpen = false;
  const closeList = () => {
    if (listOpen) html.push('</ul>');
    listOpen = false;
  };

  lines.forEach(line => {
    const text = line.trim();
    if (!text) return;
    if (text.startsWith('- ')) {
      if (!listOpen) html.push('<ul>');
      listOpen = true;
      html.push(`<li>${inlineMarkdown(text.slice(2))}</li>`);
      return;
    }
    closeList();
    if (text.startsWith('### ')) html.push(`<h3>${inlineMarkdown(text.slice(4))}</h3>`);
    else if (text.startsWith('## ')) html.push(`<h2>${inlineMarkdown(text.slice(3))}</h2>`);
    else if (text.startsWith('# ')) html.push(`<h2>${inlineMarkdown(text.slice(2))}</h2>`);
    else html.push(`<p>${inlineMarkdown(text)}</p>`);
  });
  closeList();
  return html.join('');
}

function updateReaderPage() {
  document.querySelector('#readerBody').innerHTML = renderMarkdown(readerPages[readerPageIndex]);
  document.querySelector('#pageIndicator').textContent = `Page ${readerPageIndex + 1} / ${readerPages.length}`;
  document.querySelector('#readerFolio').textContent = String(readerPageIndex + 1).padStart(2, '0');
  document.querySelector('#previousPage').disabled = readerPageIndex === 0;
  document.querySelector('#nextPage').disabled = readerPageIndex === readerPages.length - 1;
}

function setReaderMetadata(record) {
  const date = displayDate(record.date);
  const code = record.code || 'A-000';
  document.querySelector('#readerTopCode').textContent = `ARCHIVE ${code}`;
  document.querySelector('#readerTopTitle').textContent = record.title;
  document.querySelector('#readerTopDate').textContent = date;
  document.querySelector('#readerTopType').textContent = record.type;
  document.querySelector('#readerCode').textContent = code;
  document.querySelector('#readerTitle').textContent = record.title;
  document.querySelector('#readerDate').textContent = date;
  document.querySelector('#readerAuthor').textContent = record.author;
  document.querySelector('#readerType').textContent = record.type;
  document.querySelector('#readerTags').innerHTML = record.tags.map(tag => `<span>${escapeText(tag)}</span>`).join('');
  document.querySelector('#introCode').textContent = `ARCHIVE ${code}`;
  document.querySelector('#introType').textContent = record.type;
  document.querySelector('#introDate').textContent = date;
}

function openReader(record, pushRoute = true) {
  const safeRecord = record || demoReport;
  window.clearTimeout(blinkTimer);
  window.clearTimeout(introTimer);
  activeRecord = normalizeRecord(safeRecord, safeRecord.collection || 'reports', 0);
  readerPages = paginateText(activeRecord.body);
  readerPageIndex = 0;
  setReaderMetadata(activeRecord);
  updateReaderPage();

  archivePage.classList.remove('is-visible');
  archivePage.setAttribute('aria-hidden', 'true');
  entrance.classList.add('is-leaving');
  readingChamber.classList.remove('is-revealed');
  readingChamber.classList.add('is-visible', 'is-intro');
  readingChamber.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-reading');
  window.scrollTo(0, 0);

  if (pushRoute && location.pathname !== `/archive/${activeRecord.slug}`) {
    history.pushState({ slug: activeRecord.slug }, '', `/archive/${encodeURIComponent(activeRecord.slug)}`);
  }

  introTimer = window.setTimeout(() => {
    readingChamber.classList.remove('is-intro');
    readingChamber.classList.add('is-revealed');
  }, 1500);
}

function closeReader(updateRoute = true) {
  window.clearTimeout(introTimer);
  readingChamber.classList.remove('is-visible', 'is-intro', 'is-revealed');
  readingChamber.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-reading');
  archivePage.classList.add('is-visible');
  archivePage.setAttribute('aria-hidden', 'false');
  entrance.classList.add('is-leaving', 'activating');
  activeRecord = null;
  scheduleBlink();
  if (updateRoute && location.pathname.startsWith('/archive/')) history.pushState({}, '', '/');
}

function turnPage(direction) {
  const nextIndex = readerPageIndex + direction;
  if (nextIndex < 0 || nextIndex >= readerPages.length || archiveVolume.classList.contains('is-turning-page')) return;
  archiveVolume.classList.add('is-turning-page', direction > 0 ? 'turn-forward' : 'turn-backward');
  window.setTimeout(() => {
    readerPageIndex = nextIndex;
    updateReaderPage();
  }, 190);
  window.setTimeout(() => archiveVolume.classList.remove('is-turning-page', 'turn-forward', 'turn-backward'), 430);
}

function openRouteFromLocation() {
  const match = location.pathname.match(/^\/archive\/([^/]+)\/?$/);
  if (!match) return;
  const slug = decodeURIComponent(match[1]);
  const record = contentEntries.find(item => item.slug === slug) || demoReport;
  openReader(record, false);
}

function createParticles(canvas, count, color) {
  if (!canvas) return;
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
    dots = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.2 + .25, vx: Math.random() * .055 + .01, vy: -(Math.random() * .025 + .003), a: Math.random() * .3 + .06, p: Math.random() * 6.28 }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    dots.forEach(dot => {
      dot.x += dot.vx; dot.y += dot.vy; dot.p += .008;
      if (dot.x > width + 4) dot.x = -4;
      if (dot.y < -4) dot.y = height + 4;
      context.beginPath();
      context.fillStyle = `rgba(${color}, ${dot.a * (.72 + Math.sin(dot.p) * .28)})`;
      context.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
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
  if (!book) return;

  const index = Number(book.dataset.index);
  selectArchive(index, true);

  window.setTimeout(() => {
    openCurrentArchive();
  }, 320);
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

reportList.addEventListener('click', event => {
  const item = event.target.closest('.record-item');
  if (!item) return;
  const archiveId = archives[selectedIndex]?.id;
  const record = contentEntries.find(entry => entry.slug === item.dataset.slug)
    || demoRecords[archiveId]
    || demoReport;
  openReader(record);
});

document.querySelector('#openCurrentArchive').addEventListener('click', openCurrentArchive);
document.querySelector('#readerBack').addEventListener('click', () => closeReader());
document.querySelector('#returnArchive').addEventListener('click', () => closeReader());
document.querySelector('#previousPage').addEventListener('click', () => turnPage(-1));
document.querySelector('#nextPage').addEventListener('click', () => turnPage(1));
activation.addEventListener('click', enterArchive);
backButton.addEventListener('click', leaveArchive);
window.addEventListener('popstate', () => {
  if (location.pathname.startsWith('/archive/')) openRouteFromLocation();
  else if (readingChamber.classList.contains('is-visible')) closeReader(false);
});

renderBooks();
selectArchive(0);
createParticles(document.querySelector('#entranceParticles'), 24, '245,225,196');
createParticles(document.querySelector('#archiveParticles'), 20, '212,138,69');
createParticles(document.querySelector('#readerParticles'), 42, '226,199,155');
loadContentCollections();
