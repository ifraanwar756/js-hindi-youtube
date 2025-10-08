let today = new Date();

console.log("toDateString():", today.toDateString());   // e.g., "Sun Oct 05 2025"
console.log("toTimeString():", today.toTimeString());   // e.g., "12:45:30 GMT+0530 (India Standard Time)"
console.log("toLocaleDateString():", today.toLocaleDateString()); // e.g., "05/10/2025"
console.log("toLocaleTimeString():", today.toLocaleTimeString()); // e.g., "12:45:30 pm"
console.log("toISOString():", today.toISOString());     // e.g., "2025-10-05T07:15:30.000Z"

let myCreatedDate = new Date(2023, 0, 23);   //show any date
let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 30);   //show any date with time
let myCreatedDateInDiffFormat = new Date("2023-01-14");   //show any date

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDateWithTime.toLocaleString());
console.log(myCreatedDateInDiffFormat.toLocaleString();

let now = Date.now();   // milliseconds since 1970 upto now
console.log("Current timestamp:", now);

// Convert timestamp to readable date
let readable = new Date(now);
console.log("Converted Date:", readable);
