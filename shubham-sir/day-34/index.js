// JavaScript mein jab hum function ko define karte hi call kar dete hain, usse IIFE bolte hain.

// --> IIFE kyun use karte hain?
// 1️⃣ Global scope ko pollute hone se bachane ke liye.Global
// 2️⃣ Initialization code ke liye(Page load hote hi kaam karwana ho to best)
// 3️⃣ Data ko hide (encapsulation)


// IIFE is used to execute a function immediately and create a private scope to avoid global variable conflicts.


(function () {
  console.log("IIFE chal gaya");
})();



// map() -->map() array ke har element par function chalata hai aur naya array return karta hai.
// Original array change nahi hota.

let numbers = [2,10,20,40];

 let new1 =numbers.map(function(element,index,number) {
  return element*10;
});
console.log(new1) // [20,100,200,400]

// note element -- current element 
//      index -- current index
//      number-- pura array dena haar bar

// NOTES : jab haame array se ek new array bana ho uske hi element se jitne vo hai ;
// map return karta hai 





// ---->  reduce method 
//    reduce() array के सारे elements को एक single value में combine कर देता है।
//   sum निकालना, average, product, max, min, या object बनाना — सब reduce से किया जा सकता है।

// 🔹 Syntax
// array.reduce((accumulator, currentValue, index, array) => {
//   // return updated accumulator
// }, initialValue);

// | Parameter      | Meaning                       |
// | -------------- | ----------------------------- |
// | `accumulator`  | पिछले step का result रखता है  |
// | `currentValue` | अभी वाला element              |
// | `index`        | (optional) current index      |
// | `initialValue` | accumulator की starting value |



let arra1 = [20,30,40,50];
let sum = arra1.reduce((acc,curr)=>{
    // console.log(acc);
    return acc+curr
})
console.log(sum) // 140





//  find() mothod

// find() किसी array में पहला ऐसा element लौटाता है जो दिए गए condition को पूरा करता है।
// अगर कोई भी element condition match नहीं करता, तो ये undefined देता है।

// 🔹 Syntax:
// array.find(function(element, index, array) {
//   // condition return true or false
// });

const num = [10, 25, 30, 45, 60];

const result = num.find(num => num > 40);
// 40 se bada number dekhna hai but find first condition se true hote hi first element return karta hai 
// yadi  condition true nhi hoti to undefined dena 

console.log(result);





// ==> Some method
// haam jab use karte hai jab dekhta hota hai array mein koi element kisi condition puri kar rhi hai ya nhi
// yadi ek bhi element condition puri karti hai true ata hai varna false 

let some1 =[10,20,40,50];
let check = some1.some((val)=>{
  return val>100
})
console.log(check);// koi bhi 100 se bada nhi hai element;






// ==> every method
// haam jab use karte hai jab dekhta hota hai array mein haar element kisi condition puri kar rhi hai ya nhi
//yadi sare element condition puri karte  hai to true deta hai varna fails

let arr_num =[10,20,39,19];
let check1 =arr_num.every((val)=>{
  return val<15
})
console.log(check1); // saare mein se ek 10 chota hai 15 se esliye false ayaega