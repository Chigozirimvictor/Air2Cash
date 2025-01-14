// Script to copy invite link
document.querySelectorAll('.fa-copy').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      navigator.clipboard.writeText(input.value);
      alert('Invite link copied to clipboard!');
    });
});

// To enable the footer links to change color when clicked
document.querySelectorAll('.footer-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    document.querySelectorAll('.footer-link').forEach((el) => {
      el.classList.remove('active');
    });
    link.classList.add('active');
  });
});


// Animations


const childDiv = document.querySelector(".header");
console.log("its working");

const handleScroll = () => {
  const rect = childDiv.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    childDiv.classList.add("in-view");
  }
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // To check initial state

  



const secondDiv = document.querySelector(".rewards-section");
console.log("its working");

const secondScroll = () => {
  const rect = secondDiv.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    secondDiv.classList.add("in-view");
  }
};

window.addEventListener("scroll", secondScroll);
secondScroll(); // To check initial state

  //  Aimation 3

const thirdDiv = document.querySelector(".affiliates-section");
console.log("its working");

const thirdScroll = () => {
  const rect = thirdDiv.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    thirdDiv.classList.add("in-view");
  }
};

window.addEventListener("scroll", thirdScroll);
thirdScroll(); // To check initial state




const forthDiv = document.querySelector(".links-section");
console.log("its working");

const forthScroll = () => {
  const rect = forthDiv.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    forthDiv.classList.add("in-view");
  }
};

window.addEventListener("scroll", forthScroll);
forthScroll(); // To check initial state
