const tweetForm = document.querySelector('#tweetform');
const tweetsContainer = document.querySelector('#tweets');



tweetForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

// document.querySelectorAll('input')[1].value
//selects inputs value 

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet)

}

//exercise

const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productInput = form.elements.product
    const quantInput = form.elements.qty
    addItems(productInput.value, quantInput.value);
    productInput.value = '';
    quantInput.value = '';
})

const addItems = (product, qty) =>{
    const newProduct = document.createElement('li');
    newProduct.innerText = `${product} ${qty}`;
    list.appendChild(newProduct);
}