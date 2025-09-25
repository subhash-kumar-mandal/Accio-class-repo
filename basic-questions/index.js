// ------------------
// Basics question 
// ------------------

 
// Question 1  Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// Example:
// Input:
// 10
// 3
// Output:
// 13
// 7
// 30
// 3.3333333333333335
// 1


let a = 10;
let b = 3;

 let sum  = a+b ;
  let diff = a-b ;
  let mulit = a*b ;
  let  div  = a/b ;
  let rem  = a%b ;
  
//   console.log(sum)
//   console.log(diff)
//   console.log(mulit)
//   console.log(div)
//   console.log(rem)


  
// Question 2 Take two numbers and only print the integer part when a is divided by b .
// input:
// Two numbers - a,b
// Output:
// Integer part of the result a/b

let num = 10; 
let num1 = 4;
// console.log(Math.floor(num/num1)) 




// Question 3  Take two numbers a,b and print the exponential power of the first number raised by the second . 
// Example:
// Input:
// 2
// 3
// Output:
// 8

   let num3 = 2;
   let num4 = 3;
 
//   console.log(num3**num4)



// Question 4 Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b .

// Question 4 Take two numbers a,b and only print the decimal part of the result obtained when a is divided 

// Example:
// Input:
// 23
// 4
// Output:
// 0.75

let input = 23;
let input1 = 4;

let int = parseInt(input/input1)
let deci = input/input1 
console.log(deci-int)