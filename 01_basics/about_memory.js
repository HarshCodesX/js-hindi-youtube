// There are 2 types of memory: one is stack (primitive) and other is heap (non-primitive)

// whenever stack memory is used to store variables, and when we use those variables, we only get a copy of that variable which
// means if we use that variable and change its value then orignal value is not altered

// when we use heap memory or we can say that any variable is declared or defined inside heap, from there we get the reference
// of the orignal value, which means that if we use that variable or make any changes then all the changes are reflected inside
// the variable stored in heap

let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "harsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);