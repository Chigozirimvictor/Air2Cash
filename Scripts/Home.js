// To enable the amount to open and close when the eye icon is clicked
document.querySelector('.eye-icon').addEventListener('click', () => {
  const balance = document.querySelector('.balance');
  balance.textContent = balance.textContent === 'N10,000.00' ? '••••••' : 'N10,000.00';
});

// To enable the footer links to change color when clicked
document.querySelectorAll('.footer-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    document.querySelectorAll('.footer-link').forEach((el) => {
      el.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// To enable the notifications button to change color when clicked  
function toggleColor() {
  const button = document.querySelector('.notifications-btn');
  button.classList.toggle('clicked');
  setTimeout(() => {
      button.classList.remove('clicked');
  }, 500);
}

  