//  scpoe   1. global 
//          2. block 
//          3. function scpoe


let a = 10;
var b = 20;
const c =30;

// this is global scpoe defined not is {} inside 


{
  
let num = 10;  //  let have block scope 
var num1 = 20;  // var have no block scope
const num2 =30;  // const have a block scope
}

// console.log(num); //  num is not defined 
console.log(num1); // 20
// console.log(num2) // num2 is not defined 



function hello (){
    let num = 10;  //  let have block scope 
var num1 = 20;  // var have no block scope
const num2 =30;  // const have a block scope
}

// console.log(num); //  num is not defined 
console.log(num1); // 20
// console.log(num2) // num2 is not defined 



function hello (){
    let num = 10;  //  let have block scope 
var num1 = 20;  // var have no block scope
const num2 =30;  // const have a block scope
}

// console.log(num); //  num is not defined 
console.log(num1); // 20
// console.log(num2) // num2 is not defined 



function hello (){
    let num = 10;  //  let have block scope 
var num1 = 20;  // var have no block scope
const num2 =30;  // const have a block scope
}

// console.log(num); //  num is not defined 
console.log(num1); // 20
// console.log(num2) // num2 is not defined 



function hello (){
    let str = " hello";
    var str1 =  "hello-1";
    const str2 = "hello-2"
}

// console.log(str,str1,str2)
// referenceError  not defined  all have functonal scope 