let arra = [1,2,3,4,5,6,11];
let arra1 = [1,2,3,4,5,6];

arra.reverse()
// console.log(arra)
console.log(arra.length);


arra1.fill(-1,0,4);
console.log(arra1);

let consol =(arra.concat(arra1))
console.log(consol);

let check = arra.includes(110); // true/false element arra mein hai ya nhi hai;
console.log(check);


let join_method = arra1.join("good");
console.log(join_method);
