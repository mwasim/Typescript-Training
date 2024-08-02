/*
  Declare and interface to ensure class shape
  - -Using interface to establish a Code Contract
  When to use interfaces
    - Because JavaScript does not have a concept of interfaces, they are removed when TypeScript is transpiled to JavaScript. 
    TypeScript allows you to use an interface to 
      - define a data structure without the need for a class. 
      - use interfaces to define parameter objects for functions, 
      - define the structure for various framework properties, 
      - define how objects look from remote services or APIs.
*/
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

/*
    Class Definition

    When to use classes
      - Classes allow you to define implementation details. 
      - Interfaces solely define how data is structured. 
      - Classes allow you to define methods, fields, and properties. 
      - Classes also provide a way to template objects, defining default values.
*/
class Car implements Vehicle {
  //Properties
  private static numberOfCards: number = 0;
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

    Car.numberOfCards++;
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
  protected worker() {
    return this._make;
  }

  public static getNumberOfCards() {
    return Car.numberOfCards;
  }
}
console.log("Defining and Instantiating Classes Demo");
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

console.log(Car.getNumberOfCards());
console.log("\n");

/*
  Extending Classes
*/

console.log("Extending Classes Demo");
class ElectricCar extends Car {
  //Properties
  private _range: number;

  //Constructor
  constructor(make: string, color: string, range: number, doors: number = 2) {
    super(make, color, doors);

    this._range = range;
  }

  //Accesssors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  //Methods
  //override brake method with different implementation
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`;
  }

  charge() {
    return `${this.worker()} is charging.`;
  }
}

//Instantiating Electric Car
let spark = new ElectricCar("Spark Electric Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
console.log(spark.charge()); // returns "Spark Electric Motors is charging"
console.log(spark.brake());
