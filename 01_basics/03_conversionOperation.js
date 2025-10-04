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
