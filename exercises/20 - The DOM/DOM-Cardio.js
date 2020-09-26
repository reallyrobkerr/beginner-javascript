// 2020-09-24

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
const myTarget = document.querySelector('body');
myTarget.insertAdjacentElement('afterbegin', myDiv);

// make an unordered list
const myList = document.createElement('ul');
myDiv.insertAdjacentElement('afterbegin', myList);

// add three list items with the words "one, two three" in them
const listItem1 = document.createElement('li');
listItem1.textContent = '🍄';

const listItem2 = document.createElement('li');
listItem2.textContent = '🍕';

const listItem3 = document.createElement('li');
listItem3.textContent = '🍍';

// put that list into the above wrapper
myList.appendChild(listItem1);
myList.appendChild(listItem2);
myList.appendChild(listItem3);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://picsum.photos/300';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('.cute');

// add an alt of Cute Puppy
myImg.alt = 'cute pupper';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const twoP = `
    <div>
        <p>this is a pair of graphs 📈</p>
        <p>this is a pair of graphs 📈</p>
    </div>`;

const thing = document.createElement('div');
thing.innerHTML = twoP;

myList.insertAdjacentElement('beforebegin', thing);

// add a class to the second paragraph called warning

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

