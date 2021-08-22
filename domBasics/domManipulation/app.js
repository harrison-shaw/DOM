//innerText


document.querySelector('p').innerText
//returns only the text within an element

"The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in poultry shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet, should be handled with care."


// document.querySelector('p').innerText = 'lolololol'
// "lolololol"


//textContent -  returns everything from within an element

document.querySelector('p').textContent

"The Silkie (sometimes spelled Silky) is a breed of chicken named for\n        its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as\n        black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are\n        often exhibited in poultry shows, and appear in various colors. In\n        addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly\n        temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only\n        about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their\n        broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,\n        should be handled with care.\n    "


const allLinks = document.querySelectorAll('a');

for (let link of allLinks){
    link.innerText = 'I am a link!'
};


//innerHTML
document.querySelector('p').innerHTML
"The <b>Silkie</b> (sometimes spelled <b>Silky</b>) is a <a href=\"/wiki/List_of_chicken_breeds\" title=\"List of chicken breeds\">I am a link!</a> of <a href=\"/wiki/Chicken\" title=\"Chicken\">I am a link!</a> named for\n        its atypically fluffy <a href=\"/wiki/Plumage\" title=\"Plumage\">I am a link!</a>, which is said to feel like <a href=\"/wiki/Silk\" title=\"Silk\">I am a link!</a> and satin. The breed has several other unusual qualities, such as\n        black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are\n        often exhibited in <a href=\"/wiki/Poultry\" title=\"Poultry\">I am a link!</a> shows, and appear in various colors. In\n        addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly\n        temperament. It is among the most docile of poultry. Hens are also exceptionally <a href=\"/wiki/Broodiness\" title=\"Broodiness\">I am a link!</a>, and care for young well. Though they are fair layers themselves, laying only\n        about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their\n        broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,\n        should be handled with care.\n    "

