//primtive data type
//there are 7 types = String,number,Boolean, null, undefined ,Symbol

//Symbol
const id = Symbol('123')
const anotherid = Symbol('123')
//its typeof is Symbol


console.log(id === anotherid) //this will give false
//symbol is a data type that even if you give same value in symbol it will be different

const bigNumber = 3223432432432432n  //if you put at the end 'n' then the number become bigInt
console.log(typeof bigNumber);

//Reference (Non primitive)
// there are 3 types = Array,Object,Function 

//Array
const heros = ["shaktiman" , "naagraj" , "doga"]

//Object
let myObj = {
    name:"rahul",
    age : 23
} 

//function
const myFunction = function(){
    console.log("hello you are in the function")
}

//all non primitive datatype has typeof
//Object
//onlyfuntion has object function





