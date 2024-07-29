const name="rahul"
const repoCount = 50
console.log(name + repoCount+ " value")
//its an old ways to write 

//new way this is called string interpollation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//Another way to declare a String is
//this will invoke the class of string and gives output as object of string 
const gameName = new String ('Rahul')
console.log(gameName)
//this object of string contains many properties 
//length is one of the properties
console.log(gameName.length) 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
//learn String methods it will help in competive programming as well as interview

//GO to mdn docs and learn all method 
