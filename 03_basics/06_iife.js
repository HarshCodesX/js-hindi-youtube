// Immediately Invoked Function EXpressions (IIFE)

// iife - function which get's invoked immediately
// sometimes variables with global scope can cause problems inside functions and to reduce 
// we use iife the pollution from global scope variables

(function chai(){
    //this on is named iife
    console.log("DB CONNECTED");
})(); //make sure to end this with a semi colon (;) as immediately invoked function doesn't know where to stop the context

// NOW WE CAN ALSO WRITE THIS FUNCTION AS ARROW FUNCTION
( () => {
    // unnamed iife
    console.log(`DB CONNECTED TWO`);
} )();

// NOW SUPPOSE WE WANT TO PASS ARGUMENTS IN ABOVE ARROW FUNCTION
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("harsh");