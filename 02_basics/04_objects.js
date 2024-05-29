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
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
