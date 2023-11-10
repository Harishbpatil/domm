// Put DOM elements into variables
const myForm = document.getElementById("my-form");

// Listen for form submit
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

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

    // Convert the user details to JSON and store in local storage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Display the local storage key and value in the console
    console.log("localStorage Key: userDetails");
    console.log("localStorage Value:", localStorage.getItem("userDetails"));
  }
});
