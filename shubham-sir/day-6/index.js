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
