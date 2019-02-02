// functions for DOM,
const [find, create, textNode] = [el => document.querySelector(el), el => document.createElement(el), el => document.createTextNode(el)];

const finder = find('.searchButton').addEventListener('click', events => {
  events.preventDefault()
  const inputText = find('.box').value.trim(); // space includes string and has length, trim them
  // console.log(inputText.length);
  result(inputText);
})

const result = searching => {
  const wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=${searching}`; // API
  fetch(wikipedia)
    .then(resolve => resolve.json())
    .then(data => {
      const somewords = find('.box').value;
      console.log(data);
      const dataFile = data.query.search;
      //check input data if can't found
      typeof data.continue === 'undefined' ? displayCantFound(somewords) : displayData(dataFile);
    })
    .catch(() => alert('an error occurred'))
}

const displayCantFound = theInputValue => {
  find('.flexx').innerHTML =
    `<ul class='cantfound'>
      <li class='item'> <h1> Ooopss can't found: ${theInputValue} </h1></li>
      <li class='item'> <img class='pic' src='clown-sad.png'> </li>
   </ul>`;
}

const displayData = dataQuery => {
  const putTextData = find('.flexx');
  putTextData.innerHTML = '';
  // console.log(dataQuery);
  for (data of dataQuery) {
    console.log(data);
    const url = encodeURI(`https://en.wikipedia.org/wiki/${data.title}`);
    putTextData.insertAdjacentHTML('beforeend',
    `<li class="flex-item">
      <h3> <a href="${url}"> ${data.title}</a> </h3>
      <span> ${data.snippet} </span> </br>
      <a href="${url}" target=_blank class='link'> ${url}</a>
    </li>`
   )
  }
}
