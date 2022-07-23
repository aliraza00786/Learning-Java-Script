/*
// objects

const jonas = {
    firstName: 'jonas',
    lastName: 'john',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};
console.log(jonas);

// Dot vs bracket notation

console.log(jonas.job);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const InterestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job and friends');
if(jonas[InterestedIn]){
    console.log(jonas[InterestedIn]);
}
else{
    console.log('wrong request ! choose between firstName, lastName, age, job and friends');
}

// to add properties

jonas.location = 'portugal';
jonas['twitter'] = '@jonasjohn';
console.log(jonas);

// challenge
// "jonas has 3 friends, and his best friend is michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, but his best friend is ${jonas.friends[0]}`);


// object methods
const jonas = {
    firstName: 'jonas',
    lastName: 'john',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear){
    //     return 2037 - birthYear ;
    // }


    // calcAge: function (){
    //     // console.log(this);
    //     return 2037 - this.birthYear ;
    // }

    calcAge: function (){
        this.age = 2037 - this.birthYear;
        return this.age ;
    },
    getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge']);

// challenge
console.log(jonas.getSummary());
*/

