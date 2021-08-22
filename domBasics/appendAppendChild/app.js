//create element and add it to the page/remove from page
//special method called document.createElement()

const newImg = document.createElement('img')
// creates <img>

//need to tell it where to go 
newImg.src = 'https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2155&q=80';


// need to apped it to the page
document.body.appendChild(newImg);

// make it smaller
newImg.classList.add('square');

// add text under the new image
let newh3 = document.createElement('h3')
// console.log(newh3)

newh3.innerText = 'I am new!'

document.body.appendChild(newh3)

//new method - append
const p = document.querySelector('p')
p.append('i am new text yaaaaaay')
//appends to end of first <p> element
//can append with more than one thing

const newB = document.createElement('b')
newB.append('hi')
//adds to end of element <b>
newB.prepend('hi')
//adds to start of element <b>


// newB.insertAdjacentElement(position, element)
//can specify if we want it before/after element or inside/outside

const h2  = document.createElement('h2')
h2.append("Are adorable chickens");
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2)
