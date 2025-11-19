// binary serach;
 // every nex time haf the array and swap left and right ;
 // every time check mix point ;
let  arr =[-10,1,11,22,54,101];
let arr1 =[100,80,70,50,10,0];

 let bs =(arra,target)=>{
    let first =0;
    let end =arra.length-1;
    while(first<=end){
        let mid = Math.floor((first+end)/2);
    
        if(arra[mid]==target){
            return mid;
        }else if(arra[mid]<target){
            first =mid+1;
        }else{
            end =mid-1;
        }
    }
    return -1;
 }
//  console.log(bs(arr,-101));


let bs_reverse =(arra,tar)=>{
    let first =0;
    let end = arra.length-1;
    while(first<=end){
        let mid =Math.floor((first+end)/2);
        if(arra[mid]==tar){
            return mid ;
        }else if(arra[mid]<tar){
            end =mid-1;
        }else{
            first =mid+1;
        }
    }
    return -1
}
console.log(bs_reverse(arr1,80));


// objects ;
// ->  object have key value pair ;
// -> object dot notation ;

let obj ={
    name:"subhash",
    age :20
}
console.log(obj.name);
console.log(obj['age']);

// add 
obj.fovcolor="red";
console.log(obj);
// ->  update;
obj['name'] = 'aman';
// delete
delete obj.fovcolor;
console.log(obj)


