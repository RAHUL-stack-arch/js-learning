//dates
//declaration of data
let myDate = new Date()
console.log(myDate);
//typesof(myDate) = object


//
console.log(myDate.toString())

//see by printing myDate.to-----()  it will give or remove a particular
//exmple 
// toDateString() = output -> March Jan 23 2023
// toLocalString() = very important 

//declare date object by instances
let myDate2 = new Date(2023,11,8)
console.log(myDate2.toLocaleString());

//way 2
let myDate3 = new Date(11-08-2024)
console.log(myDate2)

//for time

//if you are making hotel app in which date must match then we use

let mybookingDate = new Date("10-10-2024")
let today = Date.now()

console.log(mybookingDate.getTime())
console.log(today)

//so compare both

//getMonth gives you number start jan as 0 then dec as 11
//getDay gives you day start from monday like if it is wednesday it gives output 3


//if you want date and time with particular timezone and also wanted to change it use toLocalString()
let newDate = new Date("11-11-2024")

//here below you have changes the timezone(in place of default)
newDate.toLocaleString('default', { 
    weekday: "long"
})
console.log(newDate)
