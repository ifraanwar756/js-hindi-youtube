let ifraAge = 22;
let zohaAge = "16";

console.log(typeof ifraAge);  //number
console.log(typeof zohaAge);  //string bcoz double quotes

let zohaAgeInNumber = Number(zohaAge)  //now zoha age will bw printed in number
console.log(zohaAgeInNumber);

let aliyaAge = "46abc";
let aliyaAgeInNumber = Number(aliyaAge);
console.log(typeof aliyaAgeInNumber); //its type is still a Number
console.log(aliyaAgeInNumber);       //but it will not print a number and give NaN result 

let kashishAge = null;
let kashishAgeInNumber = Number(kashishAge);
console.log(typeof kashishAge);   //type of null is object
console.log(kashishAgeInNumber); //Null value in number will return 0 

let anwarAge = undefined;
let anwarAgeInNumber = Number(anwarAge);
console.log(typeof anwarAge);   //type of undefine is undefine
console.log(anwarAgeInNumber);  //NaN

let swatiAge = true;
let swatiAgeInNumber = Number(swatiAge);
console.log(typeof swatiAge);   //type of true is boolean
console.log(swatiAgeInNumber);  //1 (false value is 0)

let riyaAge = 1;
let riyaAgeInNumber = Boolean(riyaAge);
console.log(typeof riyaAgeInNumber);   //type of 1 is boolean
console.log(riyaAgeInNumber);  //true

let priyaAge = "";
let priyaAgeInNumber = Boolean(priyaAge);
console.log(typeof priyaAgeInNumber);   //type of "" is boolean
console.log(priyaAgeInNumber);    //false

//............................OPERATIONS IN JAVASCRIPT..........................

console.log("1" + 2);      //12 treated all as string
console.log(1 + "2");      //12 add then combine with string
console.log("1" + 2 + 2);  //122 all treated as string
console.log(1 + 2 + "2");  //32 first add then combine with string


console.log("1" + 2);

//*******increment operator*******//

let x = 5;

console.log(++x); // Output: 6 (first increment, then print)
console.log(x);   // Output: 6

x = 5;
console.log(x++); // Output: 5 (first print, then increment)
console.log(x);   // Output: 6

//*******decrement operator*******//

let y = 10;

console.log(--y); // Output: 9 (decrement first)
console.log(y);   // Output: 9

y = 10;
console.log(y--); // Output: 10 (print first)
console.log(y);   // Output: 9






