/*
    UNION TYPES CHALLENGE
    1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
    2. Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
*/

const UnionTypesChallenge = () => {
  console.log("\n*********** Union Types Challenge ***********");

  //1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered'
  //and assign it the value 'processing'.Then, try to assign it the values 'shipped' and 'delivered'.
  let orderStatus: "processing" | "shipped" | "delivered" = "processing";

  //assign it the value 'processing'
  orderStatus = "shipped";
  orderStatus = "delivered";
  //orderStatus = 'cancelled'; //INVALID
  console.log(
    `typeof(orderStatus) = ${typeof orderStatus}, value = ${orderStatus}`
  );

  //2. Create a variable discount of type number | string and assign it the value 20.
  //Then, try to assign it the value '20%'.
  let discount: number | string = 20;
  console.log(`typeof(discount) = ${typeof discount}, value = ${discount}`);
  discount = "20%";
  console.log(`typeof(discount) = ${typeof discount}, value = ${discount}`);
  //discount = false; //boolean is not valid type
};

export default UnionTypesChallenge;
