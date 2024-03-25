/************** UNION TYPES ***************/

const UnionTypesTutorial = () => {
  console.log("\n*********** Union Types in TypeScript ***********");
  /*
    UNION TYPES
  */
  let tax: number | string = 15;
  tax = 100; //VALID
  tax = "$150"; //VALID

  //UNION TYPES - Literal value types
  let requestStatus: "pending" | "success" | "error" = "pending";
  requestStatus = "error"; //VALID
  requestStatus = "success"; //VALID
  //requestStatus = 'unknown'; //INVALID

  /*
    ANY TYPE -- Just be careful when you use it.
    - Can be anything number, string, boolean, function etc.
  */
  let notSure: any = 4;
  notSure = "maybe a string";
  notSure = true; //

  /*
    PRACTICAL APPLICATION OF TYPE ANNOTATIONS
  */
  const books = ["1984", "Brave new World", "Fahrenheit 451"];

  /*
    The reason to explicitly type foundBook as string | undefined is to make it clear to 
    anyone reading the code (including your future self) that foundBook might be undefined at runtime. 
    This is a good practice in TypeScript because it helps prevent bugs related to undefined values.
    */
  let foundBook: string | undefined; //Using undefined as a union types helps avoid runtime errors when it's not set

  for (let book of books) {
    if (book == `1983`) {
      foundBook = book;
      break;
    }
  }

  console.log(`Found book name length: ${foundBook?.length}`);
};

export default UnionTypesTutorial;
