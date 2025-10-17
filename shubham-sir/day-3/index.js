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



let month =100;

switch(true){
    case month===1||month===3||month===5||month===7||month===8||month===10||month===12:
        console.log("31")
        break;
    case month===4 || month ===9 || month===6 || month===11:
        console.log("30")
        break
    case month===2 :
        console.log("28")
        break;
    default:
        console.log("invalid month ")
}


let day = 1;
switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("Invalid-input")

}



// nested switch

let number = 2;
switch (number === 0) {
    case true: console.log("zero")
        break;
    case false:
        switch (number > 0) {
            case true:
                switch (number % 2 === 0) {
                    case true:
                        console.log("even +ve")
                        break;
                    case false:
                        console.log("odd +ve")
                        break;
                }
                break;
            case false:
                switch (number % 2 === 0) {
                    case true:
                        console.log("even -ve")
                        break;
                    case false:
                        console.log("odd -ve")
                        break;
                }break;


        }break;

}