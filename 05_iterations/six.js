const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach( (item) => {
    // console.log(item);
    // return item; //it wont return even if we write this statement
} );
// console.log(values); //forEach does not return anything, therefore it will print undefined

// **********************NEW ONE******************

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4 ); //this is implicit return, can also write this line as shown below

const newNums = myNums.filter( (num) => {
    return (num > 4); //explicit return
    num > 4; //ths will only work in implicit return, if we try to write like this, then output will be []
} );

//doing the same using forEach
// const newNums = [];
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// } );

// console.log(newNums);

// ****************NEW ONE **********************
const books =[
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// FINDING BOOKS WITH GENRE AS HISTORY
// let userBooks = books.filter( (bk) => {
//     bk.genre === "History";
// } );

// userBooks = books.filter( (bk) => bk.genre === "History" ); //implicit return
// console.log(userBooks);

//FINDING BOOKS WITH PUBLISH YEAR GREATER THAN EQUAL TO 2000
userBooks = books.filter( (bk) => {
    return (bk.publish >= 1995);
} );

userBooks = books.filter( (bk) => bk.publish >= 2000 ); //if we want to write abive code as implicit return
userBooks = books.filter( (bk) => { return (bk.publish >= 2000)} ); //as we have opened scope here {}, i.e we have to use return keyword

//NOW IF WE WANT TO PRINT BOOK WHICH WER EPUBLISHED AFTER 1995 AND BELONGS TO HISTORY GENRE
userBooks = books.filter( (bk) => {
    return (bk.publish >= 1995 && bk.genre === "History");
} );

console.log(userBooks);