// methods 
let num = 12345;
let dec_num = num / 10;
console.log(dec_num);

console.log(Math.ceil(dec_num)) // hamesha agge ki taraf round karna ;
console.log(Math.round(dec_num)) // probelity ke hisab se kaam karna 1-4 ke bich mein hai to 
//                                  piche ki taraf varna 5-9 bich mein aage ki tafar ;
console.log(Math.floor(dec_num)) // point value ko hata dena ;


// reverse number 

let num1= 12345;
let ans ='' ;
while(num1>0){
    let last = num1 %10;
     num1  = Math.floor(num1/10);
     ans =  ans + last
}

console.log(ans)




// hcf find
let a =75;b=90;
let max = a>b? a : b;
let min = a<b? a : b;

while(min != 0){

    let remender = max % min ;
               max = min ;
               min = remender
};
console.log( max)



// check prime 

let n = 18;
let check = false;
let i= 2;
while(i*i<=n){
 if(n%i==0){
  check = true
 }
 i++
//  console.log(i)
}

if(check){
    console.log("Not prime ")
}else{
    console.log("Yes its prime")
}