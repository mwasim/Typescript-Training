/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = "typescript";
const courseName2 = "typescript";
const courseName3 = `typescript`;

const amount = 10;
const fraction = 10.5;
const oneThousand = 1e3;
const allPermissions = 0o777; //octal - starts with 0o
const hexByte = 0xfff; //starts with 0x - hexadecimal
const binary = 0b010001; //starts with 0b - binary number
const bigInt = 9000n; //ends with ltter n

//booleans
const yes = true;
const no = false;

const missing = undefined; //completely missing or undefine or does not exist
const empty = null; //we know it's missing

let someNum = 1;
someNum = 2;

//let someNum = 5; //cannot redefine the same variable

//To shadow the same variable, it can be declared in another code block
{
  let someNum = 5; //it's value is 5 only within this block
  //test code
}

let hello; //unintialized variable

hello = "hi";
hello = "hey";
hello = "hello";

//const oops; //ERROR - cannot declare uninitialized const variable
