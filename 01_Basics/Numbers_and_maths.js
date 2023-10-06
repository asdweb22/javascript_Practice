// const score = 400;

// const balance = new Number(100);
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //mostly used in dynamic applications to precise point

// const otherNumber = 23.54785;
// console.log(otherNumber.toPrecision(3));

//try on browser console
// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.6)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(2, 3, 4, 5, 6)); //3
// console.log(Math.max(2, 3, 4, 5, 6)); //6

// console.log(Math.random()); //always value come with between 0-1

//random values generation

//will gives you accurate absolute value
console.log(Math.floor(Math.random() * 10) + 1);

//based on limit we are generating random values
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
