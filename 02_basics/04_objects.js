// const tinderUser = new Object(); //singleton object

const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harsh",
            lastname: "gupta",
        }
    }
}

// console.log(regularUser.fullname.userfullname);

//merging two objects
const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "a",
    4: "b"
};

// const obj3 = {obj1, obj2}; //will give same problem as it give while combining array, so avoid this method

// const obj3 = Object.assign({}, obj1, obj2); 
//When using Object.assign() to combine objects, the {} argument (an empty object) serves a specific and important purpose. 
//It acts as the target object to which properties from the source objects (in this case, obj1 and obj2) will be copied. 
//This ensures that the original objects (obj1 and obj2) remain unchanged. If we dont use {}, obj 1 or obj2 might get changed

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//another method to combine them: using spread operator
const returnedObj = {...obj1, ...obj2};
// console.log(returnedObj);


//************************ANOTHER METHOD*********************** */

const users = [
    {
        id: 1,
        email: "harsh@email"
    },

    {
        id: 1,
        email: "harsh@gmail"
    },

    {
        id: 1,
        email: "harsh@ybl"
    },
]

console.log(users[1].email);


//************FEW METHODS**************** */
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//it returns the data in form of array, i.e it took all the keys and put it inside an array

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
//returns an array of arrays (each key value pair inside an array)

console.log(tinderUser.hasOwnProperty("isLoggedIn"));