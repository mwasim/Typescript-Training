/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */

/*  Create a the Loans namespace. */

//moved to the loans file
// namespace Loans {
//   export interface Loan {
//     principle: number;
//     interestRate: number; //* Interest rate percentage (eg. 14 is 14%)
//   }
//   export interface ConventionalLoan extends Loan {
//     months: number; //* Total number of months
//   }
// }

/*  Create LoanPrograms namespace. */
//Moved to the loan_programs.ts file
// namespace LoanPrograms {
//   /*  Update the calculateInterestOnlyLoanPayment function. */
//   export function calculateInterestOnlyLoanPayment(
//     loanTerms: Loans.Loan
//   ): string {
//     let payment: number;
//     payment =
//       loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
//     return "The interest only loan payment is " + payment.toFixed(2);
//   }
//   /*  Update the calculateConventionalLoanPayment function. */
//   export function calculateConventionalLoanPayment(
//     loanTerms: Loans.ConventionalLoan
//   ): string {
//     let interest: number = calculateInterestRate(loanTerms.interestRate);
//     let payment: number;
//     payment =
//       (loanTerms.principle * interest) /
//       (1 - Math.pow(1 / (1 + interest), loanTerms.months));
//     return "The conventional loan payment is " + payment.toFixed(2);
//   }
//   export function calculateInterestRate(interestRate: number): number {
//     let interest: number = interestRate / 1200;
//     return interest;
//   }
// }

/*  Add reference paths. */
/// <reference path="module08_loans.ts"/>
/// <reference path="module08_loan_programs.ts"/>

/*  Update the function calls. */

let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({
  principle: 30000,
  interestRate: 5,
});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({
  principle: 30000,
  interestRate: 5,
  months: 180,
});
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
