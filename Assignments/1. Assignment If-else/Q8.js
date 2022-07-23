
// Write a program that takes the length of two legs of a right triangle as input and calculates the area and hypotenuse?

 base = prompt('Enter the Base of triangle');
 height = prompt('Enter the height of triangle');

 const area =  (base*height)/2 ;
 {
    console.log(` base = ${base}, Height = ${height} \n The area of a triangle is = ${area} `)
 }
// to finding hypotenuse

const hypotenuse =Math.hypot( Math.sqrt(base**2 + height**2)) ;
 {
 console.log(`The hypotenuse of this triangle = ${hypotenuse}`);
 }