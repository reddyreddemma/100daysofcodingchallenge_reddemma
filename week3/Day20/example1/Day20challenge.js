function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.displayInfo = function() {
    console.log(`This car is a ${this.make} ${this.model}.`);
  };
  
  const myCar = new Car('Toyota', 'Corolla');
  myCar.displayInfo(); // Output: This car is a Toyota Corolla.
