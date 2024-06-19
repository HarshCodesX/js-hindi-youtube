// for of 

// ["", "", ""] array of strings
// [{}, {}, {}] array of objects

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

// ********************************applying for of loop on strings***************************
const greetings = "Hello World";
for (const greet of greetings) {
    if(greet == " "){
        // console.log("space detected");
        // break;
        continue;
    }
    // console.log(greet);
}

// **************************MAPS****************************

//Maps (map is a object in itself)
// Map is an object that holds key value pairs and remember the orignal insertion of the keys (i.e remember the order in which key value pair was inserted)
// It is unique which means there is no duplicate value inside a map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); //we have entered india again, but this will not be consider inside map as it will be only entered once

// console.log(map);

for (const harshh of map) {
    // console.log(key); //it will provide us array of key value pair, each key value pair will make a separate array
}

// to destructure that array, we can use this syntax
for (const [key, value] of map) {
    // console.log(key, ":-", value)
}

// **************for of loop on object*********************
const myObject = {
    game1 : "NFS",
    game2 : "spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value); //will throw error that myObject is not iterable as for of loop is not working here, but there are different methods 
}