// let score = "33";
// let score = null;
// let score = undefined;
// let score = true;
let score = "harsh"

// console.log(typeof score);
// console.log(typeof(score));


// now we know that we received input in form of string but we want to perform operation on number only
let valueInNumber = Number(score); //now the score will be converted into number

//if user enter "33abc" inside score, then it will be converted to NaN (not a number) whose type is number and will get stored inside valueInNumber
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

/*
    "33" => 33
    "33abc" => NaN
    true => 1, false => 0
*/

// console.log("NEXT CONVERSION")

let isLoggedIn = 1;
// let isLoggedIn = "";
    // let isLoggedIn = "harsh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


/*
    1 => true, 0 => false
    "" => flase
    "harsh" => true
*/

// console.log("NEXT CONVERSION!!");

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************** operations ****************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(50/2)
// console.log(9%2)

let str1 = "hello"
let str2 = " harsh"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true)
// console.log(+false) //also we can write this as
// console.log(+""); //as "" gives 0 as boolean value and by using + as prefix we can convert it into 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

// console.table([num1, num2, num3])

console.log("postfix")
let gameCounter = 100
let store

console.log(gameCounter);
store = gameCounter++
console.log("store =" + store);
console.log(gameCounter);


console.log("prefix");
let valueCounter = 100
let recordKeeper

console.log(valueCounter)
recordKeeper = ++valueCounter
console.log("recordKeeper = " + recordKeeper);
console.log(valueCounter);