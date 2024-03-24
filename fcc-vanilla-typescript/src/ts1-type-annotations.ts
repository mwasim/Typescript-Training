/************** Type Annotations ***************/

const TypeAnnotationsTutorial = () => {
  console.log("*********** Type Annotations Tutorial ***********");
  /*
    STRINGS
*/
  let personName: string = "John";
  personName = "Corner";
  personName = personName.toUpperCase();

  //personName = 10; //SYNTAX ERROR - TYPE NOT ASIGNABLE
  console.log(personName);

  /*
    NUMBERS
*/
  let amount: number = 10;
  amount = amount + 20;
  //amount = "five"; //SYNTAX ERROR - TYPE NOT ASIGNABLE
  console.log(amount);

  let number = 10; //TYPE IS INFERRED AS NUMBER
  //number = "string"; //SYNTAX ERROR - TYPE NOT ASIGNABLE

  /*
    BOOLEANS
*/
  let isValid: boolean = true;
  isValid = false;
  //isValid = "string"; //SYNTAX ERROR - TYPE NOT ASIGNABLE
  //isValid = 10; //SYNTAX ERROR - TYPE NOT ASIGNABLE
};

export default TypeAnnotationsTutorial;
