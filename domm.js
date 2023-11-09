//const thirdItem = document.querySelector("#items li:nth-child(3)");
//thirdItem.style.backgroundColor = "green";

///const listItems = document.querySelectorAll("#items li");
//listItems.forEach((item) => {
//item.style.fontWeight = "bold";});

//GETELEMNTSBYTAGNAME//
/*var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";*/

//QuaerySelection
/*var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello world";

var submit = document.querySelector("input[type=submit]");
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";
secondItem.style.color = "green";

var titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

var itemList = document.querySelector("#items");
var thirdItem = itemList.children[2];
thirdItem.style.display = "none";*/

//traverse the DOM
/*var itemList = document.querySelector("#items");
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "green";
console.log(itemList.parentNode.parentNode);*/

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "green";
console.log(itemList.parentElement.parentElement);*/

//childNodes
//console.log(itemList.childNodes);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "green";

console.log(itemList.firstChild);*/
//firstChildElement
/*console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello 1";*/

//lastChild
//console.log(itemList.lastChild);

//lastChildElement
/*console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "hello 4";*/

/*var itemList = document.querySelector("#items");
var lastItem = itemList.lastElementChild;
lastItem.textContent = "hello 4";*/

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
/*console.log(itemList.previousSibling);
itemList.previousElementSibling.style.backgroundColor = "green";*/

//createElement

//create a div
var newDiv = document.createElement("div");
//Add Class
newDiv.className = "hello";

//Add id
newDiv.id = "Hello1";

//Add attribute
newDiv.setAttribute("data-name", "hello");

//create text node

var newDivText = document.createTextNode("Hello World");

//Add text tio Div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);

var itemList = document.querySelector("#items");

// Create a new list item element
var newItem = document.createElement("li");

// Set the text content of the new item
newItem.textContent = "Hello world";

// Insert the new item before the first child of the items list
itemList.insertBefore(newItem, itemList.firstChild);
