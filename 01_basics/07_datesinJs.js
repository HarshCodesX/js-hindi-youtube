let myDate = new Date()
// console.log(myDate); //gives output that we cant use or compare

//now lets convert this value to something else
// console.log(myDate.toString()); //gives much better output

// now lets try some more
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString())

//lets check the type of our myDate variable
// console.log(typeof myDate);

// if we want to declare a specific date only
let myCreatedDate = new Date(2024, 0, 23);
// console.log(myCreatedDate.toDateString());

// let anotherCreatedDate = new Date(2024, 0, 23, 5, 3)
// console.log(anotherCreatedDate.toLocaleString());

// let newCreatedDate = new Date("2024-01-14") //if we need more specific value and this format was yy-mm-dd
// let newCreatedDate = new Date("01-14-2023") //format is mm-dd-yy
// console.log(newCreatedDate.toLocaleString());

//TIMESTAMPS IN JS
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());

//now if we want value in seconds instead of miliseconds
// console.log(myTimeStamp/1000); //but this will give decimal value
// console.log(Math.floor(myTimeStamp/1000));

//FEW MORE METHODS
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());

//we can also use thr concept of string interpolation here 
console.log(`Date is ${newDate.getDate()} and the time is ${newDate.getTime()} in milliseconds`);

//about toLocaleString method
newDate.toLocaleString('deafault', {
    weekday: "long",
})
console.log(newDate);