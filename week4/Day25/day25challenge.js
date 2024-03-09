### Using Async/Await with Functions

javascript
// Async/Await example
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log("Data from API:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchData();

// Fetch API example
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  // Async/Await with try/catch for error handling
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log("Data from API:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Uploading a file using Fetch API
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click", async () => {
  try {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://api.example.com/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("File upload failed");
    }

    const result = await response.json();
    console.log("Upload result:", result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
});
