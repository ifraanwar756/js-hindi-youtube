const myPerfume = ["Bellavita", "Gucchi", "Dior" ];
const morePerfumes = ["Plum", "YSL", "Nivea"];
/*
myPerfume.push(morePerfumes) //consider more perfume as a single element and make array inside an array
console.log(myPerfume);
*/
const allPerfume = myPerfume.concat(morePerfumes) //merge both the arrays
console.log(allPerfume);

//spread operator
const myAllPerfume = [...myPerfume , ...morePerfumes] //same as concat but it can concat more than two arrays
console.log(myAllPerfume);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)  //make all the array as single elements 
console.log(real_another_array);     //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Ifra")); //checking whether it is an array or not
console.log(Array.from("Ifra"));  //['I', 'f', 'r', 'a']converting it to an array

console.log(Array.from({name: "Ifra"}));  // [] ==> it will return an empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[100, 200, 300] ==> convert multiple variables into an array


