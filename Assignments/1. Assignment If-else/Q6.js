
// Read two positive integer numbers N1 & N2 and then test whether the larger number is exactly divisible by the smaller one. In the process, check that the input numbers are valid (N1 &N2>0) and then check which of the number is greater?

const N1 = prompt('enter first number');
const N2 = prompt('enter second number');
   
if(N1>N2){
    console.log(`${N1},${N2} The grater number is ${N1}`);
}
else {
    console.log(`${N1},${N2} The grater number is ${N2}`);
} if(N1<N2){
    console.log(`${N1},${N2} The smaller number is ${N1}`);
} else{
    console.log(`${N1},${N2} The smaller number is ${N2}`);
}
if(N1>0 && N2>0){
         if (N1%N2 === 0){
         console.log(` ${N1} is exactly divisible by ${N2} `);
        }
        else{
         console.log(` ${N1} is not exactly divisible by ${N2} `);
        }

}
else{
    console.log('Please Enter a valid number');
    }
