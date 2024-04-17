// main.ts

// Defining the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}
// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// Define the interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the StudentClass
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Testing the interface
const teacher3: Teacher = {
  firstName: 'Mary',
  fullTimeEmployee: false,
  lastName: 'Brown',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Testing the interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Testing the printTeacher function
console.log(printTeacher('John', 'Doe'));

// Testing the StudentClass
const student1 = new Student('John', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName()); 
