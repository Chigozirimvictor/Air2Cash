document.getElementById("paymentMethod").addEventListener("change", function () {
    const paymentDetails = document.getElementById("paymentDetails");
    const selectedMethod = this.value;
  
    paymentDetails.innerHTML = ""; // Clear existing inputs
    paymentDetails.classList.add("hidden");
  
    if (selectedMethod === "bankTransfer") {
      paymentDetails.innerHTML = `
        <label for="bankDetails">Bank Transfer Details:</label>
        <textarea id="bankDetails" name="bankDetails" placeholder="Enter bank transfer reference" required></textarea>
      `;
      paymentDetails.classList.remove("hidden");
    } else if (selectedMethod === "card") {
      paymentDetails.innerHTML = `
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required>
        
        <label for="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
        
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" placeholder="123" required>
      `;
      paymentDetails.classList.remove("hidden");
    } else if (selectedMethod === "ussd") {
      paymentDetails.innerHTML = `
        <label for="ussdCode">USSD Code:</label>
        <p>*123*Amount#</p>
        <p>Dial the above code to initiate payment.</p>
      `;
      paymentDetails.classList.remove("hidden");
    }
  });
  
  document.getElementById("depositForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const receiptEl = document.getElementById("receipt");
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
  
    if (!amount || !paymentMethod) {
      alert("Please fill out all required fields!");
      return;
    }
  
    receiptEl.textContent= `Deposit of ₦${amount} using ${paymentMethod} has been initiated successfully.`;
    receiptEl.style.color = "green";
  });
  