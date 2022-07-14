// Basics: Use concat to add values to an Array

const items: number[] = [1, 2, 3, 4, 5, 6];

const newItems: number[] = items.concat(7);

const anotherExample: number[] = items.concat([1, 2], [4, 5]);

const people = [
  {
    name: "Shane",
  },
  {
    name: "Aida",
  },
];
const people2 = [
  {
    name: "Shane",
  },
  {
    name: "Aida",
  },
];

const ex = people.concat(people2).forEach((person) => {
  console.log(person.name);
});

// -----------------------------------------------------

// Combine values of an Array into a String with Join

const names: string[] = ["S", "J"];

const nameWithSpace: string = names.join(" ");

const name2 = "shane osbourne";

const upper = name2
  .split(" ")
  .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  .join(" ");

// ---------------------

// Check if a value is in an Array with indexOf

const family: string[] = ["Giuseppe", "Shane", "Aida", "Isaac"];

const search: number = family.indexOf("Giuseppe"); // 1

const fail: number = family.indexOf("ciao"); // -1

const searchFailAgain: number = family.indexOf("Giuseppe", 1); // -1 Because start from index 1

// filter with indexOf

const whiteList: string[] = ["css", "js"];

const events = [
  {
    file: "css",
  },
  {
    file: "js",
  },
  {
    file: "index",
  },
];

const filter = events.filter((e) => {
  var ext = require("path").extname(e.file);
  return whiteList.indexOf(ext) > 1;
});

// Create a shallow copy of an array slice

const person = { name: "Shane" };
const items2 = [1, 2, 3, 4, 5];
const items3 = [1, person];

const copy = items2.slice();
const copy2 = items3.slice();
// @ts-ignore
copy2[1].name = "Ciao";

const slice = items2.slice(1, -1);

// console.log(copy)   [1,2,3,4,5]
// console.log(copy2)  [1, {name: "Ciao"}]
// console.log(slice)  [2,3,4,5,6,7]