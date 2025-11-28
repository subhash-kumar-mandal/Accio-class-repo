function numbersum(n){
    if(n==1){
        return n;
    }
    return n+numbersum(n-1)
}

console.log(numbersum(5))

function print(n){
    if (n==0){
        return;
    }
    print(n-1)
    console.log("acciojob");

}

print(5)

function mlt(n,m){
    if (m==1){
        return n;
    }
    return n+mlt(n,m-1);
}

console.log(mlt(10,13))


function printXY(x, y) {
 //Write your code here

 if(y==x){
  return  y;
 }
 return printXY(x,y-1)+` ${y}`;
//  console.log(x)
}
console.log(printXY(15,20))