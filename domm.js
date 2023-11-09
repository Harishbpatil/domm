//const thirdItem = document.querySelector("#items li:nth-child(3)");
//thirdItem.style.backgroundColor = "green";

///const listItems = document.querySelectorAll("#items li");
//listItems.forEach((item) => {
//item.style.fontWeight = "bold";});

//GETELEMNTSBYTAGNAME//
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";
