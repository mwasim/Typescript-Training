/************** Functions ***************/

const FunctionsTutorial = () => {
  console.log("\n*********** Functions in TypeScript ***********");

  function sayHi(name: string) {
    console.log(`function called sayHi(${name}): Hello ${name.toUpperCase()}`);
  }

  sayHi(`Jane`);
  //sayHi(3); ERROR

  function calculateDiscount(price: number): number {
    const hasDiscount: boolean = true;
    if (hasDiscount) {
      return price * 0.9;
      //return "Discount applied"; //ERROR - return type mismatch
    }
    return price;
  }

  const price: number = 100;
  const finalPrice = calculateDiscount(100);
  console.log(`Discounted price for ${price} is ${finalPrice}`);
};

export default FunctionsTutorial;
