console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);      //not prefered different data type comparison
console.log("02" > 1);
console.log(null > 0);     
console.log(null == 0);
console.log(null >=0);

let a = 5;
let b = '5';

//.........=== checks data type along with value...........//

console.log(a == b);   // true  → values are same
console.log(a === b);  // false → different types (number vs string)
console.log(a != b);   // false → values are same
console.log(a !== b);  // true  → types are different
console.log(a > 3);    // true
console.log(a <= 5);   // true
