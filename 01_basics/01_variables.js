const accountId = 14453;
let accountEmail = "hg395005@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; not allowed

accountEmail = "hg@hggmail.com";
accountPassword = "2248454";
accountCity = "Delhi";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
    prefer not to use var because of issue in block scope and functional scope
*/