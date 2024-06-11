// while loop


let index = 0;
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index += 2
    // index = index + 2; // another way of writing index +=2
}

// ***************************NEW ONE*****************************
let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr += 1;
}

// ************************DO WHILE LOOP***************************
let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score<=10);


let number = 11;
do {
    console.log(`number is ${number}`); //it will print number once and after checking condition, it will come out of the loop
    number++;
} while (number<=10);