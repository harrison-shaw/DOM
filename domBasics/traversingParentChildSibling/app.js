const firstBold = document.querySelector('b')

console.log(firstBold)
//returns <b>Silkie</b> 
console.log(firstBold.parentElement)
//returns <body></body> 

firstBold.parentElement.firstBold.parentElement.firstBold.parentElement;
//drills up

const paragraph = firstBold.parentElement
console.log(paragraph)

paragraph.childElementCount
// returns number of children

paragraph.children 
// returns html collection which is itterable 

paragraph.children[0]
// returns first result - is an object 
 
paragraph.children[0].parentElement
//takes us to where we started 

const squareImg = document.querySelector('.square')
squareImg.parentElement
//returns <body>...</body>

squareImg.nextSibling
//returns #text
//nextSibling return the next 'node' sibling, not the next element - Browser will turn whitespace or empty line into an empty node 

squareImg.nextElementSibling
//reutrns next element sibling
squareImg.previousElementSibling
// returns previous element sibling
