const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener(
  'submit',
  event => {
    event.preventDefault();
    fetchSecretKeyAndPay();
  },
  false
);

function fetchSecretKeyAndPay() {
  const id = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token"); // Retrieve the token from session storage

  if (!id || !token) {
    console.error("User ID or token is missing in session storage");
    showSweetAlert('User ID and token are required for the transaction', false);
    return;
  }

  const amount = parseFloat($("#amount").val().trim());

  $.ajax({
    url: 'https://testing1-xpjd.onrender.com/api/deposits/getKey',
    type: 'POST',
    headers: {
      'Authorization': `Bearer ${token}` // Add Authorization header with Bearer token
    },
    data: {
      user_id: id, // Matches backend key
      amount: amount, // Ensure amount is sent as a numbe
    },
  
    success: function (data) {
      if (data.result === 'success') {
        const publicKey = atob(data.publicKey);
        payWithPaystack(data.amount, data.email, publicKey);
      } else {
        console.error("Failed to fetch secret key:", data.message);
        showSweetAlert('Failed to fetch secret key. Please try again', false);
      }
    },
    error: function (xhr, status, error) {
      console.error('Error fetching secret key:', error);
      showSweetAlert('An error occurred during the transaction', false);
    }
  });
}

function payWithPaystack(amount, email, publicKey) {
  let handler = PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: amount * 100,
    ref: 'VS' + Math.floor(Math.random() * 1000000000 + 1),
    onClose: () => {
      alert('Window closed.');
    },
    callback: response => {
      let reference = response.reference;

      save(reference, amount);
      clearForm();
    }
  });

  handler.openIframe();
}

function showSweetAlert(message, success) {
  if (success) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }
}

function clearForm() {
  paymentForm.reset();
}

function home() {
  window.location = '../home/index.php';
}

function save(reference, amount) {
  const id = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token");

  if (!id || !reference || !amount || !token) {
    console.error("User ID, reference, amount, or token is missing");
    showSweetAlert('User ID, reference, amount, and token are required for this transaction', false);
    return;
  }

  $.ajax({
    url: 'https://testing1-xpjd.onrender.com/api/deposits/',
    type: 'POST',
    headers: {
      'Authorization': `Bearer ${token}` // Add Authorization header with Bearer token
    },
    data: {
      user_id: id,
      reference: reference,
      amount: amount
    },
    success: function (data) {
      if (data.result === 'success') {
        showSweetAlert('Funding successful!', true);
        // Additional logic if needed after successful payment
      } else {
        console.error("Error response from server:", data);
        showSweetAlert(data.message || 'Funding failed. Please try again.', false);
      }
    },
    error: function (xhr, status, error) {
      console.error('Error processing payment:', error);
      showSweetAlert('An error occurred during the transaction', false);
    }
  });
}
