// for each loop for array 
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val) {
    console.log(val);
} )

// arrow function
coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// we can also print item, index and array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})