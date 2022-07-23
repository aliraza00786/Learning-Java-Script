/*   7
    57
   357
  1357 

  
*/


for(let i=1; i<=4; i++){
  let row = "  ";
  for(j=1; j<=4; j++){
    if(j>=5-i){
    row+=j*2-1;
    
  }
  else{
  
    row+=" ";
}
  }
  console.log(row);
}

