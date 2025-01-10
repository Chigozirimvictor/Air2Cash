// script.js

// Enable Fingerprint Toggle
document.getElementById('enable-fingerprint').addEventListener('change', function () {
  if (this.checked) {
      alert('Fingerprint authentication enabled.');
  } else {
      alert('Fingerprint authentication disabled.');
  }
});

// Hide Balance Toggle
document.getElementById('hide-balance').addEventListener('change', function () {
  if (this.checked) {
      alert('Account balance will be hidden.');
  } else {
      alert('Account balance will be visible.');
  }
});

// Change Password
document.getElementById('change-password').addEventListener('click', function () {
  alert('Are you sure you want to change your password?');
});

// Reset PIN
document.getElementById('reset-pin').addEventListener('click', function () {
  alert('Reset Transaction PIN functionality will be implemented here.');
});

// Terms and Conditions
document.getElementById('terms-conditions').addEventListener('click', function () {
  alert('Redirecting to Terms & Conditions...');
});

// Logout
document.getElementById('log-out').addEventListener('click', function () {
  alert('Click Okay to Logout?.');
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