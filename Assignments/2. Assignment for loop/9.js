// Write an algorithm that determines the first n (user supplied number) Fibonacci numbers
let n1=0 ;
let n2=1 ;
let n3;
let n=prompt('enter the number of terms')
for(let x=1 ; x<=n ; x++){
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}

