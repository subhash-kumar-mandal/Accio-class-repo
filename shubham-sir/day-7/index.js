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


let leftangle =(num)=>{
    for(let i=0;i<=num;i++){
        let str ="";
        for(let j=1;j<=i;j++){
          str += "*"
        }
        console.log(str)
    }
}

// leftangle(10)

let spaceangle =(number)=>{
    let o= number
    for(let i=1;i<=number;i++){
        let str ="";
        for(let j=1;j<=number-i;j++){
            str +=" "
        }

        for(let k=1;k<=i;k++){
            if(i==number||k==1||k==i ){
                str +="*";

            }else{
                str +=" "

            }
        }
        console.log(str)
    }
}

spaceangle(4)


//  assigment question ;

let star = (n)=>{
    for(let i=1;i<=n;i++){
        let str ="";
        for(let j=1;j<=n-i;j++){
            str += " "
        };
        for(let k=1;k<=i;k++){
            str += "* ";

        }
        console.log(str)
    }
}

star(7);


