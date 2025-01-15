const paymentForm = document.getElementById('paymentForm')
paymentForm.addEventListener(
  'submit',
  event => {
    event.preventDefault()
    fetchSecretKeyAndPay()
  },
  false
)

function fetchSecretKeyAndPay() {
  const id = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token"); // Retrieve the token from session storage
  
  if (!id || !token) {
    console.error("User ID or token is missing in session storage");
    showSweetAlert('User ID and token are required for the transaction', false);
    return;
  }

  const formData = new FormData(paymentForm);
  formData.append("user_id", user_id);  // Add user_id to the FormData

  fetch('https://testing1-xpjd.onrender.com/api/deposits/getKey', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${token}` // Add Authorization header with Bearer token
    },
    cache: 'no-store'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.result === 'success') {
        const publicKey = atob(data.publicKey);
        payWithPaystack(data.amount, data.email, publicKey);
      } else {
        console.error("Failed to fetch secret key:", data.message);
        showSweetAlert('Failed to fetch secret key. Please try again', false);
      }
    })
    .catch(error => {
      console.error('Error fetching secret key:', error);
      showSweetAlert('An error occurred during the transaction', false);
    });
}



function payWithPaystack (amount, email, publicKey) {
  let handler = PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: amount * 100,
    ref: 'VS' + Math.floor(Math.random() * 1000000000 + 1),
    onClose: () => {
      alert('Window closed.')
    },
    callback: response => {
      let reference = response.reference

      save(reference, amount)
      clearForm()
    }
  })

  handler.openIframe()
}

function showSweetAlert (message, success) {
  if (success) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    })
  }
}

function clearForm () {
  paymentForm.reset()
}

function home () {
  window.location = '../home/index.php'
}

function save (reference) {
  // Make a request to process_payment.php with the reference
  fetch('process_payment.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'reference=' + encodeURIComponent(reference)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      if (data.result === 'success') {
        showSweetAlert('funding  successful!', true)
        // Additional logic if needed after successful payment
      } else {
        showSweetAlert('funding failed. Please try again.', false)
      }
    })
    .catch(error => {
      console.error('Error processing payment:', error)
      showSweetAlert('An error occurred during the transaction', false)
    })
}
