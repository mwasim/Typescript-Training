/*
	Interfaces
*/
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Corner",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("Interface (Employee) Demo:");
console.log(employee.fullName());
console.log("\n");

/*
	Structural Type System
*/
// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

console.log("Structural Type System Demo:");
console.log("ball", ball);
console.log("sphere", sphere);

sphere = ball;
ball = sphere;

console.log("After assigning ball to sphere", sphere);
console.log("\n");

/*
	Extending interfaces
*/
//
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let iceCream: IceCream = {
  flavor: "Vanilla",
  scoops: 2,
  instructions: "Instructions to make the icecream...",
};

//console.log(iceCream.flavor);

let sundaeIceCream: Sundae = {
  flavor: "Vanilla",
  scoops: 3,
  sauce: "chocolate",
  nuts: true,
};

console.log("Extending interfaces Demo:");
console.log("iceCream", iceCream.flavor);
console.log("Sundae iceCream - Extended", sundaeIceCream);
console.log("\n");

/*
    Create Indexable Types
	For example, the IceCreamArray interface declares an index signature as a number and returns a string type. 
	This index signature states that IceCreamArrayis indexed with a number and it will return a string.
*/
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ["chocolate", "vanilla", "strawberry"];

console.log("Create Indexable Types Demo:");
console.log("interface as an Array", myIceCream);
console.log("\n");

/*
    Describe a JavaScript API using an interface
*/
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  const response = await fetch(fetchURL);
  const body = await response.json();

  return body as Post[];
};

const showPosts = async () => {
  const posts = await fetchPosts();

  // Display 3the contents of the first item in the response
  const firstPost = posts[0];
  console.log(`UserId: ${firstPost.userId}`);
  console.log(`ID: ${firstPost.id}`);
  console.log(`Title: ${firstPost.title}`);
  console.log(`Body: ${firstPost.body}`);
};

console.log("Describe a JavaScript API using an interface Demo:");
showPosts();
console.log("\n");
