// Write a program that reads a number N, calculates and displays the reverse of the number N?

let reverse = 0;

let num = prompt('Enter a number');
let numb = num;
while(num !=0){
    reverse = (reverse*10) + (num % 10);
    num = parseInt(num/10);
    
}
console.log(`The number is ${numb}`);
console.log(`The Reverse number is ${reverse}`);