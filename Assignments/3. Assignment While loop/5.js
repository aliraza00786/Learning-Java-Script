// Write a program that reads numbers repeatedly until zero is entered, find and display the smallest and the largest number. Use while loop statement. 


let temp=Number(prompt('enter the number'));
 let min =temp;
 let max =temp;
 
while(temp!=0){

  if(temp>max){
    max = temp ;
  }
    else if(temp<min){
    min = temp ;
  }
  temp=Number(prompt('enter the number'));

}
console.log(`Largest number is ${max}`);
console.log(`Smallest number is ${min}`);
