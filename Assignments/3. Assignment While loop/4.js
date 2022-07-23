// Write a program that reads two numbers find and display their LCM (Least Common Multiple)?
   

   let a=prompt('enter the first number');
   let b=prompt('enter the second number');
   let lcm;
   if(a>b)
   lcm = a;
   else
   lcm = b;
   while(true) {
      if( lcm%a==0 && lcm%b==0 ) {
         console.log(`The LCM of ${a} and ${b} is: ${lcm}`);
         break;
      }
      lcm++;
   }
   
