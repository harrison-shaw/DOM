const input = document.querySelector('input');
const h1 = document.querySelector('h2');



//'change' for when the input value is different on leaving the input than when entering the input
// input.addEventListener('change', (e) =>{
//     console.log('whatever')
// })

// 'input' for when the input value changes at any point
input.addEventListener('input', (e) =>{
    h1.innerText = input.value;
})

const username = document.querySelector('username');
const h1 = document.querySelector('h1')

username.addEventListener('input' , (e) => {
    h1.innerText = input.value;
})