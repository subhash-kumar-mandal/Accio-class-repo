
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


  
let new_arra =[6,-4,3,2,-3]
let size1 = new_arra.length;
  function splitArray (N, arr){
	// Write your code here

	let sum=0;
	for(let item of arr){
		sum+=item 
	}

	let temp= sum;
	let sp =-1;
	 
	 for(let i=0;i<N;i++){
		temp -=arr[i];
		if(temp == (sum/2)){
			sp=i	
		}
	 }

	 if(sp== -1){
		console.log("Not Possible")
	 }else{
		console.log(arr.slice(0,sp+1).join(" "))
		console.log(arr.slice(sp+1,N).join(" "))
	 }
	
}

splitArray(size1,new_arra);
