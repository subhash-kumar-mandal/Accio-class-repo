
let alphabate =(n)=>{
for(let i=0;i<n;i++){
    let str =""
    for(let j=0;j<n;j++){
      if(j<=i){
        str += String.fromCharCode(i+65)
      }
    }
    console.log(str)
  }
};

// alphabate(2)