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
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`);
        console.log(i + "*" + j + " = " + i*j);
    }    
}