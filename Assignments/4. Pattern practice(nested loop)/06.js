// 7531
//  531
//   31
//    1

for(let i=1; i<=4; i++){
    let row = "  ";
    for(j=1; j<=4; j++){
      if(j>=i){
      row+= 9-i-j;
    }
    else{
    
      row+=" ";
  }
    }
    console.log(row);
  }