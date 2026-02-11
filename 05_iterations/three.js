// for of loop --> for array 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

// for of loop --> for string
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); 
}

// maps
// no duplicate values only unique values will be printed
// take care of order values will be printed in the same order 
const map = new Map()
map.set("IN", "India")
map.set(`Fr`, "France")
map.set(`UK`, "United Kingdom")
map.set(`IN`, "India")         // not print only 1st value of india will be printed
console.log(map);

for (const [key,value] of map) {
    console.log(key, `:-`, value);
}

