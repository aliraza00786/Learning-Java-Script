
// A pharmaceutical company pays 10% house rent and 90% daily allowance of basic salary to its employees if the basic pay of the employee is less than 1500. The company pays 20% house rent and 95% daily allowance of basic salary to its employees if the basic pay of the employee is greater than or equal to 1500. Write an algorithm that takes basic salary of an employee and calculate and prints his gross salary?


let basicPay = prompt('Enter the Basic Pay');
if (basicPay < 1500)
{
    houseRent = (10/100)*basicPay ;
    dailyAllowance = (90/100)*basicPay ;
    grossSalary = parseInt(houseRent)+parseInt(basicPay)+parseInt(dailyAllowance) ;
    console.log(`The Gross Salary = ${grossSalary}`);
}
else if (basicPay >= 1500)
{
    houseRent = (20/100)*basicPay ;
    dailyAllowance = (95/100)*basicPay ;
    grossSalary = parseInt(houseRent)+parseInt(basicPay)+parseInt(dailyAllowance) ;
    console.log(`The Gross Salary = ${grossSalary}`);  
}