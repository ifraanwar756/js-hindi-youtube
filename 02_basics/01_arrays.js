//javascript arrays are resizable

const myArr = [0, 1, 2, 3, 4, 5]         //way to declare array
const myColours = ["Pink", "Red", "Blue"]
console.log(myArr[1]);     //1 accessing array

const myArr2 = new Array(1, 2, 3, 4);   //other ways to declare array


//array methods
myArr.push(6)  
console.log(myArr);   //0123456  simply add value at the end of array


myArr.pop()     
console.log(myArr);   //012345 remove last value from the array

myArr.shift()        //remove an element from the beginning of array
console.log(myArr);  //12345

myArr.unshift(9);      //add an element in the beginning of array
console.log(myArr);    // 912345

console.log(myArr.includes(19));  //false because 19 does not exist in array
console.log(myArr.indexOf(3));   // 3 ==> return index of 3 value

const newArr = myArr.join();  // convert array into string datatype
console.log(newArr);
console.log(typeof newArr);

//slice, splice
console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)   //  return value from index 1 to 2 
console.log(myn1);              // [1,2]
console.log("B", myArr);      // didnt change the original array

const myn2 = myArr.splice(1, 3)  // [1,2,3] ---> return value from index 1 to 3 
console.log("C", myArr);
console.log(myn2);      // [0, 4, 5] ---> also it remove the values from original array

