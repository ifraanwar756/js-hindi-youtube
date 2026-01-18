// for loop
// printing simple numbers from 0 to 10
for(let i = 0 ; i <= 10; i++){

    // can also add if condition between the loops
    if(i == 5){
        console.log("5 is the best number");
    }

    console.log("number is:", i);
}

// for understanding purpose
for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
       // console.log(`Inner Loop value: ${j} and inner loop element: ${i}`);   // for understanding purpose
        
    }
    
}

// Printing table from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Table Of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// for loop on arrays
let fruits = ["apple", "banana", "grapes", "mango", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i} is: ${fruits[i]}`);
}

// break 
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        break;         // others line will not executed
    }
    console.log(`value of i is ${i}`);

}

// continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue;         // others line will executed only 1 condition will skip i.e. 5
    }
    console.log(`value of i is ${i}`);

}
    