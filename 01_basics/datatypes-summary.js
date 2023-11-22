// Primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 33.5

const isLoggedin = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "harsh",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj);

// Note- Js is a synamically typed language, as we dont define the type of variable and we just assign the value (interpreter assigns variables a type)

//Return types
// primitive
// String = string
// Number = number
// Boolean = boolean
// Null = object
// Undefined = undefined
// BigInt = bigint

// Non-primitive data types

// Array = object
// Function = function(object)
// Object = object