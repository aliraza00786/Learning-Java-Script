const calcAvg = (a, b, c) => (a+b+c)/3;
console.log(calcAvg(3, 4, 5));

// test 1
let scoreDolphins=calcAvg(60, 94,72);
let scoreKoalas = calcAvg(34, 12, 18);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
if(avgDolphins>=2 * avgKoalas){
    console.log(`Dolphins wins the trophy (${avgDolphins} vs. ${avgKoalas})`);
}
else if(avgKoalas>=2 * avgDolphins){
    console.log(`Koalas wins the trophy (${avgKoalas} vs. ${avgDolphins})`);
}
else{
    console.log(`No team wins...`)
}
}
checkWinner(scoreDolphins, scoreKoalas);


// test 2
scoreDolphins=calcAvg(24,38 ,23);
scoreKoalas = calcAvg(70, 52, 68);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// test 3
scoreDolphins=calcAvg(65,56 ,60);
scoreKoalas = calcAvg(70, 52, 68);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);