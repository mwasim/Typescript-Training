/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    Add and apply a type variable. */
class DataStore<T> {
  private _data: T[] = new Array<T>(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      alert("Index is greater than 10");
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }

  DisplayData() {
    this._data.forEach((element, index) => {
      console.log(`Item at ${index} = ${element}`);
    });
  }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added

console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'

//Test items as numbers.
const playerScores = new DataStore<number>();
playerScores.AddOrUpdate(0, 100);
playerScores.AddOrUpdate(1, 350);
playerScores.AddOrUpdate(0, 500);
playerScores.DisplayData();

//Test items as objects.
type Books = {
  title: string;
  author: string;
  pages: number;
};

let books = new DataStore<Books>();
books.AddOrUpdate(0, {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
});
books.AddOrUpdate(1, {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
});
books.DisplayData(); // returns { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 }
