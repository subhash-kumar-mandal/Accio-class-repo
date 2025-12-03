
let selection =(arra)=>{

     for(let i=0;i<arra.length -1;i++){
          let min = i;
          for(let j=i+1;j<arra.length;j++){
               if(arra[j]<arra[min]){
                    min = j;
               }
          }
          if(min!=i){
               let temp = arra [i];
               arra[i]=arra[min];
               arra[min]= temp
          }
     }
 return arra
}

let arra = [1,7,6,54,3,2,0,100,-10,-100]
// selection(arra);
console.log(arra);


function insection (arra){
     for(let i =0;i<arra.length -1;i++){
          let j = i+1;
          while(j > 0 && arra[j]<arra[j-1]){
               let temp = arra[j];
                arra[j]= arra[j-1];
                arra[j-1]=temp
               j--
          }
     }
}

 insection(arra)
 console.log(arra)

