// Write an program that uses for loop statement to calculate and print the product of odd integers from 10-20

x = 1 ;
for(let i=10 ; i<=20 ; i++){
    if(i%2===1){
        console.log(i);
         
        x = parseInt(x) * parseInt (i) ;  
    }

     
    
}
    console.log(`Product of odd numbers = ${x}`);
    
    
