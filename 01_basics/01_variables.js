const accountID = 14453
let accoutnEmail = "Rahul@gmail.com"
var accountpassword = "312321"
accountCity = "Delhi" // this is also possible 

// accountID = 12321  ---> const variable never changes its always or must be constant throughout
//the program
//Other can be change

accoutnEmail="Hello@gmail.com"
accountpassword="434243"
accountCity = "bangaluru"

console.log(accoutnEmail);

//We don't use 'VAR' keyword in js because of scope 'if() {this to curly bases calles the scope}'
//when var is used to declare variable then it can easily be changeble in any scope (if,for,while etc)
//that's why let is introduces if you declare variable using let outside any scope then it is global
//variabel but in scopes it act as a local.. 

//other way to print in table form

console.table([accountID,accountCity,accountpassword,accoutnEmail])//this will print in table form