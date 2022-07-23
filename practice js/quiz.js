let year = prompt('enter the year');
if ( year >=500 && year<=2000){
      if( year%4===0  && year%400===0){
                      console.log('year is leap');
                       }
                      else if (year%100 !=0)
                       {
                        console.log('year is leap');
                        }
                        else 
                        {
                         console.log('year is not leap');
                         }
      }
      else
       { 
        console.log('enter a valid year');
         }