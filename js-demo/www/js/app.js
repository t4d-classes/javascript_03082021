// named import
import { Person } from "./Person.js";
import MyPerson from "./Person.js";

const person = new Person("Bob", "Smith");

console.log(person.fullName());

const person2 = new MyPerson("Sally", "Timmons");
console.log(person.fullName());

const runUnit = async () => {
  const { doIt } = await import("./util.js");

  doIt();
};

runUnit();

// ES2020 Dynamic Import
// if (true) {
//   import("./util.js").then((m) => m.doIt());
// }
