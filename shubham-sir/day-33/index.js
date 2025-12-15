// Closure  
// Closure samjhne ke liye ye concept samjhna jaruri hai ;

// 1.Lexical scope 
// 2.Scope chaning
// 3. what is behind the sences [[Environment]]


// 1. lexical Enviroment (Base)
// Js engine mentally --> Is jagah par kaun-kaun se variables aur functions accessible honge
//  esi  ko lexical scope kehete hai 

// --> lexical environment me 2 cheezein hoti hain
// 1. Environment Record  (variables + functions)
// 2.Outer Lexical Environment ka reference (bahar wale scope ki link);


// 1️⃣

function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }
}

// * inner ka outer lexical Environment = outer 
// * Ye Decision run se pehle ho jata hain ;

// ⚠️ : Is stage par function call bhi nahi hua Sirf structure dekha gaya



// 2️⃣ 
// Execution Context
 outer();
// Har function call par:
// * Execution Context stack me hota hai
// * Lexical Environment heap me hota hai


// NOTE:

// So:
// * outer() ka apna lexical environment
// * inner() ka apna lexical environment

// ---> Ye environments heap memory me hote hain.

// 3️⃣

// Scope Chaining (search ka rule)

let x = 5;

function hello() {
    let y = 10;

    function inner() {
        let z = 20;
        console.log(x, y, z);
    }

    inner();
}

outer();


// --> JS ka search order:

// * inner ke environment me x? ❌
// * hello ke environment me x? ❌
// * Global environment me x? ✅

// Isi andar → bahar wali searching ko kehte hain 👉 Scope Chaining

// ⚠️ Important:
// Search kabhi reverse nahi hoti

// 4️⃣ 

// Ab Closure


function oute() {
    let count = 0;

    function inne() {
        count++;
        console.log(count);
    }

    return inne;
}

let fn = oute();


// step-by-step

// STEP 1: oute() call hua
// ->count = 0 oute ke lexical environment me store hua
// ->inne function bana
// ->inne ke saath ek hidden link laga:

// inne.[[Environment]] → oute ka Lexical Environment
// ⚠️ Ye link copy nahi hai, reference hai


// STEP 2: oute() return ho gaya
//-> Stack se oute() ka execution context hat gaya
// ❓ Normally memory delete honi chahiye thi
// ❗ Par nahi hui

// Reason:
// 👉 Kyunki inne abhi bhi oute ke lexical environment ko point kar raha hai
// Garbage Collector ka rule:
// Jab tak koi reference zinda hai, memory free nahi hogi



// STEP C: fn() call hua

// JS  karta hai
// 1. count inne me dhundhta hai ❌
// 2. [[Environment]] follow karta hai
// 3. oute ke lexical environment me count milta hai
// 4. usi same variable ko update karta hai

// Isliye:
// 0 → 1 → 2 → 3



// 5️⃣  diagram

// Heap Memory:

// LexicalEnv_outer
// {
//   count: 2
// }

// inner function (fn)
//  └── [[Environment]] ──► LexicalEnv_outer


// Stack:
// fn() aata hai
// fn() chala jaata hai

// Heap:
// lexical environment abhi bhi alive;



// ❌ Ek bahut important galatfehmi todte hain
// ❌ Closure variable ki copy bana leta hai
// ❌ Closure value ko freeze kar deta hai

// ✅ Reality:
// Closure reference rakhta hai
// Variable heap me zinda rehta hai