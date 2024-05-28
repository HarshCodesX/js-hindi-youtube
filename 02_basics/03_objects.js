// an object is a collection of properties, and a property is an association between a name and a value.
//objects can be defined in 2 ways: i) using Literals ii) using constructor

//singleton (object.create)
//whenever objects are created using constructor, then object created is singleton (i.e one of its own kind)
//but when you create object using literals, then it is not singleton, multiple instance of that object are created

const mySym = Symbol("key1");

//object literals

const jsUser = {
    name: "harsh",
    "full name": "harsh gupta",


    // mySym: "mykey1", //not proper syntax to include symbol in object
    [mySym]: "myKey1",


    age: 21,
    location: "haryana",
    email: "harsh@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser.mySym); //but it is not working as a symbol

//correct syntax
// console.log(jsUser[mySym]);

//how to change value 
jsUser.email = "harsh@chatgpt.com";
// console.log(jsUser);

//if we want that any value dont get changed
// Object.freeze(jsUser); //if it is not commented, then it was giving error while makeing changes in object
jsUser.email = "harshdaskhb055@gmail.com";
// console.log(jsUser);

//lets add a function inside it
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());