function checkSessionAndRedirect () {
  // Check if the session token exists in sessionStorage
  const sessionToken = sessionStorage.getItem('token')

  if (!sessionToken) {
    // If no session token, redirect to the desired page
    window.location.href = '../start.html' // Replace '/login.html' with your desired page
  } else {
    // If session exists, show the page content
    document.body.style.display = 'block'
  }
}
function logout () {
  const token = sessionStorage.getItem('token')
  const id = sessionStorage.getItem('user_id')
  console.log('it logged out')

  $.ajax({
    type: 'GET',
    url: 'https://testing1-xpjd.onrender.com/api/auth/logout', // replace wi=th your actual logout URL
    headers: {
      Authorization: `Bearer ${token}` // use backticks for template literals
    },
    data: {
      user_id: id
    },
    success: function (data) {
      if (data.status === 'success') {
        // use triple equals for strict equality check
        checkSessionAndRedirect()
        sessionStorage.clear()
        checkSession()
      }
    }
  })
}
// Call the function on page load
// window.onload = function () {
//     checkSessionAndRedirect();
// };
