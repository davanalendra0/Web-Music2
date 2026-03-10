/* ══════════════════════════════════════
   STELLAR DIVIDE — SHARED LAYOUT JS
   Injects header + footer into all pages
══════════════════════════════════════ */

const PAGES = [
  { label: 'News',    href: 'news.html' },
  { label: 'Music',   href: 'music.html' },
  { label: 'Videos',  href: 'videos.html' },
  { label: 'Tour',    href: 'tour.html' },
  { label: 'Photos',  href: 'photos.html' },
  { label: 'Members', href: 'members.html' },
  { label: 'Forum',   href: 'forum.html' },
  { label: 'Merch',   href: 'merch.html' },
];

function buildHeader() {
  const current = location.pathname.split('/').pop() || 'index.html';

  const navLinks = PAGES.map(p => {
    const active = current === p.href ? ' active' : '';
    return `<a href="${p.href}" class="nav-link${active}">${p.label}</a>`;
  }).join('');

  const mobileLinks = PAGES.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  const el = document.getElementById('site-header');
  el.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="site-logo">Stellar Divide</a>
      <nav class="header-nav">${navLinks}</nav>
      <div class="header-right">
        <a href="#" class="h-link">Login</a>
        <a href="members.html" class="btn-fanclub">Fan Club</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <a href="members.html">Join Fan Club →</a>
    </div>
  `;

  // Sticky scroll
  window.addEventListener('scroll', () => {
    el.classList.toggle('scrolled', window.scrollY > 8);
  });

  // Mobile toggle
  document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('mobile-nav').classList.toggle('open');
  });
}

function buildFooter() {
  const el = document.getElementById('site-footer');
  el.innerHTML = `
    <div class="footer-grid">
      <div class="f-brand">
        <a href="index.html" class="f-logo">Stellar Divide</a>
        <p>Alternative rock from Manchester, UK.<br>Forging sound out of chaos since 2017.</p>
        <div class="f-socials">
          <a href="#">Instagram</a>
          <a href="#">Spotify</a>
          <a href="#">YouTube</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div class="f-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="news.html">News</a></li>
          <li><a href="music.html">Music</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="photos.html">Photos</a></li>
          <li><a href="tour.html">Tour</a></li>
        </ul>
      </div>
      <div class="f-col">
        <h5>Community</h5>
        <ul>
          <li><a href="members.html">Members</a></li>
          <li><a href="forum.html">Forum</a></li>
          <li><a href="members.html">Fan Club</a></li>
          <li><a href="merch.html">Merch</a></li>
        </ul>
      </div>
      <div class="f-col">
        <h5>Info</h5>
        <ul>
          <li><a href="#">Press</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Stellar Divide. All Rights Reserved.</p>
      <p>Made with noise and patience.</p>
    </div>
  `;
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  buildHeader();
  buildFooter();
  initReveal();
});