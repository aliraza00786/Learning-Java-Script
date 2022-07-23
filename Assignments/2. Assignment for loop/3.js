// Write an program that uses for loop statement to calculate and print the product of odd integers from 1-25 which are divisible by 5?
let x = 1;
for(let i=1; i<=25; i++){
    if(i%2===1 && i%5===0){
        console.log(i)
    
    x = parseInt(x) * parseInt(i);
    }
}
    console.log(`Product = ${x}`);