/*
    Named functions - get hoisted
*/
console.log("Named functions Demo:");
//Can access named function before it's decleration - gets hoisted
console.log("addTwoNumbers(6, 5): ", addTwoNumbers(6, 5));

//named functions (functions declared using function keyword get hoisted)
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}
console.log("\n");

/*
    Arrow functions (Lambda or Fat Arrow Functions) - do not get hoisted
*/
console.log("Arrow functions Demo:");
//Cannot access function before it's decleration - not hoisted
//console.log(addNumbers(3, 5)); //ERROR - Arrow functions do not get hoisted
const addNumbers = (x: number, y: number): number => {
  return x + y;
};
//can access arrow function after it's declared
console.log("addNumbers(3, 5): ", addNumbers(3, 5));

//single-line arrow functions
const addNumbers2 = (x: number, y: number): number => x + y; //Implicit return
console.log("addNumbers2(7, 5): ", addNumbers2(7, 5));
console.log("\n");

/*
    Anonymous Funtions or Function Expressions - do not get hoisted
    Must be declared before they can be called.
    
    Function expressions represent values so they're usually assigned 
    to a variable or passed to other functions, and can be anonymous, 
    meaning the function has no name.
*/
console.log("Anonymous Funtions or Function Expressions Demo:");
//console.log(addNumbersExp(8, 5)); //ERROR - Function expressions do not get hoisted
const addNumbersExp = function (x: number, y: number): number {
  return x + y;
};

console.log("addNumbersExp(8, 5): ", addNumbersExp(8, 5));

const sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) continue;

    total += Number(input[i]);
  }

  return total;
};
console.log("sum([1,2,3]): ", sum([1, 2, 3]));
console.log("\n");

/*
    Optional Parameters
*/
console.log("Optional Parameters Demo:");
const addNumbersWithOptionalParams = (x: number, y?: number): number => {
  if (y === undefined) return x;

  return x + y;
};
console.log(
  "addNumbersWithOptionalParams(7,8): ",
  addNumbersWithOptionalParams(7, 8)
);
console.log("\n");

/*
    Default Parameters
*/
console.log("Default Parameters Demo:");
const addNumbersWithDefaultParams = (x: number, y: number = 25): number => {
  if (y === undefined) return x;

  return x + y;
};
console.log(
  "addNumbersWithDefaultParams(8,9): ",
  addNumbersWithDefaultParams(8, 9)
);
console.log("addNumbersWithDefaultParams(7): ", addNumbersWithDefaultParams(7));
console.log("\n");

/*
    Rest Parameters
    The ellipsis (...) before restOfNumbers tells the compiler to build an array 
    of the arguments passed to the function and assigns the name that follows to it 
    so you can use it in your function.
*/
console.log("Default Parameters Demo:");
const addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let i = 0; i < restOfNumbers.length; i++) {
    if (isNaN(restOfNumbers[i])) continue;
    total += Number(restOfNumbers[i]);
  }

  return total;
};
console.log("addAllNumbers(1,2): ", addAllNumbers(1, 2));
console.log("addAllNumbers(2): ", addAllNumbers(2));
console.log("addAllNumbers(1,2,3,4,5): ", addAllNumbers(1, 2, 3, 4, 5));
console.log("\n");

/*
    Deconstructed object parameters

    - Function parameters are positional (must be passed in the order in which they're defined)
    - Positional parameters can make your code less-readable when calling a function with multiple 
      parameters that are optional or the same data type.
    - To enable named parameters, you can use a technique called deconstructed object parameters. 
        This technique enables you to use an interface to defined named, rather than positional, 
        parameters in your functions.  
*/
console.log("Deconstructed object parameters Demo:");
interface Message {
  text: string;
  sender: string;
}
const displayMessage = ({ text, sender }: Message): string => {
  return `Message from ${sender}: ${text}`;
};

console.log(
  "displayMessage({sender: 'John', text: 'Hello World!'}): ",
  displayMessage({ sender: "John", text: "Hello World!" })
);
console.log("\n");

/*
     Function types

    - You can define a function type using a type alias or an interface.
      Interface:   
        An interface is better if you want to have the option of extending the function type. 
      Type Alias:
        A type alias is better if you want to use unions or tuples.
*/
console.log("Function types Demo:");
console.log("Function types - Type Alias:");
//Below function type calculator can be used for operations like add, subtract etc.
type calculator = (x: number, y: number) => number; //(Notice that the syntax of the type signature is the same as an arrow function.)

//Now let's use function type calculator
const addNumbersCalc: calculator = (x: number, y: number): number => x + y;
const subtractNumbersCalc: calculator = (x: number, y: number): number => x - y;
console.log("addNumbersCalc(5,3): ", addNumbersCalc(5, 3));
console.log("subtractNumbersCalc(5,3): ", subtractNumbersCalc(5, 3));

//You can also use the calculator function type to pass values from another function.
const doCalculation = (operation: "add" | "subtract"): calculator => {
  if (operation === "add") return addNumbersCalc;
  else return subtractNumbersCalc;
};

console.log("doCalculation('add')(5,3): ", doCalculation("add")(5, 3));

console.log("\n");
console.log("Function types - Interface:");
interface Calculator {
  (x: number, y: number): number;
}

//Now let's use interface Calculator
const addNumbersICalc: Calculator = (x: number, y: number): number => x + y;
const subtractNumbersICalc: Calculator = (x: number, y: number): number =>
  x - y;
console.log("addNumbersICalc(5,3): ", addNumbersICalc(5, 3));
console.log("subtractNumbersICalc(5,3): ", subtractNumbersICalc(5, 3));

//You can also use the calculator function type to pass values from another function.
const doICalculation = (operation: "add" | "subtract"): Calculator => {
  if (operation === "add") return addNumbersICalc;
  else return subtractNumbersICalc;
};

console.log("doICalculation('add')(5,3): ", doICalculation("add")(5, 3));

console.log("\n");
