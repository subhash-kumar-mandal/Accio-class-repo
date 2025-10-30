// break --> stop  the execution of immediate loop ;
// continue --->  Skip current  cycle  iteration  of the  immediate loop ;



// check palindrone 
 let n = "121"
 let n2 = n
let reverse = ""
let i=1;
while(n>0){

    let last = n%10;
       n =Math.floor(n/10);
       reverse += last
}
if(reverse===n2){
    console.log(true)
}else{
    console.log(false)
}


// N STAR PRINT 

    let n1 = 5;
for(let i=1;i<=n1;i++){
    let str ="";
    for(let j=1;j<=n1;j++){
        if(i===1 || j===1){
            str += "* "
        }
    }
    console.log(str)
}

// power find 

let num1 =5;
let power = 3;
let result=1;

for(let i=1;i<=power;i++){
result = num1 * result
}
console.log(result)


// print table 
let table = 6
 for (let index = 1; index <=10; index++) {
    console.log( `${table}*${index}=${table*index}`)
    
 }


 let star = 2;
 for(let k = 1; k<=star;k++){
     console.log("*".repeat(star))
    // let str = "";
    // for(let k2=1;k2<=star;k2++){
    //     str += "*";
    // }
    // console.log(str)
 }


//  print recangle patten 

let row = 4;
let col = 10;
for(let i=1;i<=row;i++){
    let str ="";
    for(let j=1;j<=col;j++){
        if(i===1  || j===col ||j===1 || i===row ){
            str += "* "
        }else{
            str += "  "
        }
    }
    console.log(str)
}