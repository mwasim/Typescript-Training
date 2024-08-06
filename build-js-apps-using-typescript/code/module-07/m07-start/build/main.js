"use strict";
/*
    Importing libraries
    - In TypeScript, you gain access to them by using the import statement.

    Type libraries
    - he open-source project DefinitelyTyped is a repository of TypeScript type definitions for many popular JavaScript libraries.

    Go to DefinitelyTyped and search for the dotenv type library. DefinitelyTyped will provide the name of the library to install and other implementation details.
    1). npm install dotenv // install the dotenv type library
    2). npm install --save-dev @types/node @types/dotenv //node provides access to process.env so you can access it from your code.

    //Create a new file in the root directory of your project called .env. This file will contain environment-specific variables for the project.
    //Below, demo code example shows how to check for errors and use variables from .env file.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
/*
    config reads your .env file, parses the contents,
    assigns it to process.env, and returns an object with a
    parsed key containing the loaded content or an error key if it failed.
*/
const result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
//Return the contents of the parsed property to the console.
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
//Access the values contains in each key in process.env and return the value to the console.
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
