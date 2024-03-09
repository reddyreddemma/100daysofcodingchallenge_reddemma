### Destructuring Arrays

javascript
// Destructuring array
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

// Destructuring object
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name, age, city); // Output: John 30 New York

// Spread operator for arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Rest operator for function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Template literals
const name = "Alice";
const age = 25;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Enhanced object literals
const firstName = "Bob";
const lastName = "Smith";

const person = {
  firstName,
  lastName,
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  },
};

person.greet(); // Output: Hello, Bob Smith!

// Building a contact list using destructuring and enhanced object literals
const contacts = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Destructuring and mapping to create a new array of enhanced objects
const enhancedContacts = contacts.map(({ id, name, email }) => ({
  id,
  name,
  email,
}));

console.log(enhancedContacts);
