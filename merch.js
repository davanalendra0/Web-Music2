/* merch.js */
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.merch-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f));
    });
  });

  document.querySelectorAll('.mc-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.textContent = '✓ Added';
      btn.style.background = '#1a1a1a';
      btn.style.color = '#f4f4f4';
      setTimeout(() => {
        btn.textContent = 'Quick Add';
        btn.style.background = '';
        btn.style.color = '';
      }, 1800);
    });
  });
});