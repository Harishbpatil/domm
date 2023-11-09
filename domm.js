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
var header = document.querySelector("#main-header");
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
thirdItem.style.display = "none";
