/* photos.js */
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.pg-item');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(i => i.classList.toggle('hidden', f !== 'all' && i.dataset.cat !== f));
    });
  });
});