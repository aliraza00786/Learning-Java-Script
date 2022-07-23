// Write an program that uses for loop statement to find  the smallest of several integers. Assume that the first value read specifies the number of values remaining and the first number is not one of the integers to compare? 

let min = 999999999; 
let val=prompt('Enter a number');

for(i=1 ; i<=values ; i++){

   let x=prompt('Enter Number ');
     if(x<min)  {
         min=x;
     } 
    
}
console.log(`smallest value is:${min}`);



// 2nd way

let number=prompt('Enter numbers to be entered');
let minimum = prompt('Enter a Number');
for(let i=1; i<number ; i++){
   temp=prompt('Enter value');
   if(temp<minimum){
     minimum=temp;
   }
}
console.log(`minimum number is ${minimum}`);
