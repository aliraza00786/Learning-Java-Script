 /*       *
        * * *
      * * * * *
    * * * * * * *
      * * * * * 
        * * *
          *
*/


        for(let i=1; i<=4; i++){
          let row = " ";
          for(j=1; j<=4-i; j++){
            row+="   ";
          }
            for(k=0; k<2*i-1; k++){
              row+=" * ";
            }
          
          console.log(row);
        }
        for(let i=1; i<=4; i++){
          let row = " ";
          for(j=1; j<=i; j++){
            row+="   ";
          }
            for(k=0; k<7-(2*i); k++){
              row+=" * ";
            }
          
          console.log(row);
        }


  
 
