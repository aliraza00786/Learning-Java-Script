// One large chemical company pays its salespeople on commission basis. The salespeople each receive $200 per week plus 9% of their gross sales for that week. For example, sales persons who sells $5000 worth of chemicals in a weak receives $200 plus 9% of $5000, or a total of $650. Develop a program that uses while statement to input each salesperson’s gross sales for last week and calculates and displays that salesperson’s earnings. Process one salespersons figures at time.
let totalEarning
let salesperson;
let salary = 200;
let totalSale = prompt('Enter the gross sale of a sale-person');
let commission = ((totalSale/100)*9);
while(true){

 totalEarning = (salary + commission);
 console.log(`total earning = ${totalEarning}`);
 break;
}

