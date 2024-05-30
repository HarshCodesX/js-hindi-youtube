function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

console.log(sayMyName); //this is known as reference of function

sayMyName(); //execution of function
console.log(sayMyName());

//line 11 and 12 are both execution of function, only difference is that sayMyName() calls the function and logs the value,
//but console.log(sayMyName()) logs the return value of the function and this function does not return any value explicitly
//therefore returning a default value of undefined