
// Write a program that finds minimum and maximum of three numbers using multiple-if or nested-if statement?


const a = prompt('Please Enter First Number');
const b = prompt('Please Enter Second Number');
const c = prompt('Please Enter Third Number');

if(a > b && a > c) {
        console.log(`${a}, ${b}, ${c} The maximum number is ${a}`);
} else if(b > a && b > c) {
        console.log(`${a}, ${b}, ${c} The maximum number is ${b}`);
} else {
        console.log(`${a}, ${b}, ${c} The maximum number is ${c}`);
}
 if(a < b && a < c) {
        console.log(`${a}, ${b}, ${c} The minimum number is ${a}`);
} else if(b < a && b < c) {
        console.log(`${a}, ${b}, ${c} The minimum number is ${b}`);
} else {
        console.log(`${a}, ${b}, ${c} The minimum number is ${c}`);
}
