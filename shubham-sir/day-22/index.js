//  speard opt 

let arr = [1, 2, 3, 4, 5];
let arr1 = [...arr];
arr.push(0);
console.log(arr, arr1)

// good use to arr copy 

// shallow copy ;
let obj = {
    name: "aman"
}
let obj1 = { ...obj }// not good its one level copy any object;


// deep copy ;
let user1 = {
    name: "aman",
    add: {
        city: "delhi",
        country: "india"
    }
}

let user = JSON.parse(JSON.stringify(user1))
user.add.world = "iran";

console.log(user1, user)// this deep copy or lost functions;


// recursion ;

function seyhi(n) {
    console.log(`${n} namste india`);
    if (n == 10) return;;
    n++;
    seyhi(n)
}

seyhi(1)