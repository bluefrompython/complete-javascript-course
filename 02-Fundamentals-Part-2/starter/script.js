'use strict';

/*
let hasDriverslicense = false;
const passTest =true;

if (passTest) hasDriverslicense = true;
if(hasDriverslicense) console.log('I can drive :D');
*/




/*
function logger(){
    console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice,'======20';
}

const appleJuice=fruitProcessor(5 ,0);
console.log(appleJuice)
*/




/*

//function declaration
const age=calcuAge1(1991);
function calcuAge1(birthYear){
    return 2022 -birthYear
}


//function expression
const age2 =calcuAge2(2002);
const calcuAge2 = function (birthYear) {
    return 2022-birthYear;
}

console.log(age,age2);

// function declaration vs function expression

// Declaration: you can call function before actually declaring

// Expression(without name of function ):cannot call function before initialization

*/



/* 
const calcuAge2 = function (birthYear) {
    return 2022-birthYear;
}

//     ARROW FUNCTIONS

const calcuAge3 = birthYear => 2037- birthYear

const yearsuntilRetirement= birthYear => {

} */

/*
let hasDriversLicense =false;
const passTest =true;

if (passTest) hasDriverLicense= true;
if (hasDriversLicense) console.log(`I can drive now`)
*/


//Arrow function


//Arrow function
// birthYear => 2022-birthYear
// now lets store it for reusablility



/*

const calcAge3 = birthYear => 2022-birthYear;

const age3= calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age =2022 -birthYear;
    const retirement =65-age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991,'HAHA'));


//


function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges,`;
    return juice
}

console.log(fruitProcessor(1,2))
console.log(fruitProcessor(12,2))

*/


// ? Coding Challenge 1

/*
function calcAverage(a,b,c){
    return (a+b+c)/3
}

function checkWinner(aveDolphins,avgKoalas){
    if (aveDolphins/avgKoalas>=2){
        const a =`Dolphin win (${aveDolphins} vs ${avgKoalas})`
        console.log(a)
    }
    else if (avgKoalas/aveDolphins>=2){
        const b = `Koalas win (${avgKoalas} vs ${aveDolphins})`  
        console.log(b)
    }
    else {
        console.log('No winners')
    }
}

const aveDolphins1= calcAverage(44,23,71)
const avgKoalas1= calcAverage(65,54,49)

checkWinner(aveDolphins1,avgKoalas1);

const aveDolphins2= calcAverage(85,54,41)
const avgKoalas2= calcAverage(23,34,27)

checkWinner(aveDolphins2,avgKoalas2);

*/ 


// ? Arrays

/*

const friends = [1,2,3,4]

// Add elements
friends.push('jay')
console.log(friends)
friends.unshift("blue")
// ! unlike python out of bound errors js allows out of bount assingment by giving them undefined parameters
friends[5] = 1
console.log(friends[111])
const newLength = friends.push("haha")
console.log(friends,newLength)

// Remove elements

friends.pop();
console.log(friends)
const popped = friends.pop();
console.log(friends)
console.log(popped)

friends.shift();
console.log(friends)

console.log(friends.indexOf(4))
// * -1 for element not in array
console.log(friends.indexOf(5))


// ? list.includes compares strict equality ===
console.log(friends.includes(4))
console.log(friends.includes('4'))

*/

// ? Coding Challange 
/*
function calcTip (a){

    if (50<= a && a<=300 ){
        const Tip = a*0.15
        return Tip;
    }
    else{
        const Tip = a*0.2
        return Tip ;
    }
  }

function ternarycalcTip(a){
    return a>= 50 && a<=300 ? a*.15 : a*.20
}

console.log(calcTip(100))

const bills = [123,555,44]
const tips =[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

console.log(bills,tips)

const Total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(Total)
*/

// ? OBJECTS or should we call them Dictionary

/* 
const jonas = {
    firstName: 'Aw3',
    lastName: 'Bss',
    age: 3,
    job: 'teacher',
    friends: ['lol','no','friends']
}

console.log(jonas)
console.log(jonas.lastName,jonas['lastName'])
let key = 'Name'

// ?not allowed 
// ! console.log(jonas['first' + key],jonas.('first'+MediaKeys))

console.log(jonas['location'])
jonas.location = 'pop'
console.log(jonas)

console.log(jonas.friends.length)
 */

//? Object Methods
/* 
const jonas = {
    firstName: 'Aw3',
    lastName: 'Bss',
    birthYear: 2003,
    job: 'teacher',
    friends: ['lol','no','friends'],
    hasDriversLicense: true,

    clacAge: function(birthYear) {
        return 2022-birthYear
    },

};

console.log(jonas.clacAge    (jonas.birthYear))
console.log(jonas['clacAge']      (0))

 */

// ? USING----------"THIS"--------------
/* 
const jonas_this = {
    firstName: 'Aw3',
    lastName: 'Bss',
    birthYear: 2003,
    job: 'teacher',
    friends: ['lol','no','friends'],
    hasDriversLicense: true,

    clacAge: function() {
        // console.log(this)
        this.age= 2022-this.birthYear
        return this.age
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.clacAge()}
        year old teacher,
        and he has ${this.hasDriversLicense ? 'a': 'no'}
        driver's license` 
    }
};

// ! we have to caclucate age(property) to access again next time
console.log(jonas_this.age)
console.log(jonas_this.clacAge())

console.log(jonas_this.age)
console.log(jonas_this.age)

console.log(jonas_this.getSummary())
 */

// ? Coding Challenge 3

/* 
const Mark = {
    first:'Mark',
    last:'Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
}

const John = {
    first:'John',
    last:'Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
}

console.log(`${Mark.first}'s BMI (${Mark.calcBMI()}) is 
${(Mark.BMI > John.calcBMI()) ? 'greater' : 'lesser'} 
than ${John.first}'s (${John.BMI}) `)
 */

