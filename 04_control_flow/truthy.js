// const userEmail = "harsh@gmail.com";
// const userEmail = "";
const userEmail = [];

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy: 0, -0, false, 0n (this is inside BigInt), "", null, undefined, Nan
// truthy: "0", "false", " ", [], {} -> this is an empty object, function(){} -> empty function

// TO CHECK IF AN ARRAY IS EMPTY OR NOT
if(userEmail.length === 0){
    console.log("array is empty");
}

//TO CHECK IF AN OBJECT IS EMPTY OR NOT
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ //as "Object.keys(pass object here)" returns an array
    console.log("Object is empty");
}

//Nullish Coslescing Operator (??) -> this basically works on null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20; //in this case it will take the first value after null or undefined, like it took 10 here

console.log(val1);

// TERNARY OPERATOR

// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")