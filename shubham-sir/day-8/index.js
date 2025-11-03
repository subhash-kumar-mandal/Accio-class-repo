
let alphabate = (n) => {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                str += String.fromCharCode(i + 65)
            }
        }
        console.log(str)
    }
};

// alphabate(2);

let print = (n) => {

    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j < n; j++) {

            if (j <= i) {
                str += String.fromCharCode(65 + ((i + j) % 26));
            }
        }
        console.log(str)
    }
};
// print(100)



function astro(start,end) {
    for (let i=start;i<=end;i++)
    {   
        let temp =i;
        let sum = 0;
        let power = Math.ceil(Math.log10(i));
        while(temp>0){
            let digit = temp%10;
            temp = Math.floor(temp/10);
            sum +=digit**power
        }

        if(sum===i){
            console.log(i)
        }
    }
} 

astro(1,153)