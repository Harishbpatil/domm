const thirdItem = document.querySelector("#items li:nth-child(3)");
thirdItem.style.backgroundColor = "green";

const listItems = document.querySelectorAll("#items li");
listItems.forEach((item) => {
  item.style.fontWeight = "bold";
});
