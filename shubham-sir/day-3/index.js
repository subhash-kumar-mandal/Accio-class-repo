//  precedence of opertors
    //  (bodmas)

        //   |  1.()
        //   |  2.**
        //   |  3. * or / (same level par left to right solve)
        //   |  4.+ or - (same level par left to right solve)
        //   |  5  == or === or != or !== 
        //   |  6. && 
        //   |  7. 11
        //   |  8. =

// exmple 
let find = 2 + 3 * 4 > 10 && true || false
console.log(find)



// Data type |------------->  * Primitive type                  *  Non primitive type
//                          1.number (1.02,23,-10)               1 object
//                          2. string ("",'',``)                 2 array 
//                          3. boolean (true and false)          3 function 
//                          4. undefined
//                          5. null
//                          6. symbool
//                          7. bigInt
             




// type casting   --> 1. Implicit (type coession);         2.Explicit(type conversion)
                    //   (jo js khud karta hai )            ( jo haam khud karte hai)

        
// exmple  
 

// Explicit  type change

let a = -28835.266;
console.log(typeof a)

let instring = String(a);
console.log(typeof instring);

let Inboolean = Boolean(a);
console.log(typeof Inboolean);


let str = "hello";
let strnumber = Number(str);
console.log(strnumber);
let strboolen = Boolean(str);
console.log(strboolen);


//Implicit type change 

 console.log(1 + "1")
console.log(1 - "1")
console.log(true + true)


// switch case 

let age = 18;

switch(age>=18){
    case true :
        console.log("adult");
        break;
    case false :
        console.log("child"); 
}
