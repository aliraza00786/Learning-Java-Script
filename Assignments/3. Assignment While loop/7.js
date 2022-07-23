// Write a program that uses a while loop statement to calculate and print the average of several integers. Assume the last value read is sentinel 9999?

let temp ;
let values = 0;
let sum = 0;
let avg = 0;
while(temp!= 0){
    temp = prompt('enter value');
    console.log(temp);

    sum = sum+parseInt(temp);
    values = values+1;
    avg = sum/values;
    

}
console.log(`Average = ${avg}`);
