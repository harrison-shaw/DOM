//all in one method to select a single element - same sort of selectors as CSS 

document.querySelector('p')
//returns first match

document.querySelector('#banner')
//returns ID

document.querySelector('.square')
//returns class

document.querySelector('img:nth-of-type(2)')
//returns second image with class of 'square'

document.querySelector('a[title="java"')
//returns 'title' attribute

document.querySelectorAll('a')
//Selects all anchor tags

document.querySelectorAll('img')
//Selects all anchor tags

document.querySelectorAll('p a')
//Selects all anchor tags within a paragraph 

const link = document.querySelectorAll ('p a');
for (let link of links) {
    console.log(link.href)
}