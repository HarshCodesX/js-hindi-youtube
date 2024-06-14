const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val){
    // console.log(val);
})

//using arrow function
coding.forEach( (item) => {
    // console.log(item);
} )

// ******************* WE CAN ALSO PASS FUNCTION*********************
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe); //here reference of the function has to be passed like this "printMe" instead of calling the function liek this "printMe()""

// *****************NEW ONE*********************
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

// **********************NEW ONE*****************************
const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )