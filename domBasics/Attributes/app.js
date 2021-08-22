
// querySelector for selecting an attribute 
document.querySelector('#whoops').id = 'banner'
// <img id="whoops">

// <img id="banner"> 

//  method for selecting a banner

document.querySelector('a').href
// "http://127.0.0.1:5500/wiki/List_of_chicken_breeds"

document.querySelector('a').title
// "List of chicken breeds"

const firstLink = document.querySelector('a')
// undefined

firstLink.href
// "http://127.0.0.1:5500/wiki/List_of_chicken_breeds"

firstLink.getAttribute('href')
// "/wiki/List_of_chicken_breeds"

//can use to get any attribute - 
firstLink.getAttribute('id')
firstLink.getAttribute('title')
firstLink.getAttribute('class')

// can use to 'set' attributes
firstLink.setAttribute('href' , 'https://www.google.com' )


document.querySelector('input')[1]

