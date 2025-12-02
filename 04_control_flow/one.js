// if statement

if(true){   // if condition true then code executed otherwise not

}

if(2 == "2"){  // not checking type code will be executed
    console.log("executed");
}

if(2 === "2"){  // checking type code will not be executed
    console.log("not executed");
}

// short hand statement
const balance = 1000
if(balance > 500) console.log("test") , console.log("tested"); // dont use comma to write more code it is a bad practice

// nested conditions

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");

}
else if (balance < 950){
    console.log("less than 950");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){  // checks both condition
    console.log("allow to shopping");
}

if(loggedInFromGoogle || loggedInFromEmail){   // if one conditiom true code will work
    console.log("user logged in");
}