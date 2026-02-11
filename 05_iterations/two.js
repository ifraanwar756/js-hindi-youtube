// while loop
let index = 0
while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2;
}

let myArray = ["flash", "batman", "superman"]

let arr = 0;
while (arr < myArray.length){
    console.log([`value is ${myArray[arr]}`]);
    arr ++
}

// do while loop
let score_1 = 10
do{
    console.log(`Score is ${score_1}`);
    score_1 ++ 
}while (score_1 <= 10);

// what if score is 11 ? still it will print score because it check condition after code run at least one time
let score_2 = 11
do{
    console.log(`Score is ${score_2}`);
    score_2 ++ 
}while (score_2 <= 10);