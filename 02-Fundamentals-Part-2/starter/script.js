'use strict';


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


// ! Coding Challenge 1

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
ss


