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

// Testing the interface
const teacher3: Teacher = {
  firstName: 'Mary',
  fullTimeEmployee: false,
  lastName: 'Brown',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Defining the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Testinhg the interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
