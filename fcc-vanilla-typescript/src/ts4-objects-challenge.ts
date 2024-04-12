/*
    OBJECTS Challenge
    Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
    Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
    Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
*/

const ObjectsChallenge = () => {
  console.log("\n*********** OBJECTS Challenge ***********");

  //1. Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
  let bike: { brand: string; year: number } = { brand: "Honda", year: 2021 };
  //bike.year = '2022'; //ERROR - cannot assign string to number
  console.log(`bike brand: ${bike.brand}, year: ${bike.year}`);

  //2. Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
  let laptop: { brand: string; year: number } = { brand: "DELL", year: 2023 };
  //laptop.color = "black"; //ERROR - color doesn't exist in type annotation
  console.log(`laptop brand: ${laptop.brand}, year: ${laptop.year}`);

  //3. Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
  let clock = { title: "clock", price: 15 };
  let charger = { title: "charger", price: 5 };
  let flower = { title: "flower" };

  let items: { title: string; price?: number }[] = [clock, charger, flower];
  //items.push({ title: `glass`, price: `expensive`}); //ERROR: string is not assignable to number
  items.forEach((item) => {
    console.log(`title: ${item.title}, cost: ${item.price}\n`);
  });
};

export default ObjectsChallenge;
