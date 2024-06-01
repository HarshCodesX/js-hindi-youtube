//  ... these 3 dots are known as rest as well as spread operator, name depends on where they are being used

function calculateCartPrice(val1, val2, ...num1){
    console.log(val1);
    console.log(val2);
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

// HOW TO PASS OBJECT IN FUNCTION

const user = {
    username: "harsh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// 2 ways to call thr above function that takes object
// handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

//HOW TO PASS ARRAY IN FUNCTION
// const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 1000, 9000, 1500]));
