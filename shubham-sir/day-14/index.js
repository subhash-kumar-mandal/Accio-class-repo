
let new1=[4,5,0,-2,-3,1];
let length = new1.length;
let size = 5

function subarrayDivisbleByK(arr,n,k){
 let ans =0;
  for(let i=0;i<arr.length;i++){
    let sum =0;
    for(let j=i;j<n;j++){
      sum += arr[j]
      if(sum% k==0){
       ans++
      }
    }
    
  }
return ans
}

console.log(subarrayDivisbleByK(new1,length,size))

let arr =[1,2,3,4,5,6,7,8,9,10];
let window =3;
let target =6

 function check(arr,n,s){
  for(let i=0;i<=arr.length - n;i++){
    let sum =0;

    for(let j=i;j<i+n;j++){
      sum+=arr[j]
    }
    if(sum===s){
      return("YES")
    }
    
  }
  return "NO"
  }
  console.log(check(arr,window,target))


  