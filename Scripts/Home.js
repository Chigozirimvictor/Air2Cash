const username = sessionStorage.getItem('username')
console.log(username)
$('.user-name').html(username)

document.querySelector('.eye-icon').addEventListener('click', async () => {
  const balanceElement = document.querySelector('.balance')
  const isHidden = balanceElement.textContent === '••••••'

  if (isHidden) {
    const balance = await fetchBalance()
    balanceElement.textContent = balance !== null ? balance : 'Error'
  } else {
    balanceElement.textContent = '••••••'
  }
})

async function fetchBalance () {
  const token = sessionStorage.getItem('token')
  const id = sessionStorage.getItem('user_id')
  console.log(token)
  console.log(id)
  if (!token || !id) {
    console.error('Token or user ID is missing')
    return
  }

  $.ajax({
    type: 'POST',
    url: 'https://testing1-xpjd.onrender.com/api/users/accountbalance',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      userId: id
    },
    success: function (data) {
      if (data.success === true) {
        $('.balance').html("₦" + data.data.account_balance);

      } else {
        console.error('Unexpected response:', data)
      }
    },
    error: function (xhr, status, error) {
      console.error('AJAX Error:', status, error)
    }
  })
}

// To enable the footer links to change color when clicked
document.querySelectorAll('.footer-link').forEach(link => {
  link.addEventListener('click', e => {
    document.querySelectorAll('.footer-link').forEach(el => {
      el.classList.remove('active')
    })
    link.classList.add('active')
  })
})

// To enable the notifications button to change color when clicked
function toggleColor () {
  const button = document.querySelector('.notifications-btn')
  button.classList.toggle('clicked')
  setTimeout(() => {
    button.classList.remove('clicked')
  }, 500)
}

// Animation 1

const childDiv = document.querySelector('.header')
console.log('its working')

const handleScroll = () => {
  const rect = childDiv.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    childDiv.classList.add('in-view')
  }
}

window.addEventListener('scroll', handleScroll)
handleScroll() // To check initial state

// Animation2
const secondDiv = document.querySelector('.wallet-balance')
console.log('its working')

const secondScroll = () => {
  const rect = secondDiv.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    secondDiv.classList.add('in-view')
  }
}

window.addEventListener('scroll', secondScroll)
secondScroll() // To check initial state

// Animation3

const thirdDiv = document.querySelector('.actions')
console.log('its working')

const thirdScroll = () => {
  const rect = thirdDiv.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    thirdDiv.classList.add('in-view')
  }
}

window.addEventListener('scroll', thirdScroll)
thirdScroll() // To check initial state

// Forth Animation

const fourthDiv = document.querySelector('.rewards')
console.log('its working')

const fourthScroll = () => {
  const rect = fourthDiv.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    fourthDiv.classList.add('in-view')
  }
}

window.addEventListener('scroll', fourthScroll)
fourthScroll() // To check initial state

//  Fitfth Animation
const fifthDiv = document.querySelector('.recent-transactions')
console.log('its working')

const fifthScroll = () => {
  const rect = fifthDiv.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    fifthDiv.classList.add('in-view')
  }
}

window.addEventListener('scroll', fifthScroll)
fifthScroll() // To check initial state

//  logout function


