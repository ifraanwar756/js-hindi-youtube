// for in loop --> mainly for objects
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is a shortcut for ${myObject[key]}`);
}

// for in loop --> can be used for arrays but
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(key);                // it will print 0,1,2,3,4,5 etc bcoz keys of arrays is numbers
   console.log(programming[key]);   // it will print js, rb, py etc
}

// maps can not be iterated
     
    
