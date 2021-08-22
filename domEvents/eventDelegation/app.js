// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', () => {
//         li.remove();
//     })
// }

//event delegation adds eventlistner to a parent element 



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


tweetsContainer.addEventListener('click', (e) => {
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
})