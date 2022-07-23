 /*  2
    232
   23432
  2345432
   23432
    232
     2
*/



for(i=1; i<4; i++){
    let n =2;
    let row =" ";
    for(j=i; j<=5; j++){
      row+="  ";
    }
      for(j=1; j<i; j++){
        row+=`${n} `;
        n=n+1;
      }
        for(j=1; j<=i; j++){
          row+=`${n} `;
          n=n-1;
        }
        console.log(row);
      }

      for(i=1; i<=4; i++){
        let n=2;
        let row ="   ";
        for(j=1; j<=i; j++){
          row+="  ";
        }
          for(j=i; j<4; j++){
            row+=`${n} `;
            n=n+1;
          }
            for(j=i; j<=4; j++){
              row+=`${n} `;
              n=n-1;
            }
            console.log(row);
          }
          



          