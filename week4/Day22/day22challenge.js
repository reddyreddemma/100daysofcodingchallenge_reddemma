// Selecting by ID
let elementById = document.getElementById("myElementId");

// Selecting by class name
let elementsByClass = document.getElementsByClassName("myClassName");

// Selecting by tag name
let elementsByTag = document.getElementsByTagName("div");

// Selecting by CSS selector
let elementBySelector = document.querySelector(".myClass");
// Changing content
elementById.innerHTML = "New Content";

// Changing attributes
elementById.setAttribute("src", "newImage.jpg");

// Creating new elements
let newElement = document.createElement("p");
newElement.innerHTML = "This is a new paragraph.";
document.body.appendChild(newElement);

// Removing elements
document.body.removeChild(elementById);
// Adding an event listener
elementById.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Event object
elementById.addEventListener("mouseover", function (event) {
  console.log(Mouse over at coordinates: ${event.clientX}, ${event.clientY});
});

// Removing an event listener
function handleClick() {
  console.log("Button clicked!");
}

elementById.addEventListener("click", handleClick);
elementById.removeEventListener("click", handleClick);
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" required />
  <span id="usernameError" style="color: red;"></span>

  <label for="password">Password:</label>
  <input type="password" id="password" required />
  <span id="passwordError" style="color: red;"></span>

  <button type="submit">Submit</button>
</form>
document.getElementById("myForm").addEventListener("submit", function (event) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 5) {
    document.getElementById("usernameError").innerHTML =
      "Username must be at least 5 characters";
    event.preventDefault(); // Prevent form submission
  } else {
    document.getElementById("usernameError").innerHTML = "";
  }

  if (password.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "Password must be at least 8 characters";
    event.preventDefault(); // Prevent form submission
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
});
