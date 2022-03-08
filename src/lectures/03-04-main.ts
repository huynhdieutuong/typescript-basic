// 1. Number enum
enum Status1 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

enum Status2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}

enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}

// can assign any number to your enum variable
const status1: Status1 = Status1.PENDING;
const status2: Status1 = 1;
const status3: Status1 = -1; // still not error

// support reverse mapping
console.log(Status1[0]); // 'PENDING'
console.log(Status1['DONE']); // 2

// 2. String enum
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((res) => {
  // ...
});

// don't support reverse mapping
MediaTypes['JSON']; // 'application/json'
MediaTypes['application/json']; // undefined
