// sets data structure 
// set is homegenous 
// auto remove duplicat value .
// key word  -- new Set()
// .size --> element how many inside 
// . has --> check the element is inside array  
//  .delete --> delete element inside 
//  .value and . entries
let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(3);
set.add(4);

// console.log(set,"size",set.size)
// set.clear() --> clear all value sets 
// console.log(set);
let value = set.values()
// console.log(value)
let obj = set.entries()
console.log(obj)

// . add key word add new value

let add = new Set([1, 2, 3, 4, 1, 2, 35, 34, 35, 34]);
let add1 = [1, 2, 3, 4, 1, 2, 35, 34, 35, 34];

for (let val of add1) {
    add.add(val)
}

// for each working 
// for of loop working 
add.forEach((val => {
    console.log(val)
}))

for (let val of add) {
    console.log(val)
}


// console.log([...set])



// map
// hemogenines data structure 
// count fc and index;


// set ()
// get ()
// has()
// clear()
// delete


// working foreach or for of loop 
const obj1 = new Map();

obj1.set("name", "subhash");
obj1.set("age", 24);

console.log(obj1.has("age"))


for (let [key, val] of obj1.entries()) {
    console.log(key, val)
}
obj1.forEach((item) => { console.log(item) })



let a1 = [1, 2, 3, 45, 54, 45, 3, 2, 1];
let map = new Map();
let map1 = new Map();

for (let item of a1) {
    if (map.has(item)) {
        map.set(item, map.get(item) + 1)
    } else {
        map.set(item, 1)
    }
}

// console.log(map)



for (let val of a1) {
    map1.set(val, map1.get(val) == undefined ? 1 : map1.get(val) + 1)
}
// console.log(map1)

let entrie = [...map1.entries()];
let keys = [...map1.keys()];
let val = [...map1.values()];

// console.log(entrie)


