function print (n){
    if(n==6)return ;
    console.log("namaste");
    n++;
    print(n)
}

print(1);

function hello(n){
 if (n==0){
    return;
 }
 console.log("hello bro");
 hello(n-1)
}
hello(5)