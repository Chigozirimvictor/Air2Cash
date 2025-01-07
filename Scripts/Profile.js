// To enable the footer links to change color when clicked
document.querySelectorAll('.footer-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.footer-link').forEach((el) => {
        el.classList.remove('active');
      });
      link.classList.add('active');
    });
  });