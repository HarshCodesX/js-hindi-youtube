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

console.log(regularUser.fullname);