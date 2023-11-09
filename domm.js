document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("addForm");
  var itemList = document.getElementById("items");
  var filter = document.getElementById("filter");

  // Form submit event
  form.addEventListener("submit", addItem);
  // Delete and Edit button click events
  itemList.addEventListener("click", handleButtonClick);
  // Filter event
  filter.addEventListener("keyup", filterItems);

  // Add item
  function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById("item").value;

    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    var editBtn = document.createElement("button");
    editBtn.style.color = "black";
    editBtn.className = "btn btn-info btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    itemList.appendChild(li);
  }

  // Handle delete and edit button clicks
  function handleButtonClick(e) {
    if (e.target.classList.contains("delete")) {
      // Delete button clicked
      if (confirm("Are You Sure?")) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    } else if (e.target.classList.contains("edit")) {
      // Edit button clicked (you can add edit functionality here)
      console.log("Edit button clicked");
    }
  }

  // Filter Items
  function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
