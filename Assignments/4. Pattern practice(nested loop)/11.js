  /*
    Z  Z  Z  Z  Z
             Z
          Z   
       Z
    Z  Z  Z  Z  Z   
*/

for(i=1; i<=5; i++){
   let row = " ";
   for(j=1; j<=5; j++){
      if(i==1 || i==5 || i+j==5+1){
         row+="Z ";
      }
      else{
         row+="  ";
      }
   }
   console.log(row);
}

    