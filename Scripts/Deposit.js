<<<<<<< Updated upstream
// document.getElementById("paymentMethod").addEventListener("change", function () {
//     const paymentDetails = document.getElementById("paymentDetails");
//     const selectedMethod = this.value;
  
//     paymentDetails.innerHTML = ""; // Clear existing inputs
//     paymentDetails.classList.add("hidden");
  
//     if (selectedMethod === "bankTransfer") {
//       paymentDetails.innerHTML = `
//         <label for="bankDetails">Bank Transfer Details:</label>
//         <textarea id="bankDetails" name="bankDetails" placeholder="Enter bank transfer reference" required></textarea>
//       `;
//       paymentDetails.classList.remove("hidden");
//     } else if (selectedMethod === "card") {
//       paymentDetails.innerHTML = `
//         <label for="cardNumber">Card Number:</label>
//         <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required>
        
//         <label for="expiryDate">Expiry Date:</label>
//         <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
        
//         <label for="cvv">CVV:</label>
//         <input type="text" id="cvv" name="cvv" placeholder="123" required>
//       `;
//       paymentDetails.classList.remove("hidden");
//     } else if (selectedMethod === "ussd") {
//       paymentDetails.innerHTML = `
//         <label for="ussdCode">USSD Code:</label>
//         <p>*123*Amount#</p>
//         <p>Dial the above code to initiate payment.</p>
//       `;
//       paymentDetails.classList.remove("hidden");
//     }
//   });
  
  // document.getElementById("depositForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const receiptEl = document.getElementById("receipt");
  //   const amount = document.getElementById("amount").value;
  //   const paymentMethod = document.getElementById("paymentMethod").value;
  
//     if (!amount || !paymentMethod) {
//       alert("Please fill out all required fields!");
//       return;
//     }
  
  //   receiptEl.textContent= `Deposit of ₦${amount} using ${paymentMethod} has been initiated successfully.`;
  //   receiptEl.style.color = "green";
  // });
  
=======
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchSecretKeyAndPay();
}, false);

function fetchSecretKeyAndPay() {
    fetch("", {
            method: "POST",
            body: new FormData(paymentForm),
            cache: "no-store"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                payWithPaystack(data.amount, data.email, data.publicKey);
            }
        })
        .catch(error => {
            console.error("Error fetching secret key:", error);
            showSweetAlert("An error occurred during the transaction", false);
        });
}

function payWithPaystack(amount, email, publicKey) {
    let handler = PaystackPop.setup({
        key: publicKey,
        email: email,
        amount: amount * 100,
        ref: 'VS' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: () => {
            alert('Window closed.');
        },
        callback: (response) => {
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
            title: "Success",
            text: message,
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
    }
}

function clearForm() {
    paymentForm.reset();
}

function home() {
    window.location = "../home/index.php";
}

function save(reference) {
    // Make a request to process_payment.php with the reference
    fetch("process_payment.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "reference=" + encodeURIComponent(reference),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                showSweetAlert("funding  successful!", true);
                // Additional logic if needed after successful payment
            } else {
                showSweetAlert("funding failed. Please try again.", false);
            }
        })
        .catch(error => {
            console.error("Error processing payment:", error);
            showSweetAlert("An error occurred during the transaction", false);
        });
}
>>>>>>> Stashed changes
