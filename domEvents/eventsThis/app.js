
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


const buttons = document.querySelectorAll('button');


//changes button background color
for (let button of buttons) {
    button.addEventListener('click', colorize)
};

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
};


//When exectured with an event listener - 'this' inherits the attribute within the scope of its declaration
function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
};