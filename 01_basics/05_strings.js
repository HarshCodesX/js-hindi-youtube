const name = "harsh";
const repoCount = "50";

// console.log(name + " " + repoCount + " value"); //but this syntax is not good and it is old

//new method is to use back-ticks as here comes the concept of string interpolation in which we can create placeholders
// and directly inject variables inside those placeholders for eg:

console.log(`my name is ${name} and my repo count is ${repoCount}`); //this method is known as string interpolation


//new way to declare string
const gameName = new String('harshhhc');
console.log(gameName);
console.log(typeof(gameName));

//When you create a string using the String constructor function, it returns a string object rather than a primitive string value. This means that the value stored in gameName is not just a primitive string, but an instance of the String object.