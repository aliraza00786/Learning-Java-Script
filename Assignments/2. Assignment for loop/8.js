// Write a program that uses a for statement to determine and promote the largest number of ten numbers input by the user


let max = -9999999;
for(i=1 ; i<=10 ; i++){
   x=prompt('Enter number')
   if(x>max){
     max=x;
   }
}
console.log(`The Largest Number is ${max}`);

   
 


