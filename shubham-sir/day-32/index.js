// 2) Higher-Order Functions (HOF)
// ✅ किसी दूसरे function को argument के रूप में लेता है
// ✅ किसी function को return करता है
// NOTE: बस इतना सा difference hai


function seyhello(){
    return(()=>{
        console.log("Hello");
    });
};

let cons = seyhello();
cons() // Hello 



function CallBack(fn){
     fn();
};

CallBack(()=>{
    console.log("hello i am callback Fn()")
});





function reprint(fn){
    fn();
    return (()=>{
        console.log("HELLO I am Return Function ");
    });
};

let inner = reprint(()=>{
    console.log("Callback Function");
});

inner();

