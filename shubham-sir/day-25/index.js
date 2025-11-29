function star(n){
    if(n==0){
        return ;
    }
    console.log("*".repeat(n));
    star(n-1);
    // console.log("*".repeat(n));
}
// star(5);

let arr1=[1,2,3,4];

function sum(arr,i){
    if(i==0){
      return  arr[i];
    }
    return arr[i]+sum(arr,i-1)
}
console.log(sum(arr1,arr1.length-1))




let size =4-1
let arr =[1, 2, 3, 4];

function sumarr (arr,i){
    if(i==0){
        return arr[i];
    }
   return sumarr(arr,i-1)+` ${arr[i]}`
}

console.log(sumarr(arr,size))


let min=[1,2,3,-1];

function  mini(arr,index){
    if(index==arr.length-1){
        return arr[index];
    }
    return Math.min(arr[index],mini(arr,index+1));
}

console.log(mini(min,0))




function firstIndex(A, T, startIndex) {
  //Write your code here
  if(A[startIndex]==T){
    return startIndex;
  }
  if(startIndex==A.length){
    return -1;
  }
  return firstIndex(A,T,startIndex+1)

}

let arra = [5 ,6 ,4 ,6 ,1 ,2];

console.log(firstIndex(arra,6,0))

