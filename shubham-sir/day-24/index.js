function numbersum(n){
    if(n==1){
        return n;
    }
    return n+numbersum(n-1)
}

console.log(numbersum(5))