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
