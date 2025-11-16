// String    '',"",`` --> inside any value string 

// String methods 
 let str = "abcd";
// first string ke pass bhi indexing hoti hai 0 se n size tak ;
console.log(str.length)// find string length;

// string value access 
console.log( str[0])// same array ki tara  --> a;
console.dir(str.charAt(0)) // ese bhi value access kar sakte hai 


let str1 = 'aaaabcdeeefaaaaz';
console.log(str1.replace('a','h')) // replace first match value se change karta hai 
console.log(str1.replaceAll('a','z'))// ye saare a ko repace z se kar dega

console.log(str1.replaceAll('a','')) // yadi replace mein kuch nhi de to a haat jyege saare


let str2 ="subhash kumar mandal";
console.log(str2.split(" ")) 
// split is very use full split mein batat padta hai  string ko kis base par array bana hai or split mein vo value dete hai


let stri = "hello";
console.log(stri.toUpperCase());

let stri1 ="HELLO";
console.log(stri1.toLowerCase());