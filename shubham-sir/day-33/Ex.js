function count(){
    let num =0;
   let Plus=()=>{
      num++;
      console.log(num);
    };
    let  Remove=()=>{
      num--;
      console.log(num);
    };
    let Restart=()=>{
      num =0;
      console.log(num);
    };

    return{
        Plus,Remove,Restart
    }
}

let counter = count();
counter.Plus();
counter.Plus()