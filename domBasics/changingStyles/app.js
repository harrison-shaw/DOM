//Object method
const h1 = document.querySelector('h1');
h1.style.color = 'green';
h1.style.color = 'magenta';
h1.style.fontSize = '3em';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';


const allLinks = document.querySelectorAll('a');
for(let link of allLinks) {
    link.style.color= 'rgb(0,52,45)';
    link.style.textDecorationColor= 'magenta';
    link.style.textDecorationStyle= 'wavy';
}

//<head>
/* <title>Rainbow</title>
<!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
<script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
<!--DON'T TOUCH THIS FILE PLEASE!-->
<h1>
    <span>R</span>
    <span>A</span>
    <span>I</span>
    <span>N</span>
    <span>B</span>
    <span>O</span>
    <span>W</span>
</head> */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

let i=0;

const allSpans = document.querySelectorAll('span');

for(let span of allSpans){

    span.style.color=colors[i];

    i++;

}



