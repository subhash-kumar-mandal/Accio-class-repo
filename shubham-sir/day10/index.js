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



//  arrays ;
// ek liner data type  jo ek collection ki list hoti hai 
//  
// Array.length  (how many element inside array .);
// arra index start always 0 index 
//  space ka bhi index count hoga " " 

let arr = [1,"good",true,5,"hello",false];
console.log(arr)


// for loop on array 

let array = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}


for(let i=array.length-1;i>=0;i--){
    console.log(array[i])
}clear