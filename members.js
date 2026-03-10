/* members.js */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('fanclub-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.innerHTML = '<p style="font-family:var(--font-serif);font-style:italic;font-size:1.1rem;color:var(--grey-1);text-align:center;padding:20px 0;">Welcome to The Inner Circle. Check your inbox.</p>';
    });
  }
});