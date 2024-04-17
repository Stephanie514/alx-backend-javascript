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
