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

// InnerHTML propertype
var boxHTML = document.querySelector('.box');
boxHTML.innerHTML = '<h2> content test <h2>'; // khác voi innerText chỉ insert duoc text vao content
// innerHTML insert duoc ca HTML

console.log(document.querySelector('.box h2').innerText);

// DOM event
// 1 inpyt / select
// 2 keyup / down

// sự kiện onchange dùng để kiểm tra điều kiện khi value trong input thay đổi\

var inputelement = document.querySelector('input[type="text"]');

inputelement.onchange = function(e) { // oninput
    console.log(e.target.value);
}

// checked
var inputelements = document.querySelector('input[type="checkbox"]');

inputelements.onchange = function(e) { // oninput
   var tesst = e.target.checked;
   console.log(tesst);
}

// select

var inputelements = document.querySelector('select');

inputelements.onchange = function(e) { // oninput
   var tesst = e.target.value;
   console.log(tesst);
}