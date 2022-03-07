// let hello: string = "Hello";
let hello = 'Hello';

// const cat: {
//   name: string;
//   weight: number;
// }
const cat = {
  name: 'tom',
  weight: 3,
};

// Literal type ============
// const hello1: "Hello";
const hello1 = 'Hello';

// const cat2: {
//   readonly name: "tom";
//   readonly weight: 3;
// }
const cat2 = {
  name: 'tom',
  weight: 3,
} as const;

// Type assertion ==========
function getStatusName(state: 'active') {
  console.log(state);
}

let s = 'active';
getStatusName(s); // error, since type of s is string, type of state is 'active' (literal type)
getStatusName(s as 'active'); // s also have 'active' type
