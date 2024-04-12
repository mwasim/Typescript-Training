/************** ARRAYS ***************/

const ArraysTutorial = () => {
  console.log("\n*********** ARRAYS in TypeScript ***********");

  let prices: number[] = [110, 85, 32];
  prices.push(110);
  //prices.push('one'); //NOT VALID
  console.log(`typeof(prices) = ${typeof prices}`);
  console.log(`prices: ${prices}`);

  let fruits: string[] = ["apple", "orange"];
  fruits.push("banana");
  //fruits.push(10); //not valid
  //console.log(`typeof(fruits) = ${typeof fruits}`);
  console.log(`fruits: ${fruits}`);

  //let randomValues: [] = ['hello']; //ERROR: Target arrays allows ZERO items (type is empty array)
  //let emptyValues = []; //Now the type is any - Not recommended. Always use typed arrays

  let stringNumArray = ["John", "Jane", 1]; //Type is inferred as (string|number)[]
  console.log(`stringNumArray (Union Array): ${stringNumArray}`);
  let stringBoolArray: (string | boolean)[] = ["apple", true, "orange", false];
  console.log(`stringBoolArray (Union Array): ${stringBoolArray}`);
};

export default ArraysTutorial;
