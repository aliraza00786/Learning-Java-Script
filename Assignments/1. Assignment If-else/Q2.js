
// Write a program that creates a simple calculator. It reads two float numbers N1 ,N2 and a character CH(+,-,*,/), then perform calculations depending upon the type of character enter by the user and display the result in the format...N1 op N2=result?

let N1 = prompt('Enter the First Number');
let N2 = prompt('Enter the Second Number');
let opr = prompt('Enter yor choice');
if(opr === '+'){
 sum = parseInt(N1) + parseInt(N2);
 console.log(` ${N1} + ${N2} = ${sum}`);
}
else if (opr === '-'){
sub = parseInt(N1) - parseInt(N2);
console.log(` ${N1} - ${N2} = ${sub}`);
}
else if (opr === '*'){
mul = parseInt(N1) * parseInt(N2);
console.log(` ${N1} * ${N2} = ${mul}`);
}
else if (opr === '/'){
 div = parseInt(N1) / parseInt(N2);
 console.log(` ${N1} / ${N2} = ${div}`);
}
else{
    console.log('Value is invalid');
}