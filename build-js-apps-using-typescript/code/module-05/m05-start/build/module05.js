"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
class BuildArray {
    // Define the constructor
    constructor(items, sortOrder) {
        // Define the methods
        this.build = () => {
            let randomNumbers = [];
            let nextNumber;
            for (let counter = 0; counter < this.items; counter++) {
                nextNumber = Math.ceil(Math.random() * (100 - 1));
                if (randomNumbers.indexOf(nextNumber) === -1) {
                    randomNumbers.push(nextNumber);
                }
                else {
                    counter--;
                }
            }
            if (this.sortOrder === "ascending") {
                return randomNumbers.sort(this.sortAscending);
            }
            else {
                return randomNumbers.sort(this.sortDescending);
            }
        };
        //Helper or private methods
        //we can use arrow functions too!
        this.sortDescending = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.sortAscending = (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }
}
/*  sortDescending is a comparison function that tells the sort method how to sort numbers
    in descending order. */
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortAscending is a comparison function that tells the sort method how to sort numbers
    in ascending order. */
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
/*  buildArray builds an array of unique random numbers containing the number of items
    based on the number passed to it. The sortOrder parameter determines whether to sort
    the array in ascending or descending order. */
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === "ascending") {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
/*  TODO: Instantiate the BuildArray objects. */
console.log("Functions based implementation - RESULTS:");
let testArray1 = buildArray(12, "ascending");
let testArray2 = buildArray(8, "descending");
console.log(testArray1);
console.log(testArray2);
console.log("\n");
console.log("Class based implementation - RESULTS:");
let testBuildArr1 = new BuildArray(12, "ascending");
let testBuildArr2 = new BuildArray(8, "descending");
console.log(testBuildArr1.build());
console.log(testBuildArr2.build());
console.log("\n");
