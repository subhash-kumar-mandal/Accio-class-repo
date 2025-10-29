// loop topics  1. for loop
//              2. whlie loop (ok completed)
//              3. do while loop (ok completed)
//              4. for of loop (ok completed)
//              5. for in loop

// ---> while loop
// *condition false hone par  loop break ho jata hai 
 
// while(condition){
//     code 

// }


// 1. print name 5 TimeRanges

let i=1;
while(i<=5){
    console.log("hello");
    i++  // i ko khud handal karna padta hai 
}

// 1  post increment   (phele value use karna phir update karna)   i--
// 2  pre increment    (phele updated karna phir value use karna) ++i


// let name = prompt("entre your name");
// console.log(`i am ${name}`)


// assigment question 

let start = 1;
while(start<=10){
    console.log(start)
     start++
}

let sum =0;
let point = 1;
let last= 12;

while(point<=last){
    
     if(point%2===0){
        sum+=point;}
     point++
    
}

  console.log(sum)


let facto =1;
let range = 4;

while(range>=2){
    facto *= range;
    range--
}
console.log(facto)


let naturalsum= 0;
let  input = 10 ;

    while(input>=1){
        naturalsum+=input
        input--
    }
console.log(naturalsum)

