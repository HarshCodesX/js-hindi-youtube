// arrays

//ways to declare array
// const myArr = [0, 1, 2, 3, 4, 5];
const myArr = [0, 1, 2, 3, 4, 5, true, "harsh"]; //this is also correct
const myHeroes = ["shaktiman", "superman"];

//one more way to declare array
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[7]);
// console.log(typeof myArr);

// Array methods

// myArr.push(6); //it will ad 6 to myArr
// myArr.push(7); ////it will add 7 to myArr
// myArr.pop(); // it will pop out the last element from the array

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(typeof newArr);
// console.log(newArr);
// console.log(myArr);

//slice and splice

console.log("A ", myArr);
const myN1 = myArr.slice(1, 3);
console.log(myN1);

console.log("B ", myArr);
const myN2 = myArr.splice(1,3);
console.log(myN2);

console.log("C ", myArr);