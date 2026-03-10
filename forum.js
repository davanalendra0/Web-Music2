/* forum.js */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('new-thread-btn')?.addEventListener('click', () => {
    alert('Please log in or join the fan club to post a new thread.');
  });
  document.querySelectorAll('.fa-section ul li').forEach(li => {
    li.addEventListener('click', () => {
      li.closest('ul').querySelectorAll('li').forEach(l => l.classList.remove('active'));
      li.classList.add('active');
    });
  });
});