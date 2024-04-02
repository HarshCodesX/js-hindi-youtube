// let score = "33";
// let score = null;
// let score = undefined;
// let score = true;
let score = "harsh"

console.log(typeof score);
console.log(typeof(score));


// now we know that we received input in form of string but we want to perform operation on number only
let valueInNumber = Number(score); //now the score will be converted into number

//if user enter "33abc" inside score, then it will be converted to NaN (not a number) whose type is number and will get stored inside valueInNumber
console.log(valueInNumber);
console.log(typeof(valueInNumber));

/*
    "33" => 33
    "33abc" => NaN
    true => 1, false => 0
*/

console.log("NEXT CONVERSION")

let isLoggedIn = 1;
// let isLoggedIn = "";
    // let isLoggedIn = "harsh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);


/*
    1 => true, 0 => false
    "" => flase
    "harsh" => true
*/

console.log("NEXT CONVERSION!!");

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);