
// Write a program that reads an integer number from the user (within range 1-100). Then it check that whether the number is greater than, less than or equal to 50?


let a = Number(prompt('Enter the Number'));
if (a > 0 && a <= 100)
{
if(a<50)
{
    console.log(` ${a} is less than 50 `);
}
else if (a===50)
{
    console.log(` ${a} is Equal to 50`);
}
else if (a>50)
{
    console.log(` ${a} is Grater than 50`);
}
}
else{
    console.log('Enter the valid number');
}