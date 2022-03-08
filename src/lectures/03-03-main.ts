// 1. Optional & default parameter
function getLength(numberList?: number[]): number {
  return Array.isArray(numberList) ? numberList.length : 0;
}

function getLength2(numberList: number[] = []): number {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// 2. Function overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // error

// 3. void type
function noop() {
  return;
}

function noop2() {}

// 4. never type
type NewType = number & string;

function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something
  } else {
    x; // has type 'never'
  }
}

// 5. Destructuring parameter
function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}
function createStudent1({ id, name, age }: { id: number; name: string; age: number }) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
});

interface Student4 {
  id: number;
  name: string;
  age: number;
}
function createStudent2({ id, name, age }: Student4) {
  console.log(id, name, age);
}
createStudent2({
  id: 2,
  name: 'Bob2',
  age: 18,
} as Student4);

// 6. Type compatibility table
