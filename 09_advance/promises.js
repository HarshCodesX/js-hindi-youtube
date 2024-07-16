const promiseOne = new Promise(function(resolve, reject){
    //do an async task like
    //db calls, cryptography related, network calls
    setTimeout(function(){
        console.log("async task is complete");
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
})

// *************************WITHOUT STORING INSIDE A VARIABLE ******************
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// *********************PASSING DATA FROM RESOLVE() TO .THEN()***************************
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "harsh", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// ********************ERROR HANDLING INSIDE PROMISE************************
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "harsh7562", password: "123"})
//         } else {
//             reject("ERROR: Something went wrong");
//         }
//     }, 1000)
// })

//REGULAR APPROACH
// promiseFour.then(function(data_received){
//     console.log(data_received);
// }).catch(function(rejection_received){
//     console.log(rejection_received);
// })

// ANOTHER APPROACH TO HANDLE THIS
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((myUsername)=>{
//     console.log(myUsername);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

// ************************************ANOTHER WAY TO CONSUME OR ACCEPT/REJECT THE PROMISE******************************
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject("ERROR: JS went wrong");
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();

// ***********************************SOME ADDITIONAL ******************
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await used as network request also take time
//         const data = await response.json() //used await because response.json() also takes time
//         console.log(data);
//     } catch(error){
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();

// *****************WRITING ABOVE FUNCTION WITH then AND CATCH****************************
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})