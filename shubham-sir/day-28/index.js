


let array = [2,3,4,1,3,4]

for (let index = 0; index < array.length; index++) {
     for (let index1 = 0; index1 < array.length; index1++) {
        if( array[index1]>array[index1+1]){
             let temp =  array[index1];
             array[index1]= array[index+1];
             array[index1+1]=temp
        }
        
     }
    
}

console.log(array)