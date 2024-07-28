console.log(2 > 1) // ouput in boolean => true

//Whenever you comapre two datatype then always make them same datatype first

console.log("2" > 1) // it will first convert 2 to number then compare 
console.log("02" > 1);//same

//NULL

console.log(null > 0)  //false
console.log(null == 0)// false
console.log(null >= 0)// true

//Undefined

console.log(undefined > 0)  //false
console.log(undefined == 0)// false
console.log(undefined >= 0)// false

// === check the comparision strictly 
//it compare both data type and value


console.log("2" === 2) //false
console.log("2" == 2) // true 
