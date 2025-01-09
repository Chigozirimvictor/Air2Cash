// To enable the footer links to change color when clicked
document.querySelectorAll('.footer-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.footer-link').forEach((el) => {
        el.classList.remove('active');
      });
      link.classList.add('active');
    });
  });


  const childDiv = document.querySelector('.recent-transactions');
console.log("its working")

const handleScroll = () => {
const rect = childDiv.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom >= 0) {
childDiv.classList.add('in-view');
}
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // To check initial state



const secondDiv = document.querySelector('.rewards');
console.log("its working")

const secondScroll = () => {
const rect = secondDiv.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom >= 0) {
secondDiv.classList.add('in-view');
}
};

window.addEventListener('scroll', secondScroll);
secondScroll(); // To check initial state
