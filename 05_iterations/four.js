// as we have seen that for of loop was not working for object
// therefore we will be using forin loop for iterating object 

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key); //rpints the keys
    // console.log(myObject[key]); //prints the values
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

// *************************8APPLYING forin LOOP ON ARRAY*******************************
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}