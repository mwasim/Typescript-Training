"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let employee = {
    firstName: "John",
    lastName: "Corner",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log("Interface (Employee) Demo:");
console.log(employee.fullName());
console.log("\n");
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
console.log("Structural Type System Demo:");
console.log("ball", ball);
console.log("sphere", sphere);
sphere = ball;
ball = sphere;
console.log("After assigning ball to sphere", sphere);
console.log("\n");
let iceCream = {
    flavor: "Vanilla",
    scoops: 2,
    instructions: "Instructions to make the icecream...",
};
//console.log(iceCream.flavor);
let sundaeIceCream = {
    flavor: "Vanilla",
    scoops: 3,
    sauce: "chocolate",
    nuts: true,
};
console.log("Extending interfaces Demo:");
console.log("iceCream", iceCream.flavor);
console.log("Sundae iceCream - Extended", sundaeIceCream);
console.log("\n");
let myIceCream;
myIceCream = ["chocolate", "vanilla", "strawberry"];
console.log("Create Indexable Types Demo:");
console.log("interface as an Array", myIceCream);
console.log("\n");
/*
    Describe a JavaScript API using an interface
*/
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(fetchURL);
    const body = yield response.json();
    return body;
});
const showPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchPosts();
    // Display the contents of the first item in the response
    const firstPost = posts[0];
    console.log(`UserId: ${firstPost.userId}`);
    console.log(`ID: ${firstPost.id}`);
    console.log(`Title: ${firstPost.title}`);
    console.log(`Body: ${firstPost.body}`);
});
console.log("Describe a JavaScript API using an interface Demo:");
showPosts();
console.log("\n");
