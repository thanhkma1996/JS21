// get elemnt methods in DOM
// 1. Element: ID . class , tag , css selector html collection
//  2. Atributre:
// 3. Text

var headingNode = document.getElementById('heading');
var headingNode2 = document.getElementsByTagName('h2');
var headingNode3 = document.querySelector(".box .content");
// querySelectorAll

console.log(headingNode);
console.log( headingNode2);
console.log(headingNode3);

var headings = document.querySelectorAll('.heading');

for( var i=0; i < headings.length ; i++) {
    console.log(headings[i]);
}

// Atribute Node & text node
// add to atribute emlemtnt

var headingElemment = document.querySelector('a');

headingElemment.title = 'Heading';
headingElemment.id = 'tesst'
// headingElemment.className="tesst-class";
headingElemment.href='tesst';
headingElemment.setAttribute('class','testabc');

// InnnerText với textContent Property

console.log(headingElemment.innerText);
console.log(headingElemment.textContent);
