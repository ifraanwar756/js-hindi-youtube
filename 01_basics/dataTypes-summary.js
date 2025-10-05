//PRIMITIVE
// 7 Types ---> String, Number, Boolean, Null, Undefined, Symbol, BigInt 


//NON PRIMITIVE (Reference)
//Array, Objects, Functions

//STATICALLY TYPED LANGUAGE
//When you declare data type at the before compiling
//examples --> Java, C, C++

//DYNAMICALLY TYPED LANGUAGE
//You don’t need to declare variable types explicitly.
//examples --> JavaScript, Python

//..................PRIMITIVE DATA TYPE...............

const Id = Symbol("123")               //use of symbol data type
const anotherId = Symbol("123");
console.log(Id === anotherId);

const BigInt = 423452344521515151n;    //use of bigInt

//.................REFERENCE DATA TYPE...........

const heroes = ["Salman Khan", "Shahrukh Khan", "Ranbeer Kapoor"];   //use of array datatype

let myObj = {                 //use of object data type
    name: "Ifra Anwar" ,     //whatever written in curly braces is a object
    age: 22,
    course : Btech,
} 

const myFunction = function(){    //use of function datatype
    console.log("Hello World");

}

