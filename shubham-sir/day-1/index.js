// --> Declaration  = variable create karna ;
//            . let ,const , var,

// ----> Initialisation =  variable ko  value dena 
  
let a; //declarations
a=10  // initialized

let b ; // declarations
b = 20; // initialized

// const c; [Note :declarations must be initialized] , [Declaration and initialized same time] 
const c=20; // good  way this


// ---->   let,const,var name   =   value give 
//       |____________________|   |___________|
//                 |                    |
//            declaration           initialized



// ----> Redeclarations and Reinitialized 

//  ---> var ?

var num ;   
var num ;
//  yes redeclarations allowed same name variable 

var num1 = 10;
num1 = 20;
console.log(num1) // yes reintialized allowed 




// --> let ? 

     let str ;
//   let str ; // redeclare block-scoped variable 'str' 
// (haam same name ka let variable nhi bana sakte hai kyuki block scope hai );

let str1 = 10;
    str1 = 20 ;

    console.log(str1);
// Note : yes reintialized allowed  


// ----> const ?

const string = "hello";
// const string = "good" Cannot redeclare block-scoped variable 'string'
// (const bhi block scope hai haam ek hi name ke same const nhi bana sakte hai ?)

const day = "monday";
    //   day = "friday"; TypeError: Assignment to constant variable
    // [Note const ko reintialized nhi kar sakte hai kyuki const hai ]

 console.log(day)

//  Flow chart------------------
//                             |    

//    variable     |  let     |  var  |   const  |
//                 |          |       |          |
// Redeclarations  |    no    |  yes  |    no    |
// reintialized    |   yes    |  yes  |    no    |