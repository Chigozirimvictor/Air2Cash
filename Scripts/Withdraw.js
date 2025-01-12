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
  