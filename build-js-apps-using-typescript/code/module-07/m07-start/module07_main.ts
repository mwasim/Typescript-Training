/*  Module 7: Working with external libraries
    Lab Start */

/*  Add the import statement. */
import {
  calculateConventionalLoanPayment,
  calculateInterestOnlyLoanPayment,
} from "./module07_loan-programs";
import { Loan, ConventionalLoan } from "./module07_loans";

/*  Update the function calls. */
const loan: Loan = {
  principle: 30000,
  interestRate: 5,
};

const conventionalLoan: ConventionalLoan = {
  principle: 30000,
  interestRate: 5,
  months: 180,
};

let interestOnlyPayment = calculateInterestOnlyLoanPayment(loan);
let conventionalLoanPayment =
  calculateConventionalLoanPayment(conventionalLoan);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
