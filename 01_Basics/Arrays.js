// const myarr = [2, 4, 5, 6, 4, 7];
// console.log(myarr);

//**************IMP */ array copy oprations********************************
// shalow copy: shallo copy of an object is a copy whoes properties share the same reference

// deep Copy:properties do not share the same reference

const myarr2 = new Array(2, 4, 5, 6, 7, 8);
console.log(myarr2);

// array methods

myarr.push(10);
console.log(myarr);

myarr.pop();
console.log(myarr);

myarr.unshift(15); //added at first position
console.log(myarr);

myarr.shift(); //remove first position element
console.log(myarr);

// console.log(myarr.includes(25)); //false

// ***************IMP**********************
// console.log(myarr.indexOf(5)); //provding index value, if not exist then will return -1

// console.log(typeof myarr);    //object

// let newarr = myarr.join();
// console.log("Myarr :", myarr);
// console.log("New Arr :", newarr);
// console.log("Type of Array :", typeof myarr);
// console.log("Type of new Array :", typeof newarr);

// const myarr = [2, 4, 5, 6, 4, 7];
// console.log("Original array :", myarr);

// const mna1 = myarr.slice(1, 3); //start(1) to end(3) paramters
// console.log("After Slice :", mna1); //4,5    last rage is not included means(range -1)
// console.log("Original array after slice :", myarr);

const mna2 = myarr.splice(1, 3);
console.log("After splice :", mna2); //last range is included
console.log("Original array after splice :", myarr); //original array changed after splice

// ------------------------------------------------------------------------------------------------

const marvel_heros = ["ironman", "Spiderman", "thor"];

const dc = ["superman", "flash", "batman"];

marvel_heros.push(dc);
console.log(marvel_heros); //it will merge but array inside array

//we wat combine properly
marvel_heros.concat(dc);
console.log(marvel_heros);  //same out put array inside array

const newarr = marvel_heros.concat(dc);
console.log(newarr); //properly combine two array values without array inside array

const all_two_arrays = [...marvel_heros, ...dc];
console.log("Using spread Opearator Combine two array :", all_two_arrays);

// Note: push method adding values inside existing array but concat method returns new array

// -----------array inside array inteview Q.A---------------------------------------------------------

const mynewarr = [2, 4, 5, [6, 8, 7, 9, [2, 7, 8, 9], 10, 25, 78, 63]];
console.log(mynewarr);

const anotherarray = mynewarr.flat(1); //how many inside array you want to combine
console.log(anotherarray);

const anotherarray2 = mynewarr.flat(Infinity); //all inside array combine
console.log(anotherarray2);
// ----------------------------------------------------------------------------------------------

console.log(Array.isArray("Akshay")); //false
console.log(Array.from("Akshay")); // string converted into array

// ------Mutiple variables converted into array-----------------------------------------
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
