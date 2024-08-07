"use strict";
/*
    Organize code by using single file namespaces
*/
console.log("Single file namespaces demo");
var Greetings;
(function (Greetings) {
    Greetings.returnGreeting = (greeting) => {
        console.log(`namespace: Greetings, greeting: ${greeting}`);
    };
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    GreetingsWithLength.returnGreeting = (greeting) => {
        let greetingLength = getLength(greeting);
        console.log(`namespace: GreetingsWithLength, greeting: ${greeting}, length: ${greetingLength}`);
    };
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
Greetings.returnGreeting("Hello");
GreetingsWithLength.returnGreeting("Hola");
console.log("\n");
/*
    Organize code using nested namespaces
*/
console.log("Nested namespaces demo");
var AllGreetings;
(function (AllGreetings) {
    let HelloNamespace;
    (function (HelloNamespace) {
        HelloNamespace.hello = (message) => console.log(`namespace: HelloNamespace, message: ${message}`);
    })(HelloNamespace = AllGreetings.HelloNamespace || (AllGreetings.HelloNamespace = {}));
    let HolaNamespace;
    (function (HolaNamespace) {
        HolaNamespace.hola = (message) => console.log(`namespace: HolaNamespace, message: ${message}`);
    })(HolaNamespace = AllGreetings.HolaNamespace || (AllGreetings.HolaNamespace = {}));
})(AllGreetings || (AllGreetings = {}));
AllGreetings.HelloNamespace.hello("Hello"); // OK
AllGreetings.HolaNamespace.hola("Hola"); // OK
console.log("\n");
console.log("Namespace alias demo");
/*
    Defining a namespace alias

    As your nested namespaces become more complex,
    you may want to create an alias to shorten and simplify your code.
    To do this, use the import keyword.
*/
var greet = AllGreetings.HelloNamespace;
greet.hello("Hello");
console.log("\n");
/*
    Note
    It is not recommended to combine namespaces and modules in the same project.
*/
