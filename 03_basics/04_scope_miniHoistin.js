function one(){
    const username = "harsh";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

// **********************************************************************************************

if(true){
    const username = "harsh";
    if(username === "harsh"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); //this will cause error
}
// console.log(username); //this will cause error

// ************************INTERESTING ***************************************************
console.log(addone(101));
function addone(num){
    const final_res = num + 1;
    return final_res;
}

// ****************Another way**********************
console.log(addTwo(5));
const addTwo = function(random_number){
    return random_number = random_number + 2;
}
