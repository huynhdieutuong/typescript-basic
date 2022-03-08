// 1. Generics
interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['hello', 'world'];

interface Student5 {
  id: number;
  name: string;
}
const studentList: List<Student5> = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
];

// 2. keyof operator
type StudentKeys = keyof Student5; // convert keys to union type
// type StudentKeys = 'id' | 'name';
const key1: StudentKeys = 'id';
const key2: StudentKeys = 'name';

// 3. typeof operation: get type of a value
console.log(typeof 'hello world'); // 'string'
console.log(typeof 123); // 'number'
console.log(typeof false); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () {}); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on server

// Mapped type
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// copy type of FeatureFlags & change void to boolean
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
