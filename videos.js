/* ══════════════════════════════════════
   STELLAR DIVIDE — VIDEOS (videos.js)
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(c => {
        c.classList.toggle('hidden', filter !== 'all' && c.dataset.category !== filter);
      });
    });
  });
});