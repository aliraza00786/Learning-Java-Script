
let carNumber;
let amount;
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
    
    starLinePrint();
    console.log(`car number = ${carNumber}`);
    console.log(`paid amount = ${amount}`);
    dashLinePrint();    
    console.log("  ");
}

function takeChoice(){
choice=prompt('press E to exit or any key to continue');
}

function starLinePrint(){
    let row="";
    for(let i=1; i<=10; i++){
        row+="* ";
    }
    console.log(row);
}

function dashLinePrint(){
    let row="";
    for(let i=1; i<=10; i++){
        row+="_ ";
    }
    console.log(row);
}
