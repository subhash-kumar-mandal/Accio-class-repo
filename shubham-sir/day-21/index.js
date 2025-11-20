//  destructuring ;
let obj ={
    name:'subhash',
    age:25,
    City :"delhi"
}

const {name,age,City:place}=obj;
console.log(name);
console.log(age);
console.log(place);

// global execution contoct;
// 1. memory cretion phase.
//2. code execution phase

// 1. before cep ,mcp will happen and it will initialisi all "var"  variable  with undefined wheresase
//   function will be present  in the mcp with  theire whole body;