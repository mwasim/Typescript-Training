/*
    Class Definition
*/
class Car {
  //Properties
  private _make: string;
  private _color: string;
  private _doors: number;

  //Constructor
  constructor(make: string, color: string, doors: number = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  //Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }

  get color() {
    return `The color of the car is: ${this._color}`;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("doors must be an even number.");
    }
  }

  //Methods
  accelerate(speed: number) {
    return `${this.worker()} is accelerating to spped ${speed} MPH.`;
  }

  brake() {
    return `${this.worker()} is braking with standard braking system`;
  }

  turn(direction: "left" | "right") {
    return `${this.worker()} is turning ${direction}`;
  }

  //This method performs work for other methods
  private worker() {
    return this._make;
  }
}

/*
    Instantiate the class
*/
const myCar1 = new Car("CoolrCarCompany", "blue", 2);
//console.log(myCar1._color);
console.log(myCar1.color);

//let myCar2 = new Car('Galaxy Motors', 'red', 3);

let myCar2 = new Car("Galaxy Motors", "red");
console.log(myCar2.doors);

console.log(myCar1.accelerate(35));
console.log(myCar1.turn("right"));
console.log(myCar1.brake());
