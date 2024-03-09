### Synchronous vs. Asynchronous
Synchronous code executes line by line, blocking further execution until the current operation is completed. On the other hand, asynchronous code allows tasks to proceed without waiting for others to finish.

javascript
// Synchronous example
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous example
console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End");

// Callback example
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data Fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed after data is fetched.");
});

// Promise example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Fetched!");
      resolve();
    }, 2000);
  });
}

fetchData()
  .then(() => {
    console.log("Promise resolved. Continue with the next operation.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  // Fetching data from an API using Promises
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
