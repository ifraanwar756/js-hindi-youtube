const tinderUser1 = new Object() //singleton method to declare an object
console.log(tinderUser1);  //it is an empty object

const tinderUser2 = {} //object declaration but it is also an empty object

tinderUser2.id = "123abc"
tinderUser2.name = "Sammy"
tinderUser2.isLoggedIn = false

console.log(tinderUser2);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Ifra",
            lastname:"Anwar"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = { 1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2) //concatinating objects
console.log(obj3);

const obj4 = {...obj1, ...obj2} //spread method to concatinate objects

const users = [          // objects are written in the form of an array
    {},
    {},
    {},
    {
        id: 1,
        email: "ifraanwar"
    },
    {
        id: 1,
        email: "ifraanwar"
    },
    {
        id: 1,
        email: "ifraanwar"
    },

]

users[1].email

console.log(Object.keys(tinderUser2)); // objects will print in the form of an array
console.log(Object.values(tinderUser2)); // to print values
console.log(Object.entries(tinderUser2)); // to print key values in the form of an array

console.log(tinderUser2.hasOwnProperty('isLoggedIn'));  // asking if tinderuser2 has this property or not

