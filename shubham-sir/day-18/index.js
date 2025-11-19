function solution(str) {

let i= 0;
while(i<str.length){
  if(str[i]>="A"&& str[i]<="Z"){
    let j=i+1;
    let temp =str[i]
    while(str[j]>="a"&& str[j]<="z"){
      temp+=str[j];
      j++
    }
    console.log(temp);
    i=j;
    }
}
}

solution("IAmAJavaProgrammer")