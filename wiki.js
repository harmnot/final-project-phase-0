const find = el => document.querySelector(el)
const create = el => document.createElement(el)

const looking = find('.searchButton').addEventListener('click', (e) => {
  e.preventDefault()
  const inputText = find('.box').value.trim(); // space termasuk length, harus di trim
  // console.log(inputText.length);
  result(inputText);
})

const result = searching => {
  const wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searching}`; // API
  fetch(wikipedia)
    .then(resolve => console.log(resolve.json()))
    .then(data => console.log(data))
}
