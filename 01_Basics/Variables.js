//var : redeclare , reinitialization is possile in js functional and block scope (best practice do not use)
//let: redeclare the same variable name with let keyword is not possible in js, reinitialization is possible
//const: redeclare and reinitial is not possible in js

/*Note: prefer not use var 
because of block scope and functional scope
*/

const accountId = 1424;
let accountEmail = "asd22@gmail.com";
var accountPassword = "1234";
accounCity = "Pune";

accountEmail = "sgd22@gmail.com";
accountPassword = 4567;
accounCity = "Mumbai";
console.table([accountId, accountEmail, accountPassword, accounCity]);

let accounState; //undefined
