const user = {
    username: "Ifra",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) // this is used to access the object in current scope
        console.log(this); // all objects in this scope will print 
    }
}

user.welcomeMessage ()
user.username = "Sam"
user.welcomeMessage()

function chai(){
    let username = "Ifra"
    console.log(this.username);// undefined => cannot use "this" in functions it is working in objects only
}
chai()

// one more way to define function is through arrows
const chaye = () => {
    let username = "Ifra"
    console.log(this); // {} => because this contains no object i.e it is empty 
}
chaye()

// explicit arrow function => when you use return keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4,8)); 

// implicit arrow function => when you dont use return keyword
const add = (num1, num2) => (num1 + num2)  // dont write return keeyword just directly use in parenthesis
console.log(add(13, 5));

// when you want to return object

const user2 = () => ({username: "Ifra"}) // you have to wrap object in curly braces to return the object in arrow function
console.log(user2());


