<<<<<<< Updated upstream
document.getElementById("withdrawForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const amount = document.getElementById("amount").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const bankName = document.getElementById("bankName").value;
  
    const messageElement = document.getElementById("message");
  
    // Basic validation 
    if (amount <= 0) {
      messageElement.textContent = "Please enter a valid amount.";
      messageElement.style.color = "red";
      return;
    }
  
    // Simulate withdrawal
    messageElement.textContent = "Processing your withdrawal...";
    messageElement.style.color = "blue";
  
    setTimeout(() => {
      messageElement.textContent = `Successfully withdrawn ${amount} to account ${accountNumber} at ${bankName}.`;
      messageElement.style.color = "green";
  
      // Reset form
      document.getElementById("withdrawForm").reset();
    }, 2000);
  });
  
=======



function home () {
  window.location = '../';
}

$(document).on('click', '.send', function (event) {
  event.preventDefault();
  var amount = document.getElementById('accts').value;
  var bankCode = document.getElementById('bankCode').value;
  var acct_number = document.getElementById('acct_number').value;
  var acct_name = document.getElementsByClassName('acct_name')[0].innerText;
  var reason = document.getElementsByClassName('reason')[0].value;

  // Proceed with creating recipient code
  fetch('create_reference.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'bankCode=' +
      encodeURIComponent(bankCode) +
      '&acct_number=' +
      encodeURIComponent(acct_number) +
      '&acct_name=' +
      encodeURIComponent(acct_name)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.result === 'success' && data.data.status) {
        // Accessing the account name from the response
        const recipient_code = data.data.data.recipient_code;

        // Displaying the account name
        $('.acct_name').html(acct_name);
        $('.acct_numbers').html(acct_number);

        // Show the pin entry modal
        $('#pinEntryModal').modal('show');

        // Handle Confirm button click
        $('#confirmPinBtn').on('click', function () {
          // Get the entered pin
          var pin = $('#pinInput').val();

          // Check if the pin is empty or not a number
          if (pin === '' || isNaN(pin)) {
            alert('Invalid pin. Please enter a valid numeric pin.');
            return;
          }

          // Proceed with sending pin and other details to transfer.php
          sendToTransferPHP(pin, acct_number, amount, recipient_code);

          // Hide the pin entry modal
          $('#pinEntryModal').modal('hide');
        });
      } else {
        $('#msg1').html(
          '<span class="alert alert-warning alert-dismissible fade show">Incorrect pin</span><br><br>'
        );
        setTimeout(function () {
          $('#msg1').html('');
        }, 5000);
      }
    })
    .catch(error => {
      console.error('Error processing payment:', error);
      $('#msg1').html(
        '<span class="alert alert-danger alert-dismissible fade show">An error occurred during the transaction</span><br><br>'
      );
      setTimeout(function () {
        $('#msg1').html('');
      }, 5000);
    });
});

function sendToTransferPHP (pin, acct_number, amount, recipient_code) {
  var reason = document.querySelector('.reason').value;
  var acct_name = document.querySelector('.acct_name').innerText;
  var bankCode = document.getElementById('bankCode').value;

  // Now you have the pin, proceed with the fetch request to transfer.php
  fetch('transfer.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'pin=' +
      encodeURIComponent(pin) +
      '&acct_name=' +
      encodeURIComponent(acct_name) +
      '&acct_number=' +
      encodeURIComponent(acct_number) +
      '&amount=' +
      encodeURIComponent(amount) +
      '&bank_code=' +
      encodeURIComponent(bankCode) +
      '&recipient_code=' +
      encodeURIComponent(recipient_code) +
      '&reason=' +
      encodeURIComponent(reason)
  })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Transfer Successful!',
          text: 'The transfer has been completed successfully.'
        }).then(() => {
          document.getElementById('myform').reset();
          document.getElementById('pinInput').reset();
          $('.acct_name').html('');
        });
      } else {
        $('#msg1').html(
          '<span class="alert alert-warning alert-dismissible fade show">Incorrect pin</span><br><br>'
        );
        setTimeout(function () {
          $('#msg1').html('');
        }, 5000);
      }
    })
    .catch(error => {
      console.error('Error processing transfer:', error);
      $('#msg1').html(
        '<span class="alert alert-danger alert-dismissible fade show">An error occurred during the transfer</span><br><br>'
      );
      setTimeout(function () {
        $('#msg1').html('');
      }, 5000);
    });
}
>>>>>>> Stashed changes
