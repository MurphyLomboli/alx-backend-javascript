const Car = require('./10-car.js');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);
  }

  // Override the cloneCar method to return a Car object instead of an EVCar object
  cloneCar() {
    return super.cloneCar();
  }
}

// Example usage
const myEVCar = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
console.log(myEVCar);
console.log(myEVCar instanceof Car);
