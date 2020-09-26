// // 2020-09-23
//
// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const heading = document.querySelector('h2');
//
// // get the content of the element!
// console.log(heading.textContent);
//
// // innerText is aware of css styles!
// console.log(heading.innerText);
//
// // set the content of the element!
// heading.textContent = 'mah ballz';
//
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
// console.log(heading.accessKey);
//
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
//
// // old way
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
//
// // better way!
// pizzaList.insertAdjacentText('beforeend', '🍕');
//

const picList = document.querySelector('.nice');
picList.classList.add('open');
picList.classList.remove('cool');

function spinnit() {
  picList.classList.toggle('round');
}

picList.addEventListener('click', spinnit);



