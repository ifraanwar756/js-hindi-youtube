/************ examples given --> for each will not return any values whatever method will u use to print ************/

const coding = ["js", "ruby", "java", "python", "c++"]

// storing values in a variable and then printing function
const value_1 = coding.forEach( (item_1) => {
    console.log(item_1);
})
console.log(value_1); // values will be printed but function will return undefined


// use of return item 
const value_2 = coding.forEach( (item_2) => {
    console.log(item_2);
    return item_2;
})
console.log(value_2); // values will be printed but function will again return undefined


// not writing console.log
const value_3 = coding.forEach( (item) => {
   // console.log(item);
})
console.log(value_3); // then no value will printed but function will return undefined

// use of filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (nums) => nums > 4 )    // when condition is defined in parenthesis
console.log(newNums);  // 5, 6, 7, 8, 9, 10 ==> it will return only those value that will satisfy the condition 


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (num) => {   // when condition is defined in scope use return keyword otherwise it will return an empty array
    return num > 4 
})
console.log(newNum)  