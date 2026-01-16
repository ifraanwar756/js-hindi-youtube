const score = 400
console.log(score);

const balance = new Number(100)  //now guarantee type is number
console.log(balance);

console.log(balance.toString().length);  //type of number will be string
console.log(balance.toFixed(2));  //100.00 --> upto 2 decimal values

const otherNumber = 23.58685
console.log(otherNumber.toPrecision(4)); //23.59 round off to 4 values

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //Give commas in indian no. system format

//******************** MATHS *************************

console.log(Math);
console.log(Math.abs(-4));      //4 --> turns -ve value into +ve
console.log(Math.round(4.6));   //5 --> round off to nearest value
console.log(Math.ceil(4.2));    //5 --> round up
console.log(Math.floor(4.9));   //4 --> round down
console.log(Math.min(4, 3, 8, 9));  //3 --> finds minimum value
console.log(Math.max(4, 3, 8, 9));  //9 --> finds maximum value

console.log(Math.random());       //returns any random value b/w 0 and 1 basically in decimals
console.log((Math.random() *  10) + 1);   //returns any random value not in decimal and greater than 0

