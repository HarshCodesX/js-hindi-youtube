function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// console.log(sayMyName); //this is known as reference of function

// sayMyName(); //execution of function
// console.log(sayMyName());

//line 11 and 12 are both execution of function, only difference is that sayMyName() calls the function and logs the value,
//but console.log(sayMyName()) logs the return value of the function and this function does not return any value explicitly
//therefore returning a default value of undefined

//**********ADDING 2 NUMBERS USING FUNCTIONS************ */

function addTwoNumbers(number1, number2){ 
    console.log(number1 + number2);
}
//while defining a function, the variables passed are called parameters

// addTwoNumbers(3, 4); //what if user enter numbers in the form of strings
// addTwoNumbers(3, "4"); //type conversion occurs
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);
// addTwoNumbers(3, undefined); //while calling function, the value we pass are known as arguments

//lets store the output value of this function inside a variable
const result = addTwoNumbers(3,5);
console.log("Result: ", result);

//the 8 is not known as the return value of the function addTwoNumbers.
//The 8 is the output of the console.log statement inside the function.
//The function itself does not return a value; it only logs the result to the console.
//The return value of the function is undefined by default because there is no return statement.


// ************Now make a function that actually returns a value**************

function subtractTwoNumbers(number1, number2){ 
    let output = number1 - number2;
    return output;
    console.log("harsh"); //wont get printed as it is below return statement
}

const return_result = subtractTwoNumbers(10, 5);
console.log(return_result);

// ******************WE CAN ALSO WRITE ABOVE FUNCTIN AS ************************

function subtractTwoNumbers(number1, number2){
    return number1 - number2;
}

const Finalresult = subtractTwoNumbers(20, 10);
console.log(Finalresult);

// *******************ANOTHER NEW FUNCTION **********************

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter your name");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("harsh"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage(""));