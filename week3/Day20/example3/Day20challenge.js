class Vehicle {
    constructor(wheels) {
      this.wheels = wheels;
    }
  
    displayWheels() {
      console.log(`This vehicle has ${this.wheels} wheels.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(4); // Calls the parent class's constructor with 4 as the number of wheels
      this.make = make;
      this.model = model;
    }
  }
  
  const myCar = new Car('Honda', 'Civic');
  myCar.displayWheels(); // Output: This vehicle has 4 wheels.
