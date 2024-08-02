"use strict";
/*
    Class Definition

    When to use classes
      - Classes allow you to define implementation details.
      - Interfaces solely define how data is structured.
      - Classes allow you to define methods, fields, and properties.
      - Classes also provide a way to template objects, defining default values.
*/
class Car {
    //Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
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
        }
        else {
            throw new Error("doors must be an even number.");
        }
    }
    //Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to spped ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with standard braking system`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    //This method performs work for other methods
    worker() {
        return this._make;
    }
    static getNumberOfCards() {
        return Car.numberOfCards;
    }
}
//Properties
Car.numberOfCards = 0;
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
    //Constructor
    constructor(make, color, range, doors = 2) {
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
    brake() {
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
