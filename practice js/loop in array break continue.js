
/*
const jonas = [
 'jonas',
 'john',
  1991,
 'teacher',
 ['michael', 'peter', 'steven'],
 
];

const types = [];

for(i=0; i<jonas.length; i++){
    console.log(jonas[i]);
    console.log(typeof jonas[i]);
    // filling types array
    // types[i] = typeof jonas[i];   // 1st method
    types.push(typeof jonas[i]);  // 2nd method

}
console.log(types);

const years = [1991, 2007, 1965, 2002];
const ages = [];
for(let i=0; i<years.length; i++){
    ages.push(2037-years[i]);
}
console.log(ages);

// continue and break statements
console.log('====ONLY STRINGS====');

for(i=0; i<jonas.length; i++){
   if(typeof jonas[i] !== 'string') continue ;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('====BREAK WITH NUMBERS====');

for(i=0; i<jonas.length; i++){
   if(typeof jonas[i] === 'number') break ;

    console.log(jonas[i], typeof jonas[i]);
}



// reverse order (4,3.....0)
const jonas = [
    'jonas',
    'john',
     1991,
    'teacher',
    ['michael', 'peter', 'steven'],
    
   ];
   for(let i=jonas.length - 1 ; i>=0; i--){
    console.log(i, jonas[i]);
   }
    
//    loop with in a loop

for(let exercise = 1 ; exercise<=3; exercise++){
    console.log(`-----starting exercise ${exercise}-----`);

    for(let rep = 1; rep<=5; rep++){
        console.log(`lifting weight turn ${rep}`);
    }
}


// while loop
let rep = 1;
while(rep<=10){
    console.log(`lifting weight turn ${rep}`);
    rep++ ;
}
*/

let dice = Math.trunc(Math.random() * 6) +1 ;
while(dice !== 6) {
    console.log(`you rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) +1 ;    
    if(dice === 6)console.log(`loop is about to end....`);
}