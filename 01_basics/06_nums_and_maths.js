const num1=10
console.log(num1);

//here you define the number as object
const num2 = new Number(100)
console.log(num2)

//now this number object has many properties 

//but you can change these properties into string properties by using toString() method on number

console.log(num2.toString().length)

console.log(num2.toFixed(2)) //this will give decimal upto 2 

//toLocalString('en-IN') this will give in indian system of , separate hudreds thousands lakh etc

//******************************************Maths******************************************************

console.log(Math.abs(-1)) // abs convert negative values to positive
console.log(Math.round(4.6)); //round the value
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4,3,5,6))
console.log(Math.max(1,2,3,45))
//Random very very important

console.log(Math.random()) // gives the random value between 0 and 1

// to get between two number 
let min = 10
let max = 20

console.log((Math.floor(Math.random() * (max - min))+1)+min)

