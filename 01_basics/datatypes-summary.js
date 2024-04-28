// primitive (call by value)
//7 types: string, number, boolean, null, undefined, symbol, bigInt
const score = 100;
const scoreValue = 100.3;
let strValue = "harsh";

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // we can also write it as userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);
//even if we have passed same value inside symbol, still id and anotherId are going to have different values

const bigNumber = 56474857555577575754884859948857477n;

// non primitive (reference type)
// 3 types: arrays, objects, functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "harsh",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}

console.log("type of scoreValue: " + typeof(scoreValue));
console.log("type of bigNumber: " + typeof(bigNumber));
console.log("type of isLoggedIn: " + typeof(isLoggedIn));
console.log("type of outsideTemp: " + typeof(outsideTemp));
console.log("type of userEmail: " + typeof(userEmail));
console.log("type of id and anotherId: " + typeof(id));

//now lets print type of non primitive variables
console.log(" ");
console.log("type of heroes is: " + typeof(heroes));
console.log("type of myObj is: " + typeof(myObj));
console.log("type of myFunction is: " + typeof(myFunction));


//NOTE: JS is a dynamically typed language, that means the data type of variable are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.