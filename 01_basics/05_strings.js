const name = "harsh";
const repoCount = "50";

// console.log(name + " " + repoCount + " value"); //but this syntax is not good and it is old

//new method is to use back-ticks as here comes the concept of string interpolation in which we can create placeholders
// and directly inject variables inside those placeholders for eg:

console.log(`my name is ${name} and my repo count is ${repoCount}`); //this method is known as string interpolation


//new way to declare string
const gameName = new String('harshh-hc');
console.log(gameName);
console.log(typeof(gameName));

//When you create a string using the String constructor function, it returns a string object rather than a primitive string value. This means that the value stored in gameName is not just a primitive string, but an instance of the String object.

console.log(gameName[0]);
console.log(gameName.__proto__); // outputs: {}, provides the prototype and there are different methods in prototype and some are
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

// few more methods
const newString = gameName.substring(0,4); //can not enter/pass negative value in substring function
console.log(newString);

const anotherString = gameName.slice(-8,4); //can pass negative value in slice function
console.log(anotherString);

//few more
const newStringOne = "    harsh    ";
console.log(newStringOne);
console.log(newStringOne.trim());