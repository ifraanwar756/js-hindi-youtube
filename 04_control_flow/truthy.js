const userEmail = "ifra@123gmail.com" // if there is any value in user email whether it is string or array it will print (if part) otherwise else part
if (userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values --> "0", 'false', " ", [], {}, function(){}

// checking if array is empty or not
const user1 = []
if(user1.length === 0){
    console.log("Array is empty");
}

// checking if object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ // Objecct.keys(emptyObj) --> convert object to array , .length --> checking length of array
    console.log("Object is empty");
}

//nullish cascading operator

let val1, val2, val3, val4;
// val1 == 5 ?? 10
console.log(val1);             // 5
// val2 == null ?? 10          // if null comes then assign 10
console.log(val2);             // 10   
// val3 == undefined ?? 10     // if undefined comes then assign 10
console.log(val3);             //10
// val4 == null ?? 10 ?? 20
console.log(val4);             //10 whatever 1st value after null it will print that

/* ternary operator
condition ? true : false
*/

const machaPrice = 1000;
machaPrice >= 80 ? console.log("not affordable") : console.log("affordable");


