let columwise=(arra)=>{
    let str ='';
    for(let i=0;i<arra.length;i++){
        for(let j=0;j<arra[i].length;j++){
            str+=arra[j][i]+ " "
        }
    }
    console.log(str)
}
columwise(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)


let columwise1=(arra)=>{
    
    for(let i=0;i<arra.length;i++){
        let str ='';
        for(let j=0;j<arra[i].length;j++){
            str+=arra[j][i]+ " "
        }
        console.log(str)
    }

}

columwise1(
    [
        [1,1,1,1],
        [2,2,2,2],
        [3,3,3,3],
        [4,4,4,4]
    ]
)