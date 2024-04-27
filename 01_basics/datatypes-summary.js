// primitive (call by value)
//7 types: string, number, boolean, null, undefined, symbol, bigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // we can also write it as userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
//even if we have passed same value inside symbol, still id and anotherId are going to have different values

// non primitive (reference type)
// 3 types: arrays, objects, functions

//NOTE: JS is a dynamically typed language, that means the data type of variable are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.