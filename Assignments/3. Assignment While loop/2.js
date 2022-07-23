// Write a program that reads a five-digit integer and determines whether the number is palindrome?

let reverseNumber = 0;
let number = prompt('Enter the Number');
let actualNumber = number;

while(number !=0){
    mod = number%10;
    reverseNumber = (reverseNumber*10)+mod;
    number = parseInt(number/10) ;
}

if(actualNumber==reverseNumber){
    console.log(`The Number is Palindrome`);
}
else{
    console.log(`The Number is not Palindrome`);
}
