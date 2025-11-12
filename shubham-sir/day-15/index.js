

function find(arr,n){
    for(let i=0;i<arr.length - 2;i++)
    {
        for(let j=i+1;j<arr.length - 1  ;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                if(arr[i]<arr[j]&&arr[j]<arr[k]&&(arr[j]**2 == arr[i]*arr[k]))
                {
                    console.log(arr[i],arr[j],arr[k])
                }
            }
        }
    }
}

let arra=[1,2,6,10,18,54];
find(arra)