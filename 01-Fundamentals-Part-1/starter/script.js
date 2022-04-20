// console.log(1+44-55*4+334)

// let a;
// let b;
// let c =545;

// console.log(c)

// console.log(true)
// let grape = true;
// console.log(grape)
// console.log(typeof grape,typeof console.log,typeof true,typeof a,typeof c)
// console.log(typeof null) // type of null is object because of leagacy reason . its a bug.

// let age = 30; //let is mutable

// age =40;

// const badge=50;

// badge=61;
// immutable not allowed to mutate

// const aa=null;

// var job;
// console.log(job)


// const ageofme= 49-44;
// const ageofhim=46-42;
// console.log(ageofhim,ageofme)
// console.log(ageofhim/10,ageofhim**3,ageofhim%2)



// Operators
/*
const pepe="pepe"
let meme="meme"
let x= 16
let y=8
console.log(x|y)
console.log(pepe||meme)

console.log(x)

//Assignment operators

x++;
console.log(x,"x++;")
x--
console.log(x,"x--")
x +=y;
console.log(x,"x+=y;")
console.log({"x":x,"x*=x":x*=x,})
*/




//comparison operators

// < less than , > greater than, < lessthan equalto, > greater than equalto:

// console.log(x>y,x<y)

// var b = x>y;
// console.log(typeof b)





// Challenge 1 + Challenge 2





/*
const markWeights=78
const markHeight = 1.95

const johnWeights=85
const johnHeight =1.76

markBMI= markWeights/markHeight**2
johnBMI =johnWeights/johnHeight**2


markHigherBMI = markBMI>johnBMI

console.log(`markBMI:${markBMI}`)
console.log(`johnBMI:${johnBMI}`)
// console.log(markHigherBMI)

if (markBMI>johnBMI){
    console.log(`Mark's BMI is higher than John's BMI by ${markBMI-johnBMI}, at ${markBMI}`)
}
else{
    console.log(`John's BMI is higher than Mark's BMI by ${johnBMI-markBMI}, at ${johnBMI}`)
}
*/






// String literals


/*
firstname="PURR"
year=23
job="developer"
const news =`I'm ${firstname}, a ${year} year old ${job}.`
console.log(news);

console.log(`Just a regular string.`)

console.log('Strings with \n\multiple \n\lines')

console.log(`Strings
multiple
lines
using backticks`)
*/







//    if statement

/*
let age;
age=17
const isOldEnough= age >= 18;

if (isOldEnough){

    console.log(`you can start driving licence `)
}
else{
    const years_Left = 18-age;
    console.log(`You have to wait,
${years_Left} years`)
}

*/




/*

// Type Conversion 

const inputYear='1994';

console.log(Number(inputYear)+12)
console.log(inputYear+12)


//         NaN(Not a Number) is a number type it self :p
console.log(Number("apple"),typeof Number("apple"))

console.log(String(23),23)

*/



/*

// Type Coercion


console.log("I am "+23+ ' years old',23)
console.log("I am "+'23'+ ' years old','23')
console.log("I am "+String(23)+ ' years old',String(23));

// not all operation has Type Coercion

console.log(`"23"-"10"-3: ${"23"-"10"-3}`
,`vs`,
`"23"+"10"+3: ${"23"+"10"+3}`
);
// plus operator (+) converts numbers to string to concatinate
// minus operator(-) convert strings to numbers to operate substraction
console.log('23'*"2");console.log('233'/'3')

let n='1'+1 //'11' plus coerced to string
n=n-1 // '11'-1= 10 minus coerced n to number

console.log(n)

let no= 2+3+4+'5';//plus operator made (2+3+4) +'5'= 9 +'5'='95'
console.log(no)
let mi='10'-'4'-'3'-2+'5'
console.log(mi)

*/


/*
// Falsy Values 5 in total: 0 ,'' ,undefined, null ,NaN

console.log(Boolean(0),0);
console.log(Boolean(null),null);
console.log(Boolean(''),'');
console.log(Boolean({}),{});
console.log(Boolean(undefined),undefined);
console.log(Boolean(NaN),NaN,`same as ${0}`);
console.log(Boolean(),);

let money=9;

if (money){
    console.log('Dont spend it all')
}else{
    console.log('get a job')
}

*/




//          Challenge 3




/*

// d1=96,d2=108,d3=89;
// k1=88,k2=91,k3=100;

//Bonus1
// d1=97,d2=112,d3=101;
// k1=109,k2=95,k3=123;

//Bonus2
d1=97,d2=112,d3=101;
k1=109,k2=95,k3=106;

aveScoreDolphin=(d1+d2+d3)/3;
aveScoreKoalas=(k1+k2+k3)/3;
console.log(aveScoreDolphin,aveScoreKoalas)

if(aveScoreDolphin>aveScoreKoalas && (d1>=100||d2>=100||d3>=100) ){
    console.log(`Winner team is Dolphin`)
}else if(aveScoreKoalas>aveScoreDolphin && (k1>=100||k2>=100||k3>=100)){
    console.log(`Winner team is Koala`)
}else if(aveScoreDolphin===aveScoreKoalas && (aveScoreDolphin>=100&&aveScoreKoalas>=100)){
    console.log(`Match Drawn`)
}
else{
    console.log(`No winners`)
}

*/


// Terniary Statement


/*
const age =115;
let licence = true;
age >= 18 && licence ? console.log(`I can drink now`,licence):console.log(`I can't drink`,licence)


let drink = age>=18 ? "Wine":"Water";
console.log(drink)

//we can use ternary operators inside template literals

console.log(`I like to drink ${age>=18 ? 'wine':'water'}`)
*/




// Challenge 4


/*
let bill=430;

tip = bill>=50 && bill<=300 ? bill*0.15:bill*0.20

console.log(`The bill was ${bill}, the tip was ${tip},and the total value is ${bill+tip}`)
*/



