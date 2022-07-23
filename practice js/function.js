







   printLine('X');
   console.log(" ");
   printLine('0');
   console.log(" ");
   printLine('*');

    function printLine(character){
        let row="";
        for(let i=1; i<=10; i++){
            row+= character+ " ";
        }
        console.log(row);
    }

