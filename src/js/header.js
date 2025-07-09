document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
      toggleMenu(false);
    });
  });

  function toggleMenu(show) {
    menuBtn.style.display = show ? 'none' : 'block';
    closeMenu.style.display = show ? 'block' : 'none';
    backdrop.classList.toggle('show', show);
  }

  menuBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenu?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });
});
