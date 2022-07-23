 /*
       8
      86
     864
    8642 
*/  

for(i=1; i<=4; i++){
    let n=8;
    let row =" ";
    for(j=1; j<=4; j++){
    if(j>=5-i){
        row+=`${n}`;
        n=n-2;
    }
    else{
        row+=" ";
    }
}
    console.log(row);
}