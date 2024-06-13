// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("we have reached till 5 and now it is going to be printed");
    }
    // console.log(element);
}

//******************NEW ONE************************* */

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
    }    
}

//******************NEW ONE********************************* */
let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// ****************************NEW ONE (ABOUT BREAK) ***********************
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        break;
    }
    // console.log(`value of i is ${index}`)    
}

// *********************NEW ONE (ABOUT CONTINUE)*****************************
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${index}`)    
}