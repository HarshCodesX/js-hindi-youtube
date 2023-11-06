const accountId = 144553
let accountEmail = "harsh055@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hg@hg.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/