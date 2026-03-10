/* ══════════════════════════════════════
   STELLAR DIVIDE — HOMEPAGE (script.js)
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // Stagger reveal for tour rows
  const tourRows = document.querySelectorAll('.ht-row');
  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Array.from(tourRows).forEach((row, i) => {
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
          }, i * 65);
        });
        rowObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  tourRows.forEach(row => {
    row.style.opacity = '0';
    row.style.transform = 'translateY(16px)';
    row.style.transition = 'opacity 0.55s ease, transform 0.55s ease, padding-left 0.28s ease, background 0.28s ease';
  });

  const tourSection = document.getElementById('home-tour');
  if (tourSection) rowObserver.observe(tourSection);

  // Parallax deco text on scroll
  const deco = document.querySelector('.hero-deco');
  if (deco) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      deco.style.transform = `translateY(${y * 0.15}px)`;
    }, { passive: true });
  }

});