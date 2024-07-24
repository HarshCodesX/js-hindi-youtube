function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// *************new method***************

function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 25); //this will throw an error
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe(); //it will throw an error that says "can not read undefined properties"

//REASON - when you transferred values from function to chai and tea (const chai = createUser("chai", 25), and same for tea),
// at that time we didn't tell the chai and tea about the additional
//properties increment and printMe, and this work is done by "new" keyword, 

// ****************ABOUT "new" KEYWORD************

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/