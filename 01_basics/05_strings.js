const name ="ifra"       //declare string
const repoCount = 3

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// MORE WAY TO DECLARE A STRING

const gameName = new String(`ifraanwar`);  //by making an object

console.log(gameName[0]);


// Declare a string
let str = "  JavaScript is Awesome!  ";
let str2 = "Learning JavaScript";

// ----------------------
// 🔹 Basic Info
// ----------------------
console.log("1️⃣ length:", str.length); // counts all characters including spaces

// ----------------------
// 🔹 Access Characters
// ----------------------
console.log("2️⃣ charAt(4):", str.charAt(4));     // a
console.log("3️⃣ charCodeAt(4):", str.charCodeAt(4)); // ASCII code of 'a'
console.log("4️⃣ [index]:", str[4]);              // Modern way to access character

// ----------------------
// 🔹 Searching
// ----------------------
console.log("5️⃣ indexOf('is'):", str.indexOf("is")); // 13
console.log("6️⃣ lastIndexOf('a'):", str.lastIndexOf("a")); // 5
console.log("7️⃣ includes('Awesome'):", str.includes("Awesome")); // true
console.log("8️⃣ startsWith('Java'):", str.trim().startsWith("Java")); // true
console.log("9️⃣ endsWith('!'):", str.trim().endsWith("!")); // true

// ----------------------
// 🔹 Extracting Parts
// ----------------------
console.log("🔟 slice(2, 13):", str.slice(2, 13));         // JavaScript
console.log("11️⃣ substring(2, 13):", str.substring(2, 13)); // JavaScript
console.log("12️⃣ substr(2, 10):", str.substr(2, 10));       // JavaScript

// ----------------------
// 🔹 Modifying / Changing Case
// ----------------------
console.log("13️⃣ toUpperCase():", str.toUpperCase()); // JAVASCRIPT IS AWESOME!
console.log("14️⃣ toLowerCase():", str.toLowerCase()); // javascript is awesome!
console.log("15️⃣ trim():", str.trim());               // removes spaces
console.log("16️⃣ trimStart():", str.trimStart());     // removes left spaces
console.log("17️⃣ trimEnd():", str.trimEnd());         // removes right spaces

// ----------------------
// 🔹 Replace and Repeat
// ----------------------
console.log("18️⃣ replace('Awesome', 'Powerful'):", str.replace("Awesome", "Powerful"));
console.log("19️⃣ replaceAll('a', 'A'):", str.replaceAll("a", "A"));
console.log("20️⃣ repeat(2):", "Hi ".repeat(2)); // Hi Hi

// ----------------------
// 🔹 Splitting and Concatenation
// ----------------------
console.log("21️⃣ split(' '):", str.trim().split(" ")); // ["JavaScript","is","Awesome!"]
console.log("22️⃣ concat():", str.concat(" ", str2));  // join string

// ----------------------
// 🔹 From & Raw methods (less common)
// ----------------------
console.log("24️⃣ String.fromCharCode(72,69,76,76,79):", String.fromCharCode(72,69,76,76,79)); // HELLO
console.log("25️⃣ String.raw`\\nHello`: ", String.raw`\nHello`); // \nHello
