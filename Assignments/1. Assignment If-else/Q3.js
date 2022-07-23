
// Write a program that calculates roots of quadratic equation. Implement all three cases of roots. (Roots are equal/roots are real/roots are imaginary)?


let a = prompt('Enter Value of a ');
let b = prompt('Enter Value of b ');
let c = prompt('Enter Value of c ');

let disc = (b*b - 4*a*c) ;
 let x = Math.sqrt(b*b - 4*a*c);


    if (disc > 0){
     root1 = (-b+x)/(2*a) ;
     root2 = (-b-x)/(2*a) ;
        console.log( ` Root1 = ${root1} and Root2 = ${root2} : Roots are Real `);
    }
    else if (disc === 0){
    root1 = root2 = -b/(2*a)
        console.log(` Root1 = ${root1} and Root2 = ${root2} : Roots are Equal`);
    }
    else if(disc < 0){
    realPart = (-b/(2*a));
    imgPart = Math.sqrt(-disc)/(2*a);
        console.log(`${realPart} + ${imgPart}i and ${realPart} - ${imgPart}i  
        Roots ar Imaginary`);
    }

// let root1, root2;


// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let discriminant = b * b - 4 * a * c;


// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`The real roots of quadratic equation are ${root1} and ${root2}`);
// }


// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`The equal roots of quadratic equation are ${root1} and ${root2}`);
// }


// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log(
//     `The imaginary roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
// }



