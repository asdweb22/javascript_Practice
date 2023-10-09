// {
// } //defined scope

// var c = 300;
// let a = 50;
// if (true) {
//   let a = 10;
//   const b = 20;

//   var c = 30;
// }

// console.log(a);   //a is not defined if we tring to access block scope varaible , outside block level variable we can access
// console.log(b); //block level scope  onl accessible inside block
// console.log(c);

// ***************IMP NOTE:****************************************************
// let and const are block level scope changes and accessibility only in block level function based scope
//var is changable anywhere and access anywhere in program its a  global scope
//global scope variables we can access inside local scope but, local scope can not access outside
//js executed line by line so ex.if you have error at line 5 then rest of the things will not work

// if you have nested function then child functions can able to access outside functions variables
// but outside function can not able to access child function variables
