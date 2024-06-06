const user = {
    username: "harsh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this) //inside node environment, here "this refers to an empty object or we can say it refer to a global object"
// but when we run this console.log(this) statement inside browser, then it will refer to thr global object which is "Window"

function chai(){
    let username = "harsh";
    console.log(this.username);  //outputs: undefined
    console.log(this); //prints the global object and many more things
}
// chai() //concept of context only work inside objects

// const drinks = function(){
//     let drinkName = "chai";
//     console.log(this.drinkName);
// }

// drinks(); // same result if we declare and define function this way and call it

// ******************declaring function with the help of arrow function************

const drinks = () => {
    let drinkName = "fanta";
    console.log(this);
}

drinks();

// *************more about arrow function***********
() => {}

//we can hold arrow function inside a variable like this:

// const addTwo = (num1, num2) => {
//     return num1 + num2; //this is explicit return
// }

//concept of implicit return
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); //we can write the above line like this also

//what if we want to return an object
const addTwo = (num1, num2) => ({username: "harsh"});

// console.log(addTwo(3,4)); //while calling line number 51, here arguments passed are of no use as we are printing object which contains string