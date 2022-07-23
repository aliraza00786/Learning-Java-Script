// Write a program that reads unsigned numbers in the range 10-60000 continually until zero is entered. Find and display how many numbers are completely divisible by 9, odd and even. Use while loop statement?

let countDivisible=0;
let countEven=0;
let countOdd=0;


let n = prompt('Enter number');
let even=n,odd=n,divisible=n;
while(n>9 && n<=60000 && n!=0){
   

if(n%9===0){
        divisible = n;
        countDivisible=countDivisible+1;
       }
else if(n%2===0){
    even = n;
    countEven=countEven+1;
   }
else{
    odd = n;
    countOdd=countOdd+1;
  }
  n = prompt('Enter number');
}
console.log(` ${countDivisible} numbers are exactly divisible by 9`);
console.log(`${countEven} even numbers`);
console.log(`${countOdd} odd numbers`);


