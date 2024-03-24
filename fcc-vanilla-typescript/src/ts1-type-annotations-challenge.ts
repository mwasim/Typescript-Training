/*
    CHALLENGE 1: Type Annotations
    Create a variable of type string and try to invoke a string method on it.
    Create a variable of type number and try to perform a mathematical operation on it.
    Create a variable of type boolean and try to perform a logical operation on it.
    Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
    You can use type annotation or inference
*/
const TypeAnnotationsChallenge = () => {
  console.log("\n*********** Type Annotations Challenge ***********");
  //1: Create a variable of type string and try to invoke a string method on it.
  let quote: string;
  quote =
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein";
  console.log(`Length: ${quote.length}`);

  //2: Create a variable of type number and try to perform a mathematical operation on it.
  let num: number = 16;
  console.log(`SquareRoot of ${num} = ${Math.sqrt(num)}`);

  //3: Create a variable of type boolean and try to perform a logical operation on it.
  let isNumber: boolean;
  let amount: string = `10`;
  isNumber = !isNaN(Number(amount));

  console.log(`Is ${amount} a Number? ${isNumber ? "YES" : "NO"}`);

  //4. Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
  // Uncommenting any of these will result in a TypeScript error
  //quote = num; //SYNTAX ERROR - TYPE NOT ASIGNABLE
  //num = quote; //SYNTAX ERROR - TYPE NOT ASIGNABLE
  //isNumber = num; //SYNTAX ERROR - TYPE NOT ASIGNABLE
};

export default TypeAnnotationsChallenge;
