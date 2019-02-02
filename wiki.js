const find = el => document.querySelector(el)
const create = el => document.createElement(el)

const lookingThem = find('.searchButton').addEventListener('click', (e) => {
  e.preventDefault()
  const inputText = find('.box').value.trim();
  // console.log(inputText.length);
  result(inputText);
})

const result = searching => {
  const wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searching}`; // API
  fetch(wikipedia)
    .then(resolve => resolve.json())
    .then(data => {
      if(typeof data.continue === 'undefined'){
        displayCantFound(find('.box').value)
      } else {
        console.log(data);
      }
    })
    .catch((e) => alert('an error occurred', e))
}

const displayCantFound = theInputValue => {
  find('.result').innerHTML =
  `<div>
      <h3> sorry can't found what you are looking ${theInputValue} </h3>
  </div>`
}

// const displayError = () => {
//
// }
