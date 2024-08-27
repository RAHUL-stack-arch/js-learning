//merging of two array

const marvel = ["spiderman" , "thor" , "ironman"]
const dc = ["superman" , "batman" , "flash"]

//first way
const allheroes = marvel.concat(dc)
console.log(allheroes)

//second way
const allheroes2 = [...marvel,...dc] //this is known as SPREAD
console.log(allheroes2)


//2
//if there are many subarrays in the arrays that are very hectice and you want to remove all subarray
//and wanted to make single array then you use 'flat'

const another_array = [1,2,3,4,[1,2,3,[1,2,345]],32,[32]]

const usefull_another_array = another_array.flat(Infinity)  
//actually it takes deepth as an argument like 1 - which remove only 1 subarray dept [ 1,[]]
//gives infinity means remove all 
console.log(usefull_another_array)


//3
//using Array class of javascript 
console.log(Array.isArray("Rahul")) //gives true or false that the argument is array or not
console.log(Array.from("Rahul"))  // from will make the array 
//INTERESTING
//if from cannot make array then it form empty array interview question

//using of 
let num1 = 1
let num2 = 2
let num3 = 3

console.log(Array.of(num1, num2, num3)) //it forms an array

//time - 3:45
