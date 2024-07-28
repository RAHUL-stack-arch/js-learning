let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //convert string to number nut score type is not changed 
console.log(typeof score)
console.log(typeof valueInNumber)

let a = "33abc"

console.log(a) //it will give string

//but if you convert in number
let valueInNumbers = Number(a)
console.log(valueInNumbers) //it will print 'Nan' as 33abc cannot be converted into number
//similarly if a = null then 'typeof a is 0' 
//if a = undefined then 'typeof a is NaN'
//"33" = number => 33
//"33abc" to number => NaN
//null to number => 0
//undefined to number => NaN
//true to number => 1 and false to number => 0
//"" (empty string) to boolean => false

//  ***********************      OPERATIONS       *************************************
                          //OUTPUT
console.log("1" + 2)     // 12
console.log("1" + 2)     // 12
console.log("1" + 2 + 2);// 122
console.log(1 + 2 + "2");// 32
//javascript run by left to right if first and second numbe is string then string will generate 
//if both are number then number will generate


console.log(true)  // output = true
console.log(+true) // output = 1
console.log(+"")   //output = 0
