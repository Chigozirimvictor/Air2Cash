

const inputElement = [...document.querySelectorAll('input.code-input')];
inputElement.forEach((elem,index)=>{
    elem.addEventListener('keydown', (e)=>{
        if(e.keyCode === 8 && e.target.value === ''){
            inputElement[Math.max(0, index - 1)].focus()
        }
    });

    elem.addEventListener('input', (e)=>{
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? ''
        const lastInputBox = index === inputElement.length - 1;
        const insertedCotent = first !== undefined;
        if(insertedCotent && !lastInputBox){
            inputElement[index + 1].focus();
            inputElement[index + 1].value = rest.join('')
            inputElement[index + 1].dispatchEvent(new Event('input'))
        }
    })
})


// ANIMATION CODE BELOW

        const childDiv = document.querySelector('.Create-new-pw');
        console.log("its working")

const handleScroll = () => {
  const rect = childDiv.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    childDiv.classList.add('in-view');
  }
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // To check initial state


const anotherDiv = document.querySelector('.fg-form');
console.log("its working")

const animate2 = () => {
const rect = anotherDiv.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom >= 0) {
anotherDiv.classList.add('in-view');
}
};

window.addEventListener('scroll', animate2);
animate2(); // To check initial state
