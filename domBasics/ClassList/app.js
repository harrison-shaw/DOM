//select something
const h2 = document.querySelector('h2');
// h2.setAttribute('class', 'purple');
//ets a class attribute of 'purple'
//h2 color is now purple
// h2.setAttribute('class', 'border');
//changes but now we lose the purple color

// class list:
console.log(h2.classList);
h2.classList.add('border');
h2.classList.add('purple');
//adds both border and purple to the classList objcet - both now applied
// can be removed
h2.classList.remove('border')
console.log(h2.classList.contains('border'))
// returns false


//toggle turns an object property off or on when it is exectuted 
h2.classList.toggle('purple')





/* <head>
    <title>ClasList</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <!--LEAVE THIS FILE ALONE!-->
    <ul>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
    </ul>
</body>

</html> */

// switch all li's with/without 'highlight class
const allLi = document.querySelectorAll("li")
 
for (let li of allLi) {
     li.classList.toggle("highlight")    
}