 function firstUniqChar(s) {
    let fc = new Map();

    for (let i = 0; i < s.length; i++) {
        fc.set(s[i], (fc.get(s[i]) || 0) + 1)
    }
  
    for(let i=0;i<s.length;i++){
        if(fc.get(s[i])==1){
            return i
        }
    }

    return -1
};

// console.log(firstUniqChar("dddccdbba"))


function  isAnagram(s, t) {
const map = new Map();
 
 for(let item of s){
    map.set(item,(map.get(item)||0)+1)
 }
//  console.log(map)
for(let i=0;i<t.length;i++){
    // if(map.has(s[i])){
    map.set(t[i],(map.get(t[i])||0)-1)
    // }else{
        // map.set(s[i],1)
    // }
}
console.log(map)
};

// isAnagram("rat","car")