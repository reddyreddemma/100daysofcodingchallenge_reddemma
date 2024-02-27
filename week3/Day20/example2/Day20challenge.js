class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`This car is a ${this.make} ${this.model}.`);
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla');
  myCar.displayInfo();
