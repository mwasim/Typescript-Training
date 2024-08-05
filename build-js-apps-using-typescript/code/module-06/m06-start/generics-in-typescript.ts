/*
    Non Generic Function Example
*/
console.log("*** Non Generic Functions Demo: ***\n");
const getArray = (items: any[]): any[] => {
  return new Array().concat(items);
};

const numbersArray = getArray([1, 2, 3, 4, 5]);
numbersArray.push(6);
console.log(numbersArray);

const stringArray = getArray(["one", "two", "three"]);
stringArray.push("four");
console.log(stringArray);
console.log("\n");

/*
    Generic Function Example

    -The type variable T can be used wherever the type annotation is needed
*/
console.log("*** Generic Functions Demo: ***\n");
function getArrayItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numbers = getArrayItems<number>([1, 2, 3, 4, 5, 6]);
numbers.push(7);
console.log(numbers);

const strItems = getArrayItems<string>(["one", "two", "three", "four", "five"]);
strItems.push("six");
console.log(strItems);
console.log("\n");
/*
    Generics - Using multiple type variables
*/
console.log("*** Generics - Using multiple type variables Demo: ***\n");
function identity<T, U>(value: T, message: U): T {
  //let result: T = value + value; //ERROR- cannot use + operator on operands of type T (because it's type is unknown)
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");
console.log("\n");

/*
    Generics - Using generic constraints to limit types
*/
console.log("*** Generics - Using multiple type variables Demo: ***\n");
//WAY-1: One way is to declare a custom type as a tuple and then extend the type variable with the custom type.
type IdentityValidTypes = number | string;
function identityConstrained<T extends IdentityValidTypes, U>(
  value: T,
  message: U
): T {
  //let result: T = value + value; //ERROR
  console.log(message);
  return value;
}

let returnNumber1 = identityConstrained<number, string>(100, "Hello!"); // OK
let returnString1 = identityConstrained<string, string>("100", "Hola!"); // OK
//let returnBoolean1 = identityConstrained<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

//WAY-2: You can also constrain a type to the property of another object.
// Here, K extends keyof T, ensuring that the key parameter is of the correct type for type assigned to pet.

function getPets<T, K extends keyof T>(pet: T, key: K): T[K] {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish"));
console.log(getPets(pets2, 3));
console.log("\n");

/*
    Generics - Using type guards with generics
    
    NOTE:
    You can only use a typeof type guard to check the primitive types string, number, bigint, function, boolean, symbol, object, and undefined. 
    To check the type of a class, use an instanceof type guard.
*/
console.log("*** Generics - Using type guards with generics Demo: ***\n");
function identityTypeGuard<T extends IdentityValidTypes, U>(
  value: T,
  message: U
): T {
  //let result: T = value + value; //ERROR

  let result: IdentityValidTypes = "";
  let typeValue: string = typeof value;

  //You can use the typeof type guard in an if block to check the type of the value parameter
  if (typeof value === "number") {
    result = value + value;
  } else if (typeof value === "string") {
    result = value + value;
  }

  //console.log(message);
  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return value;
}

let numberValue = identityTypeGuard<number, string>(100, "Hello");
let stringValue = identityTypeGuard<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
console.log("\n");

/*
  Declare a generic interface
*/
console.log("*** Declare a generic interface Demo: ***\n");
interface Identity<T, U> {
  value: T;
  message: U;
}

let returnNumber2: Identity<number, string> = {
  value: 100,
  message: "Hello",
};
let returnString2: Identity<string, number> = {
  value: "Hello",
  message: 100,
};

console.log(returnNumber2);
console.log(returnString2);
console.log("\n");

/*
  Declare a generic interface as a function type
*/
console.log("*** Declare a generic interface as a function type Demo: ***\n");
interface ProcessIdentity<T, U> {
  //Notice that the method doesn't have a name.
  //By doing this, you can apply it to any function with a matching type signature.
  (value: T, message: U): T;
}

//Declare a function called processIdentity that has the same type signature as the ProcessIdentity interface.
function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

//Declare a function type variable called processor with the ProcessIdentity interface as the variable type,
//Then, assign the processIdentity function to it.
const processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber3 = processor(50, "Hello!");
//let returnString3 = processor("Hello", 50); // Type check error

console.log(returnNumber3);
//console.log(returnString3);
console.log("\n");

/*
  Declare a generic interface as a class type
*/
console.log("*** Declare a generic interface as a class type Demo: ***\n");
interface ProcessIdentity2<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIdentity2<T, U> implements ProcessIdentity2<T, U> {
  value: T;
  message: U;

  constructor(val: T, msg: U) {
    this.value = val;
    this.message = msg;
  }

  process(): T {
    console.log(this.message);
    return this.value;
  }
}

//using generic class
const processor2 = new processIdentity2<number, string>(65, "Hello");
processor2.process();
//processor2.value = "100"; // Type check error
console.log("\n");

/*
  Implement generics with custom types and classes
*/
console.log("*** Generics with custom types and classes Demo: ***\n");
class Car {
  make: string = "Generic Car";
  doors: number = 4;
}

class ElectricCar extends Car {
  make: string = "Electric Car";
  doors: number = 4;
}

class Truck extends Car {
  make: string = "Truck";
  doors: number = 2;
}

function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} are closed.`);
  console.log(`The ${car.make} is now accelerating!`);

  return car;
}

const myElectricCar = new ElectricCar();
accelerate(myElectricCar);
const myTruck = new Truck();
accelerate(myTruck);
console.log("\n");
