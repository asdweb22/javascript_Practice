//singleton

//object literal

const jsUser = {
  name: "Akshay",
  email: "asd22@gmail.com",
  age: 18,
  location: "Pune",
  isLoggin: false,
  lastLogin: ["Monday", "Saturday"],
};

// console.log(jsUser);

// //access jsuser Data:
// console.log(jsUser.name);
// console.log(jsUser["age"]); //this is a right way to access object data

// //to change object values
// jsUser.email = "pqr22@gmail.com";
// console.log(jsUser.email);

// // we can freez particular object
// Object.freeze(jsUser);
// jsUser.email = "asd22@gmail.com";
// console.log(jsUser.email);

// //function created inside jsUser
// jsUser.greeting = function () {
//   console.log("hello jsuser");
// };

// //function created and pointing to same object
// jsUser.greeting2 = function () {
//   console.log(`hello jsuser ${this.name}`);
// };

// //adding value inside jsuser object
// jsUser.id = 101;

// console.log("Function called from object :", jsUser.greeting());
// console.log(jsUser.greeting2());

// -------------------part2-----------------------------------------------------------
// const tinder = new Object();
// tinder.id = 101;
// tinder.name = "sammy";
// tinder.isLoggin = false;
// tinder.location = { city: "pune", pincode: 411033, area: "walad road" };
// console.log(tinder);
// console.log(tinder.location);

// //conbine two object in object
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj4 = { ...obj1, ...obj2 }; //way1 and best practice
// const obj5 = Object.assign({}, obj1, obj2); //way2  curly braces are optional
// console.log(obj4);
// console.log(obj5);
// ---------------------------------------------------------------------------------------------------

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// //checking name property is available inside tinder object or not
// console.log(tinder.hasOwnProperty("name")); //true

// ---------------------------------------------------------------------------------

// ---------------************IMP****************--------------------------------------

// Object destructing and JSON

const course = {
  coursename: "js in hindi",
  price: 999,
  courseinstructor: "Hitesh",
};

//object destructuring
const { coursename, courseinstructor, price } = course;
console.log(courseinstructor);
