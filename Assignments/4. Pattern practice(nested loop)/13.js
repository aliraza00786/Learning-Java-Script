/*  
       *
      * *
     *   *
    *     *
   *       * 
  *         *
 * * * * * * * 

*/
  

for(i=1; i<=7; i++){
    let row =" ";
    for(j=i; j<=7; j++){
        row+="  ";
    }
    for(j=1; j<i; j++){
        if(i==7 || j==1){
        row+="* ";
    }
    else{
        row+="  ";
    }
    }
    for(j=1; j<=i; j++){
        if(i==7 || j==i){
            row+="* ";
        }
        else{
            row+="  ";
        }
    }
    console.log(row);
}
