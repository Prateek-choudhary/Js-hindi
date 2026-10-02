const accountId  = 1445533
let accountEmail =  "prateek278@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState; 

// accountId = 2 //not allow 

accountEmail = "Prateeknew@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
becuase of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//javascript engine was hidden in future 