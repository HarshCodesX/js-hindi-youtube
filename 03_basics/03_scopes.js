var c = 30;
let a = 200;

if(true){
    let a = 10;
    const b = 20;
    console.log("Inner: ", a);
}

console.log(a); //says a is not defined
// console.log(b); //says b is not defined
console.log(c); //prints the value of c which is 30

//now here comes the concept of block scope and global scope, every variable inside the if block will be inside block scope
//and value or variable outside the block will be inside global scope

//variable inside global scope can be used in block scope but variable inside block scope can't be used in global scope