// Write a program that reads in the size of a square and then prints a hollow square of that size out of asterisks and blank.  Your program should work for squares of all sides sizes between 1 and 20?

/*   *******
     *     *
     *     *
     *     *
     *******
*/

for (let i = 0; i<5; i++) {
    let row = " ";
  for (let j = 0; j<7; j++) {
    if (i === 0 || i === 5-1) {
      row += "*";
    }
    else {
      if (j === 0 || j === 7-1) {
        row += "*";
      }
      else {
       row += " ";
      }
    }
  }
  
  console.log(row);
}