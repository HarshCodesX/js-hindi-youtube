//if
const isUserLoggedIn = true;
const temperature = 41;

// if(temperature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// console.log("execute");
// <, >, <=, >=, ==,!=, ===, !==

// *********************************************NEW ONE*************************************************

// const score = 200;
// if(score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`user power: ${power}`); //scope issue

// ******************************************NEW ONE******************************************************

// const balance = 1000;
// if(balance > 500) console.log("test"); //implicit scope

//if we want to write multiple line
// if(balance > 600) console.log("check"), console.log("balance"); //not a good way to write code

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

// ************************NEW ONE******************************

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course"); //wont get printed as "2==3" is not true
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}