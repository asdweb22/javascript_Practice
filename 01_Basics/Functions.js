// myarr = [10, 20, 30, 40, 50];

// function Test(array) {
//   return array[0];
// }

// console.log(Test(myarr));

// -----------------------------------------------------------

//function calling before declaration
// console.log(add(5));

// function add(num) {
//   return num + 1;
// }
// ---------------------------------------------------------------------------------------
//Cannot access 'addtwo' before initialization   because of function expression
// console.log(addtwo(1));
// const addtwo = function (num) {
//   return num + 1;
// };

// ------------------------------------------------------------------------------------
// ES6 2015
// this keyword defines current context
//Arrow functions

// inteview Q>A
// inside browser global object is window object

//in arrow function if we provide curly brases then we need to write return keyword

//another we can use () directly then no need to pss return keyword
// Ex.const test=(num1,num2)=>num1+num2

// -----------------------------------------------------------------------------------------------

// iife(immidiate invoke function expression )
// usecase: when we can create function we want to execute immigiate
// we have db connection file we want when our app is started then immigiately db connetion we want

// Ex
(function dbConnect() {
  console.log("Db Connected");
})();
