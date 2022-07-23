// Write an program that uses for loop statement to sum a sequence of integers. Assume that the first integer read specifies the number of values remaining to be entered. Your program should read only one value per statement. A typical input statement might be 5	100	200	300	400 500?

let x ;
let sum=0 ;
let a=prompt('Enter a number');

for(i=1 ; i<=a ; i++){

    x=prompt('Enter Number ');

    sum =sum + parseInt(x);
    
}
console.log(`sum = ${sum}`);