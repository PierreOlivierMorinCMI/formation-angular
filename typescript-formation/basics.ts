// // Primitives
// let age: number;

// let username: string;
// username = "P-O";

// let hobbies: boolean = true;

// let array: string[];
// array = ["test", "apple", "pineapple"];

// // type inference.

// let course: string | number = "React - the complete Guide";

// course = 12342;

// // type creation

// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person;

// person = {
//   name: "allo",
//   age: 2,
// };

function print(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 52);

class Student {
  firstName: string;
  lastName: string;
  age: number;
  courses: string[];

  constructor(first: string, lastname: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = lastname;
    this.age = age;
    this.courses.push(...courses);
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }
}

const student = new Student("Max", "shwarz", 32, [
  "angular",
  "francais",
  "anglais",
]);

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;
max = {
  firstName: "P-O",
  age:32,
  greet(){
    console.log('Hello');
  }
};

class Instructor implements Human{
  firstName: string;
  age: number;
  greet() {
    console.log('Hello');
  }
};
