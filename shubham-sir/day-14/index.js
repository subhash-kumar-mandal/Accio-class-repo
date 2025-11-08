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
  console.log(check(arr,n,s))


  