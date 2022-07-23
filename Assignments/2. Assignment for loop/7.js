// Write an program to calculate : PI = 4-4/3+4/5-4/7+4/9-4/11+4/13

let sign = 1;
let pi = 0;
for(let i = 1 ; i<=13 ; i+=2){
    pi = (4/i);
    sign = (sign * (-1));
    
}
console.log(pi);