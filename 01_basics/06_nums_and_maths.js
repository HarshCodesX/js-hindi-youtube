const score = 400;
// console.log(score);

//now we can explicitly define that the variable we are deeclaring has to be a number using new keyword and Number object as in js we get different objects such as String, Number, etc
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));


const otherNumberNew = 123.8966;
// console.log(otherNumberNew.toPrecision(4));

//one more case, what if we
const otherNumberTwo = 1123.8966
// console.log(otherNumberTwo.toPrecision(3));

//another method to make representation easier
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //if we dont write em-IN, then it will return value in form of US stndards


// +++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
//Math is an object in itself and in which there are number of properties and functions

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));

//now if we only want upper values, then we can use ceil funtion
console.log(Math.ceil(7.1));

//now if we only want lower values, then we can use floor funtion
console.log(Math.floor(2.9));

//we have sqrt also
console.log("square root of 25 is " + Math.sqrt(25));

//if we want to know lowest value inside an array, then we can use min and for highest we can use max
console.log("Minimum value is " + Math.min(4,3,6,8));
console.log("Maximum value is " + Math.max(4,3,6,8));

//About Math.random()
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//now suppose we want that we only want values between 10 and 20
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);