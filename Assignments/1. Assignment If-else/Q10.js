
// 01/01/1900, the day was Monday. If any year is input through keyboard, write a program to find out the day on first January of that year?

let year = new Date(prompt('Enter the Year'));
if (year) {
    day= year.getDay();
   days  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(year.toDateString());
}