document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})
//  There is an event 'object' which is auto passed into the function each time - can be captured by adding a parameter
// Often rely on the event object to capture keyboard events - So we can tell what keys were pressed 

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    // console.log('keyup')
    console.log(e.key)
    console.log(e.code)
    // gives us the key/code, code will tell you where the position of the key selected is e.g. SHIFT left vs SHIFT right 
})



input.addEventListener('keydown', () => {
    console.log('keydown')
})


window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrownDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("UP!");
            break;
        case 'ArrowRight':
            console.log("DOWN!");
            break;
        default:
            console.log("IGNORED!");
    }
})