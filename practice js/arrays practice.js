
let expenses = [];
getInputFromUser();
let sum = addAllExpenses();
let average= calculateAverage();
let smaller = findMinimumExpense();
let grater = findMaximumExpense();


function getInputFromUser (){
    let x;
    do{
       x=prompt('enter expense or "e" to exit ');
        if(!isNaN(x))
            expenses.push(Number(x));
    }while(x!=="e")
    return x;
}

function addAllExpenses (){
    let add = 0;
    for(let i=0; i<expenses.length; i++){
        add+=expenses[i];
    }
    return add;
}

function calculateAverage(){
     avg=(addAllExpenses()/expenses.length);
     return avg;
}

function findMinimumExpense(){

    let min=expenses[0];
    for(i=1; i<expenses.length; i++){
    if(expenses[i]<min){
        min=expenses[i];
    }
}
    return min;
}

function findMaximumExpense(){
    let max=expenses[0];
    for(i=1; i<expenses.length; i++){
    if(expenses[i]>max){
        max=expenses[i];
    }
}
    return max;
}

console.log(expenses);
console.log(`average = ${average}`);
console.log(`maximum number = ${grater}`);
console.log(`minimum number = ${smaller}`);