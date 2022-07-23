// Write a program that reads user age and prints “CHILD” if age <18, “ADULT” if 18<=age<35 and “SENIOR” if age >=35? 

let age = prompt(`Enter your age`);
if (age < 18){
    console.log("Child");
 } 
 else if(age >=18 && age <35){
    console.log("Adult");
 } 
 else if(age >=35){
    console.log("Senior");
}
else
{
    console.log('Enter a valid number');
}


