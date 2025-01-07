// Script to copy invite link
document.querySelectorAll('.fa-copy').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      navigator.clipboard.writeText(input.value);
      alert('Invite link copied to clipboard!');
    });
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