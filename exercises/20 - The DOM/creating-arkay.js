// 2020-09-23

const myTarget = document.querySelector('.custom');
const myList = document.createElement('ul');

const listItem1 = document.createElement('li');
listItem1.textContent = '🍄';

const listItem2 = document.createElement('li');
listItem2.textContent = '🍕';

const listItem3 = document.createElement('li');
listItem3.textContent = '🍍';

const listItem4 = document.createElement('li');
listItem4.textContent = '🌶';

const listItem5 = document.createElement('li');
listItem5.textContent = '🥂';

myList.append(listItem3);
listItem3.before(listItem2);
myList.insertAdjacentElement('afterbegin', listItem1);
myList.insertAdjacentElement('beforeend', listItem5);
listItem5.before(listItem4);

myTarget.insertAdjacentElement('beforebegin', myList);

console.log(listItem3);

