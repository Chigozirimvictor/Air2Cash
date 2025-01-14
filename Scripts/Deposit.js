const paymentForm = document.getElementById('paymentForm')
paymentForm.addEventListener(
  'submit',
  event => {
    event.preventDefault()
    fetchSecretKeyAndPay()
  },
  false
)

function fetchSecretKeyAndPay () {
  fetch('', {
    method: 'POST',
    body: new FormData(paymentForm),
    cache: 'no-store'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      if (data.result === 'success') {
        payWithPaystack(data.amount, data.email, data.publicKey)
      }
    })
    .catch(error => {
      console.error('Error fetching secret key:', error)
      showSweetAlert('An error occurred during the transaction', false)
    })
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
