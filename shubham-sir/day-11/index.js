let arra =[1,2,4,6];
let num =6
function name1(arra,num){
for(let i=0;i<arra.length;i++){
    if(arra[i]>=num){
        return i;
    }
}
return arra.length
}

console.log(name1(arra,num))