const find = el => document.querySelector(el)
const create = el => document.createElement(el)

const lookingThem = find('.searchButton').addEventListener('click', events => {
  events.preventDefault()
  const inputText = find('.box').value.trim();
  // console.log(inputText.length);
  result(inputText);
})

const result = searching => {
  const wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searching}`; // API
  fetch(wikipedia)
    .then(resolve => resolve.json())
    .then(data => {
      const somewords = find('.box').value;
      typeof data.continue === 'undefined' ? displayCantFound(somewords) : console.log(data);
    })
    .catch((e) => alert('an error occurred', e))
}

const displayCantFound = theInputValue => {
  find('.result').innerHTML =
  `<div>
      <h2> sorry can't found what you are looking ${theInputValue} </h2>
  </div>`
}

// const displayError = () => {
//   find('.result').innerHTML =
// }
