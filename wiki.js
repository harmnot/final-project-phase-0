const find = el => document.querySelector(el)
const create = el => document.createElement(el)
const textNode = el => document.createTextNode(el)

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
  `<ul class='flex-content wrapIt'>
      <li class='item'> <h1> Ooopss can't found ${theInputValue} </h1></li>
      <li class='item'> <img class='pic' src='clown-sad.png'> </> </li>
   </ul>`;
}
