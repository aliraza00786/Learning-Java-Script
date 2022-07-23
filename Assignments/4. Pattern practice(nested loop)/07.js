/*    1    
     232
    34543
   4567654
  567898765 

*/

for(let i=1; i<=5; i++){
  let row = " ";
  for(j=1; j<=5-i; j++){
    row+=" ";
  }
    for(k=0; k<2*i-1; k++){
      row+="*";
    }
  
  console.log(row);
}
