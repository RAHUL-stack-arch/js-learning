//array
//it is an object which is a collection multiple elements into a single variables

//it can be mix
const  myArr =[ 0 ,1 ,2,3,4,5,"Rahul",true]
console.log(myArr)

//ways to declare array
const myAr = [1,2,3,4,5]

//other way
const myAr2 = new Array(1,2,3,4)
console.log(myAr2)

//methods on normal array
myAr.push(6) // push the element at the end
console.log(myAr)

myAr.pop() // remove the element from the front
console.log(myAr)

myAr.unshift(9) // push at the front only 
console.log(myAr)

myAr.unshift(10)
console.log(myAr)

myAr.shift() // remove from the front 
console.log(myAr)

console.log(myAr.indexOf(3)) //if in indexof(HERE THE ELMENT WRITTEN THAT IS NOT IN ARRAY) --> output -1
console.log(myAr.includes(14)) //it gives true or false that element is present or not

//convert array into string

console.log(myAr.join()) //here the myAr converted to string 
console.log(typeof myAr.join()) //it gives string

//SLICE vs SPLICE

const arr = [1,2,3,4,5,6]

console.log(arr)

console.log(arr.slice(1,3)) //slice gives value from index 1 to index 2 not index 3
console.log(arr) // it does not change or manipulate the real array

console.log(arr.splice(1,3)) //splice gives value from index 1 to index 3 it adds last range index
console.log(arr) // it manipulate the real array


//therefore slice doesnot include last range index whereas splice include last range index
//and slice doesnot manipulate the array whereas splice manipulate the array


