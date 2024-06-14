// as we have seen that for of loop was not working for object
// therefore we will be using forin loop for iterating object 

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key); //prints the keys
    // console.log(myObject[key]); //prints the values
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

// *************************APPLYING forin LOOP ON ARRAY*******************************
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key); //if we did this in for of loop, then it directly prints value of the array, but here it is printing key only
    console.log(programming[key]);
}

//**************************** APPLYING "FOR IN" LOOP ON MAP **********************************/
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
    // console.log(key); //map is not iterateable, and if anything which is not iterateable, we cant write it inside any loop like this directly
}