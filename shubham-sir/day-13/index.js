let arra = [1, 2, 3, 4, 5, 6, 11];
let arra1 = [1, 2, 3, 4, 5, 6];

arra.reverse()
// console.log(arra)
console.log(arra.length);


arra1.fill(-1, 0, 4);
console.log(arra1);

let consol = (arra.concat(arra1))
console.log(consol);

let check = arra.includes(110); // true/false element arra mein hai ya nhi hai;
console.log(check);


let join_method = arra1.join("good");
console.log(join_method);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(0, 7));
console.log(arr.slice(-5, -1))


let number = [1, 2, 3, 4, 5, 6];
let remove = number.splice(1, 1, 29, 78);
console.log(number, remove);


// nested arrays; 

let nested = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, [1, 2, 3, 4,]]
]
let flat = nested.flat(Infinity);
console.log(flat)




// 2d ya martix  array 
let martix = [
    [1, 2, 4, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];
// for(let element of a){
//     // console.log(element)
//     for(let ele of element){
//         console.log(ele)
//     }
// }

for(let i=0;i<martix.length;i++){
    // console.log(martix[i])
    for(let j=0;j<martix[i].length;j++){
        console.log(martix[i][j])
    }
}