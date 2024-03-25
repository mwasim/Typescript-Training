/*
    Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
    Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
    Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
*/

const ArrayChallenge = () => {
  console.log("\n*********** Arrays Challenge ***********");

  //1. Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
  let temperatures: number[] = [10, 15, 26];
  temperatures.push(30);
  //temperatures.push('32'); //INVALID
  console.log(`temperatures: ${temperatures}`);

  //2. Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
  let colors: string[] = ["red", "green", "blue"];
  colors.push("yellow");
  //colors.push(true); //INVALID
  console.log(`colors: ${colors}`);

  //3. Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
  let mixedArray: (number | string)[] = [12, "five", 25, "seven"];
  mixedArray.push(35);
  mixedArray.push("sixty");
  //mixedArray.push(true); //INVALID
  console.log(`mixedArray: ${mixedArray}`);
};

export default ArrayChallenge;
