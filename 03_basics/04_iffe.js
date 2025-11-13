// immediately invoked function expression is used to remove the pollution created by global variables
// and it helps in executing the function immediately
(function chai(){
    console.log(`DG CONNECTED`);
})();   // putting semicolon to stop the function is important here otherwise next function will not be executed

( function aurCode(){
    console.log(`DG CONNECTED TWO`);
})();

// We can also use iife in arrow function 

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Ifra");