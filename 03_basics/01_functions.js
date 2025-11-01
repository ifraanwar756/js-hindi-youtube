function sayMyName(){
    console.log("I");
    console.log("F");
    console.log("R");
    console.log("A");
}

sayMyName() //calling of function

// 1 way to write function
function addTwoNumbers(number1, number2){  //give parameters
    console.log(number1 + number2);
}

addTwoNumbers(3, 5) //arguments 

//we can save the calling of function into the variable
const result = addTwoNumbers(10, 20)
//but when we print the result it gives undefined output
console.log("result:", result);

// 2 way to write function
function addTwoNumbers(number1, number2){  //give parameters
   let result2 = number1 + number2
    return result2         
    console.log("Ifra"); //after return nothing will be executed
}

const result2 = addTwoNumbers(100, 200)
console.log("Result:", result2);

// 3rd way to write function
function addTwoNumbers(number1, number2){  //give parameters
    return number1 + number2       
}

//checking if a user has logged in or not
function loginUserMessage(username = "SAM"){  //now if block is not executed because at least sam will be printed
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("Ifra")); 
console.log(loginUserMessage());  // if not pass any value ==> undefined just logged in

//when function have only one spread operator
function calculateCartPrice(...num1){   //it will print all the three arguments in the form of array due to spread operator
    return num1
}
console.log(calculateCartPrice(200, 400, 600));

//when function have parameter as well as spread operator
function calculateCartPrice(val1, val2, ...num1){   //it will print all the three arguments in the form of array due to spread operator
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 800)); //[600, 800]  200==>val1, 400==>val2, [600,800]==>num1

//handling objects with functions

const user = {
    username: "Ifra",
    course: "b-tech"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and course is ${anyObject.course}`);
}

handleObject(user) 

//we can also pass direct object into the function calling
handleObject({
    username: "Ifra",
    course: "Btech"
})

// handling array with function
const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(getArray));