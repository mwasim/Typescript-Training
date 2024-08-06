"use strict";
/*  Module 7: Working with external libraries
    Lab Start */
Object.defineProperty(exports, "__esModule", { value: true });
/*  Add the import statement. */
const module07_loan_programs_1 = require("./module07_loan-programs");
/*  Update the function calls. */
const loan = {
    principle: 30000,
    interestRate: 5,
};
const conventionalLoan = {
    principle: 30000,
    interestRate: 5,
    months: 180,
};
let interestOnlyPayment = (0, module07_loan_programs_1.calculateInterestOnlyLoanPayment)(loan);
let conventionalLoanPayment = (0, module07_loan_programs_1.calculateConventionalLoanPayment)(conventionalLoan);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
