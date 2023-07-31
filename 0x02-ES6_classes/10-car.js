class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters and Setters for the attributes
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Method to clone a Car object
  cloneCar() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }
}

const myCar = new Car('Toyota', 'Gasoline', 'Red');
const clonedCar = myCar.cloneCar();

console.log(myCar);
console.log(clonedCar);
