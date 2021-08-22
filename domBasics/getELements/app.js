
//getElementByID - Method which exists on the document
//Passes in a string when called 
const pic = document.getElementById('banner')

//getElementsByTagName - itterable collections, but not arrays
const allImages = document.getElementsByTagName('img')
for(let image of allImages){
   image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}

//getElementsByClassName
const squareImages = document.getElementsByClassName('square')
for(let img  of squareImages) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
}
