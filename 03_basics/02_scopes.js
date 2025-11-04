// declaring a variable globally it will be used anywhere inside the scope or outside the scope
let a = 10000
var b = 70     // var is not used in programming due to the problem of scope

if(true){
    let a = 20
    var b = 70000
    console.log("Inner loop:", a); // 20 ==> inside the loop
    console.log(b);
}

console.log("Outer loop:", a); // 10000 ==> outside the loop 
console.log(b); // 70000 thats why it is not used

function one(){
    const username = "Ifra"

    function two(){
        const website ="youtube"
        console.log(username);
    }
       // console.log(website);   // it will give error because scope of website is in function 2 only
        two()

}
one()

if(true) {
    const username = "Ifra"
    if(username === "Ifra"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);  //error ==> // scope of website is over
}
// console.log(username);  // error ==> scope of username is over

// ++++++++++++++++++++++ interesting concept +++++++++++++++++++++++++

// it will not give error if we call function before declaration
addOne(5)
function addOne(num){
    return num + 1
}


// one more way to declare function is holding it into variable 
// but it gives error if we call function before declaration

// addTwo(5) //error ==> function calling is before declaration
const addTwo = function(num){
    return num + 2
}
