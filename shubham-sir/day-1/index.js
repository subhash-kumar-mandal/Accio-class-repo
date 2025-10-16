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
    //   const day (reintialized  not)  TypeError: Assignment to constant variable
    // [Note const ko reintialized nhi kar sakte hai kyuki const hai ]

 console.log(day)

//  Flow chart------------------
//                             |    

//    variable     |  let     |  var  |   const  |
//                 |          |       |          |
// Redeclarations  |    no    |  yes  |    no    |
// reintialized    |   yes    |  yes  |    no    |







// if else conditions 


//        ___________________  (condition ek Boolean return karta hai NOTE : true ya false ese par if else run hota ya chlata hai
//       |                     yadi  condition true return kare to if part ka code chalega or else nhi or yadi condition  
//       |                     false return to else vola part ya code run hoga )
//  if(condition){
//   /// work  code
// }else{
// /// work code 
// }


// exp 1. 

let age = 8;

if(age>=18){
    console.log("adlut")
}else{
    console.log("child")
}


// ---> if else if 
// ye same if else bass haam extra condition check karne ke liye use karte hai 
// [Note: yadi koi if ya else if condition true ho gyi to if break ho jyega or baki condition check nhi hogi]

// exmple

let age_1= 88;

if(age_1>=0 && age_1<=12){
    console.log("child");
}else if(age_1>=13 && age_1<=17 ){
    console.log("younger");
}else if(age_1>=18 && age_1 <=55){
    console.log("adult")
}else{
    console.log("old")
}


// nested if else if 
// ye kuch new nhi hai yadi  bass ek if else ke under ek or if else  nested if else ya else if 

// exmple 

let check =3;

if(check===0){
    console.log("Zero")
}else{
    if(check%2==0){
       if(check>0){
        console.log("even +ve")
       }else{
        console.log("even -ve")
       }
    }else{
   if(check>0){
        console.log("odd +ve")
       }else{
        console.log("odd-ve")
       }
    }
}