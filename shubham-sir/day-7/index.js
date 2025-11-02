let reverseangle= (n)=>{
    for(let i=0;i<n;i++){
        let str ="";
        for(let j=1;j<=n-i;j++){
          str += "*"
        }
        console.log(str)
    }
}

// reverseangle(6)