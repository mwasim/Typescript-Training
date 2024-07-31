"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = loan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loan.principal * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}
/*  Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment =
        (conventionalLoan.principal * interest) /
            (1 - Math.pow(1 / (1 + interest), conventionalLoan.months));
    return "The conventional loan payment is " + payment.toFixed(2);
}
const loan = {
    principal: 30000,
    interestRate: 5,
};
let interestOnlyPayment = calculateInterestOnlyLoanPayment(loan);
const conventionalLoan = {
    principal: loan.principal,
    interestRate: loan.interestRate,
    months: 180,
};
let conventionalPayment = calculateConventionalLoanPayment(conventionalLoan);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
