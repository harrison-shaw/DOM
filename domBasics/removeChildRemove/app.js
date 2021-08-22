//need to call parent to rempve child
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement 
ul.removeChild(firstLi)

 const img = document.querySelector('img')
 img.remove()
 img.parentElement.removeChild(img)