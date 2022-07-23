// Write a program that reads two numbers find and display their GCD (Greatest Common Divisor)?

 


let n1 = prompt('Enter the first number');
let n2 = prompt('Enter the second number');
value1 = n1;
value2 = n2;
while(n1!=n2){
    if(n1>n2){
        n1-=n2;
    }
    else{
        n2-=n1;
    }
   }
console.log(`GCD of ${value1} and ${value2} is: ${n1}`);


