/* ══════════════════════════════════════
   STELLAR DIVIDE — MUSIC PAGE (music.js)
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tracklist-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const album = btn.dataset.album;
      const hidden = btn.closest('.ai-info').querySelectorAll('.show-more');
      const isOpen = btn.dataset.open === 'true';
      hidden.forEach(row => row.classList.toggle('visible', !isOpen));
      btn.dataset.open = !isOpen;
      btn.textContent = isOpen ? '+ Show all tracks' : '− Hide tracks';
    });
  });
});