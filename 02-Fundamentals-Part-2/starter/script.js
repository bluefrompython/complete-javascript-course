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




const calcuAge2 = function (birthYear) {
    return 2022-birthYear;
}

//     ARROW FUNCTIONS

const calcuAge3 = birthYear => 2037- birthYear

const yearsuntilRetirement= birthYear => {

}