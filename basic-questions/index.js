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
// console.log(deci-int)



// Question 5 Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

// Example:
// Input:
// 45
// 93
// 23
// 45
// 65

// Output:
// 54.

    let  A = 45
    let  B = 93
    let  C = 23
    let  D = 45
    let  E = 65
    
    let marks  = A+B+C+D+E ;
    
    // console.log(marks/5)


    
// Question 6 Take the cost price a and selling price b of a product, and print the profit obtained on the product. 
// Input:
// 120
// 590
// Output:
// 470

 let number1 = 120;
   let number2 = 590;
   
//    console.log(number2-number1)


// Question 7 Take a number and print out the last digit of the number.
// Example:

// Input:
// 12
// Output:
// 2

let Input = 12;
let lastnum = Input%10

// console.log(lastnum)



// Question 8 Take a 2 digit number and return the first and last digits. 
// input:
// 98

// Output:
// 9
// 8

let iput = 98;

let f = parseInt(iput/10)
let l = iput%10
// console.log(f) 
// console.log(l) 



// Question 9 Take a 2 digit number and print the reverse of that number .
// Example:
// Input:
// 94
// Output:
// 49

let numb1 = 94 ;

let f1 = parseInt(numb1 /10) // 9
let l1 = (numb1 %10)        // 4
let rever = `${l1}${f1}`  // here is reverse .
// console.log(Number(rever))