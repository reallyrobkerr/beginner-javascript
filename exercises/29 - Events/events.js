const butts = document.querySelector('.butts');
const buttz = document.querySelector('.buttz');

// naming callbacks with 'handle' is...HANDY 'cause it's indicative
// of being an event handler function for an event listener
function handleCleck() {
  console.log('CLEEEECCCK');
}

const arrowFunctionExample = () => console.log('CLLLLEEEEECCKH');

butts.addEventListener('click', handleCleck);
// the handleCleck callback function here is BOUND to the butts element

// butts.removeEventListener('click', handleCleck);
// this will work since the reference to function handleCleck is bound
// you CANNOT use an anonymous callback function with removeEventListener

buttz.addEventListener('click', arrowFunctionExample);

const buys = document.querySelectorAll('.buy');

buys.forEach(thing => {
  thing.addEventListener('click', handleCleck)
});