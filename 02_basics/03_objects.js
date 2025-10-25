// singleton 
// Object.create ==> through constructor method

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Ifra",
    "full name" : "Ifra Anwar",  //there is no way to access ifra anwar using dot
    [mySym]: "myKey1",  // use square brackets to use symbol otherwise it will be considered as a string
    age: 23,
    location: "Bijnor",
    email:"ifraanwar@gmail.com",
    isLoggedIn: false,
    lastLogIn: ["Monday", "Saturday"]
}

console.log(JsUser.email);  // one way to access objects
console.log(JsUser["email"]);  //another way to access objects email is in double quotes because it is an string

console.log(JsUser["full name"]); //full name can be accessed only with this method 

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym); // string type ==> symbols are not defined in this way

JsUser.email = "ifra@chatgpt.com" // change the value of an object 
Object.freeze(JsUser) //freeze the valuue so that no one will change it
JsUser.email = "ifra@microsoft.com"  //after freezing no change in value 
console.log(JsUser); 

//functions in javascript
JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name} `); //this is used to refer the properties of the object 
}