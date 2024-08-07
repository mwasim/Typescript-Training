/*
    Organize code by using single file namespaces
*/
console.log("Single file namespaces demo");
namespace Greetings {
  export const returnGreeting = (greeting: string) => {
    console.log(`namespace: Greetings, greeting: ${greeting}`);
  };
}
namespace GreetingsWithLength {
  export const returnGreeting = (greeting: string) => {
    let greetingLength = getLength(greeting);
    console.log(
      `namespace: GreetingsWithLength, greeting: ${greeting}, length: ${greetingLength}`
    );
  };
  function getLength(message: string): number {
    return message.length;
  }
}

Greetings.returnGreeting("Hello");
GreetingsWithLength.returnGreeting("Hola");
console.log("\n");

/*
    Organize code using nested namespaces
*/
console.log("Nested namespaces demo");
namespace AllGreetings {
  export namespace HelloNamespace {
    export const hello = (message: string) =>
      console.log(`namespace: HelloNamespace, message: ${message}`);
  }

  export namespace HolaNamespace {
    export const hola = (message: string) =>
      console.log(`namespace: HolaNamespace, message: ${message}`);
  }
}

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

import greet = AllGreetings.HelloNamespace;
greet.hello("Hello");
console.log("\n");

/*
    Note
    It is not recommended to combine namespaces and modules in the same project.
*/
