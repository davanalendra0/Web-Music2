/* ══════════════════════════════════════
   STELLAR DIVIDE — NEWS PAGE (news.js)
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Filter system ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      articles.forEach(article => {
        if (filter === 'all' || article.dataset.category === filter) {
          article.classList.remove('hidden');
        } else {
          article.classList.add('hidden');
        }
      });
    });
  });

  // ── Load more (simulated) ──
  const loadBtn = document.getElementById('load-more');
  let clicked = 0;
  if (loadBtn) {
    loadBtn.addEventListener('click', () => {
      clicked++;
      loadBtn.textContent = 'Loading...';
      loadBtn.disabled = true;
      setTimeout(() => {
        if (clicked >= 2) {
          loadBtn.textContent = 'No More Articles';
        } else {
          loadBtn.textContent = 'Load More';
          loadBtn.disabled = false;
        }
      }, 800);
    });
  }

});