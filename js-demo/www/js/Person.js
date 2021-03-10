// named export
export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// webpack can drop this code from the bundle
export const SomeValue = "test";

export default Person;
