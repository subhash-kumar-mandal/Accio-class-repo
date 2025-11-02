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


let rightangle_space =(n)=>{
    for(let i=1;i<=n;i++){
        let str ="";
        for(let j=1;j<=n-i;j++){
             str +=" "
        }
        for(let k=1;k<=i;k++){
            str += "*"
        }
        console.log(str)
    }
}

// rightangle_space(4)



let squre = (n)=>{
    for(let i=1;i<=n;i++){
        let result = "";
        for(let j=1;j<=n;j++){
            if(i==1 ||i==n || j==1 ||j==n){
                result +="* "
            }else{
                result +="  "
            }
        }
        console.log(result)
    }
}

squre(4)