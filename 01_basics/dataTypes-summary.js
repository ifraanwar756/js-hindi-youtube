//PRIMITIVE
// 7 Types ---> String, Number, Boolean, Null, Undefined, Symbol, BigInt 


//NON PRIMITIVE (Reference)
//Array, Objects, Functions

//STATICALLY TYPED LANGUAGE
//When you declare data type before compiling
//examples --> Java, C, C++

//DYNAMICALLY TYPED LANGUAGE
//You don’t need to declare variable types explicitly.
//examples --> JavaScript, Python

//.................. PRIMITIVE DATA TYPE ...............

/*const Id = Symbol("123")               //use of symbol data type
const anotherId = Symbol("123");
console.log(Id === anotherId);

const BigInt = 423452344521515151n;    //use of bigInt

//................. REFERENCE DATA TYPE ...........

const heroes = ["Salman Khan", "Shahrukh Khan", "Ranbeer Kapoor"];   //use of array datatype

let myObj = {                 //use of object data type
    name: "Ifra Anwar" ,     //whatever written in curly braces is a object
    age: 22,
    course : Btech,
} 

const myFunction = function(){    //use of function datatype
    console.log("Hello World");

}*/

//*************************** STACK AND HEAP MEMORY **************************//

//Stack(Primitive).....Heap(Non Primitive)


//**************** EXAMPLE OF STACK***********************
let myYouTubeName = "ifraanwar" 

let anotherName = myYouTubeName
anotherName = "ifra"                 //in stack changes occur in copied value

console.log(myYouTubeName);
console.log(anotherName);


//****************** MORE EXAMPLE ************************
let a = 10;   // stored directly in stack
let b = a;    // copy of value is made
b = 20;

console.log(a);      // 10
console.log(b);     // 20 changing the value of b doesnt affect the value of a 


//****************** EXAMPLE OF HEAP**********************

let user1 = {                        
    email: "user1@google.com",
    upi: "ian@ybl"
}

let user2 = user1;                 //in heap changes occur in original value

user2.email = "user2@google.com"   //if changes occur in user2 user1 will automatically changed

console.log(user1.upi);
console.log(user2.email);

//************************ MORE EXAMPLE ***********************

let obj1 = { name: "Ifra" };
let obj2 = obj1;   // obj2 points to the same heap object

obj2.name = "Anwar";

console.log(obj1.name); // "Anwar" ✅ both refer to same object


