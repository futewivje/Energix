document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Get input values
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("success-message");
  
    if (cardNumber && expiry && cvv && password) {
      // Show the success message
      successMessage.style.display = "block";
  
      // Optionally clear the form after 2 seconds
      setTimeout(() => {
        document.getElementById("payment-form").reset();
        successMessage.style.display = "none"; // Hide it again after showing
      }, 2000);
    }
  });
  