class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  }
  
  let person = new Person('Alice');
  console.log(person.name); // Output: Alice
  person.name = 'Bob';
  console.log(person.name); // Output: Bob
