const accountId = 144553
let accountEmail = "ifraanwar123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//accountId = 2  //not allowed

/*
prefer not to use var...
because of issue in block scope and functional scope
*/

console.log(accountId);
accountEmail = "hc@hc.com"
accountPassword = "4535454"
accountCity = "Bengalure"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);