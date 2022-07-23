let row="";
let carNumber;
let amount;


for(let i=1; i<=10; i++){
    row+="* ";
}
let choice;

do{
    inputFromUser();
    tokenPrint();
    takeChoice();
}
while(choice!='e')

function inputFromUser(){
carNumber=prompt('Enter car number');
amount=prompt('enter amount');
}

function tokenPrint(){
    console.log(row);
    console.log(`car number = ${carNumber}`);
    console.log(`paid amount = ${amount}`);
    console.log(row);
    console.log("  ");
}

function takeChoice(){
choice=prompt('press E to exit or any key to continue');
}