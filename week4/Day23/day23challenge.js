javascript
// Change element style
element.style.color = "red";

// Toggle class
element.classList.toggle("active");
// Navigate to parent, child, or sibling elements
let parent = element.parentNode;
let firstChild = element.firstChild;
let nextSibling = element.nextSibling;
// Get attribute value
let srcValue = image.getAttribute("src");

// Set attribute value
image.setAttribute("alt", "New Alt Text");
// Create a new element
let newElement = document.createElement("div");

// Append element to parent
parent.appendChild(newElement);
// Remove element
parent.removeChild(element);
// Example: Save a task list to local storage
function saveTasksToLocalStorage() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  // Extract tasks from the list
  taskList.childNodes.forEach((task) => {
    if (task.nodeType === 1) tasks.push(task.innerText);
  });

  // Save tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Example: Load a task list from local storage
function loadTasksFromLocalStorage() {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Add tasks to the list
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
  });
}
