// 1. Type Alias: create new type name, base on primitive types
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

type Student = {
  readonly id: number; // readonly: can create id, but not update
  name: string;
  age?: number; // optional
};

interface Student1 {
  readonly id: number;
  name: string;
  age?: number;
}

const studentA: Student = {
  id: 1,
  name: 'Alice',
};

const studentB: Student = {
  id: 2,
  name: 'Bob',
  age: 18,
};

// 2. Union type: a type formed from two or more other types
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface Student2 {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

let x: number | string = 1;
x = 'super';
x = 123;
x = false; // error

// 3. Intersection type: combine two or more other types
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
// }
interface Employee extends Identity, Contact {}
// type Employee = Identity & Contact;

// interface Customer {
//   name: string;
//   credit: number;
//   email: string;
//   phone: string;
// }
interface Customer extends BusinessPartner, Contact {}
// type Customer = BusinessPartner & Contact;

// 4. Declaration merging (only interface, not type): merge two or more interfaces have the same name
interface Teacher {
  id: number;
  name: string;
}

interface Teacher {
  age?: number;
  gender: 'male' | 'female';
}

const alice: Teacher = {
  id: 1,
  name: 'Alice',
  gender: 'female',
};
