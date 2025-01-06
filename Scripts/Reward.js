// Script to copy invite link
document.querySelectorAll('.fa-copy').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      navigator.clipboard.writeText(input.value);
      alert('Invite link copied to clipboard!');
    });
});

  