/*   X           X   
      X       X
        X   X
          X
        X   X
      X       X
    X           X 

*/

for(i=1; i<=5; i++){
    let row = " ";
    for(j=1; j<=5; j++){
        if(i==j || i+j==5+1){
        row +="X ";
    }
    else{
        row +="  ";
    }

    }
    console.log(row);
}