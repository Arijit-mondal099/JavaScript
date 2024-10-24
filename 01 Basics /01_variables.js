const accountId = 112239999
let accountEmail = "arijit@gmail.com"
var accountPassword = "11223344"
accountCity = "Kalkata" // we can it (prefer not to use)
let accountState // undifined

// can we change constant?
// accountId = 00991 (not allowed)

/*
    Scope:
    Block scope: const, let
    Global scope: var (prefer not to use, because of issue in block and functional scope)
*/

accountEmail = "aaaa@gmail.com"
accountPassword = "1881"
accountCity = "Bengaluru"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])