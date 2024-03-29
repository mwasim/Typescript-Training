/************** Objects ***************/

const ObjectsTutorial = () => {
  console.log("\n*********** OBJECTS in TypeScript ***********");

  let car: {
    brand: string;
    year: number;
  } = {
    brand: "Toyota",
    year: 2020,
    //color: 'red' //adding key-value for type that doesn't existing - ERROR - color doesn't exist in type annotation
  };

  //Using dot notation
  car.brand = "Ford"; //VALID
  //car.color = "blue"; //ERROR - color doesn't exist in type annotation

  console.log(`car brand: ${car.brand}, year: ${car.year}`);

  //object must be instantiated based on the type annotation specified.
  let car1: {
    brand: string;
    year: number;
  } = {
    brand: "Honda",
    year: 2022,
    //color: 'grey' //adding key-value for type that doesn't existing - ERROR - color doesn't exist in type annotation
  };
  console.log(`car brand: ${car1.brand}, year: ${car1.year}`);

  console.log("\n*********** ARRAYS & OBJECTS in TypeScript ***********");
  let book = { title: "book", cost: 25 };
  let pen = { title: "pen", cost: 5 };
  let noteBook = { title: "notebook" };

  //We want to store these objects in the array below assuming all items have same shape/type
  //setting the cost field as optional removes the error
  let items: { readonly title: string; cost?: number }[] = [
    book,
    pen,
    noteBook,
  ];

  items.forEach((item) => {
    console.log(`title: ${item.title}, cost: ${item.cost}\n`);
  });

  //items[0].title = "new book"; //ERROR: readonly properties cannot be modified
};

export default ObjectsTutorial;
