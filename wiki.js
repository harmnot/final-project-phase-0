const wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchThem}`; // API
const find = el => document.querySelector(el);
const create = el => document.createElement(el);
