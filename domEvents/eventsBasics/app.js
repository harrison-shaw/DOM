
//The onClick Property 
const btn = document.querySelector('#v2')


// calling the btn variable and adding a function to the onClick arrtibute within its object list
btn.onclick = function (){
    console.log("You clicked me!")
    console.log("I hope it worked!")
}


function scream(){
    console.log("AAAAAAHHHHHH")
    console.log("STOP TOUCHING ME!")
}

// function is not executed, it is passed to btn.onmouseenter but we are not executing it. When the user mouses over the btn, then the fucntion will execute
btn.onmouseenter = scream;

//addEvent Listner 
//when addEventListner is called as a method on our btn3 variable - an event handler is then applied ('click'), with a function to execute following
//first argument is the event type, second is the callback function
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () =>{
    alert("CLICKED!")
})


function twist (){
    console.log('TWIST')
}
function shout (){
    console.log('SHOUT')
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;
//console only runs shout - the onClick property is being changed - You can't have two different callback funcitons for the same event.

//We can use addEventListner to get past this 
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
//this allows us to have as many callbacks as we want
