// ----> ternary operator 
                //  true hone par 
                //  /-------------|
        //   condition ?_____________ : ______________
                // |____________________________|
                //  false hone par 



// 1. 
let num = 18 
 num>=18?console.log("adult"):console.log("child");



// 2. nested ternary 


let number =0;
number===0?console.log("zero"):
number%2===0?
(number>0?console.log("even and +ve"):console.log("even and -ve")):
(number>0?console.log("odd and +ve"):console.log("odd and -ve"));


// 3. 
let player = 1;
let sides = "white";


player===1?(sides==="white"?console.log("player1 is white side and player 2 is black"):console.log("player1 is black side and player 2 is white")):
(sides==="white"?console.log("player 2 is white side and player1 is black side"):console.log("player 2 is black side and player1 is white side"))

