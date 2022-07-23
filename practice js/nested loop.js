// // nested loop

// let n=prompt('enter the number');
// let length=prompt('enter the length of itration');
// for(let i=2; i<=n; i++){
//     console.log(`starting table of ${i}`);

//     for(let j=1; j<=length; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
//     console.log(`______________________`);
// }


// // without nested loop

// let n=prompt('enter the number');
// for(let i=1; i<=10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }


// //  pattern print

// for(i=1; i<=5; i++){
//     let row = "";
//     for(j=1; j<=5; j++){
//         row+= ` ${i} `;
//     }
//     console.log(row);
// }

// // Triangle

// for(i=1; i<=5; i++){
//     let row = " ";
//     for(j=1; j<=i; j++){
//         row+=' * ';
        
//     }
//     console.log(row);
// }

// 2nd

// for(i=1; i<=5; i++){
//     let row =" ";
//     for(j=i; j<=5; j++){
//         row+="  ";
//     }for(j=1; j<=i; j++){
//         row+='* ';
        
//     }
//     console.log(row);
// }

// 4th  hill pattern

// for(i=1; i<=5; i++){
//     let row =" ";
//     for(j=i; j<=5; j++){
//         row+="  ";
//     }for(j=1; j<i; j++){
//         row+='* ';
//         }
//     for(j=1; j<=i; j++){
//         row+='* ';
//         }
//     console.log(row);
// }




// // 3rd

// let n =prompt('enter number');
// for(i=1; i<=n; i++){
//     let row = " ";
//     for(j=1; j<=i; j++){
//         row+=` ${i} `;
        
//     }
//     console.log(row);
// }


// // 4th


// let n =prompt('enter number');
// for(i=1; i<=n; i++){
//     let row = " ";
//     for(j=1; j<=i; j++){
//         row+=' * ';
        
//     }
//     console.log(row);
// }

// // 5th


// for(i=1; i<=5; i++){
//     let row = " ";
//     for(j=1; j<=i; j++){
//         if(i===j){
//         row +=' * ';
//     }
//     else{
//         row +=' ';
//     }
//     }
//     console.log(row);
// }


// // 6th



// // print pattern of X.
// for(i=1; i<=5; i++){
//     let row = " ";
//     for(j=1; j<=5; j++){
//         if(j===6-i || i===j){
//         row +=' * ';
//     }
//     else{
//         row +=' ';
//     }
//     }
//     console.log(row);
// }


// // pattern of L.
// for(i=1; i<=5; i++){
//     let row = " ";
//     for(j=1; j<=5; j++){
//         if(j===5){
//         row +=' L ';
//     }
//     else if(i===5){
//         row +=' L ';
//     }
   
//     }
//     console.log(row);
// }


// hollow square 

// for (let i = 0; i<5; i++) {
//     let string = " ";
//   for (let j = 0; j<7; j++) {
//     if (i === 0 || i === 5-1) {
//       string += "*";
//     }
//     else {
//       if (j === 0 || j === 7-1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
  
//   console.log(string);
// }



// // diamond 
// let n = 5;
// let row = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     row += " ";
//   }
//   // printing star
//   for (let k = 0; k<(i*2)-1; k++) {
//     row += "*";
//   }
//   row += "\n";
// }
// // downside pyramid
// for (let i =1; i <= n-1; i++) {
//   // printing spaces
//   for (let j =0; j<i; j++) {
//     row += " ";
//   }
//   // printing star
//   for (let k = (n-i)*2-1; k>0; k--) {
//     row += "*";
//   }
//   row += "\n";
// }
// console.log(row);



// pyramid

// let n = 5;
// let row = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     row += "*";
//   }
//   row += "\n";
// }
// console.log(row);




