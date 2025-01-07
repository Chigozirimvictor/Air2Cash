function checkSessionAndRedirect() {
    // Check if the session token exists in sessionStorage
    const sessionToken = sessionStorage.getItem('token');

    if (!sessionToken) {
        // If no session token, redirect to the desired page
        window.location.href = '../SignUp.html'; // Replace '/login.html' with your desired page
    }
    else {
        // If session exists, show the page content
        document.body.style.display = 'block';
    }
} 
// Call the function on page load
// window.onload = function () {
//     checkSessionAndRedirect();
// };