// Serialize an object to JSON and store it in local storage
function serialize(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

// Deserialize a JSON string from local storage and convert it to an object
function deserialize(key) {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
}

// Function to display user details on the screen
function displayUserDetails(userDetails) {
  // Clear the existing user list on the screen
  const userList = document.getElementById("users");
  userList.innerHTML = "";

  // Iterate over user details and add them to the screen
  userDetails.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name}: ${user.email}`;

    // Create a delete button for each list item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Add a click event listener to delete the corresponding user detail
    deleteBtn.addEventListener("click", function () {
      // Remove the user detail from the list
      userDetails.splice(index, 1);

      // Update the local storage with the modified user details
      serialize("userDetails", userDetails);

      // Display the updated user details on the screen
      displayUserDetails(userDetails);
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteBtn);

    // Append the list item to the user list
    userList.appendChild(listItem);
  });
}

// Put DOM elements into variables
const myForm = document.getElementById("my-form");

// Listen for form submit
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get existing user details from local storage
  const existingUserDetails = deserialize("userDetails") || [];

  // Get user details from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Check if name and email are not empty
  if (name.trim() !== "" && email.trim() !== "") {
    // Create a user object with the details
    const userDetails = {
      name: name,
      email: email,
    };

    // Add the new user details to the existing list
    existingUserDetails.push(userDetails);

    // Serialize and store the updated user details in local storage
    serialize("userDetails", existingUserDetails);

    // Display the user details on the screen
    displayUserDetails(existingUserDetails);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }
});
