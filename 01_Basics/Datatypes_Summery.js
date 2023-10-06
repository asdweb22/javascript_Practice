// primitive
// 7 types: String,number,Boolean,null(empty),undefined,Symbol,Bigint

//reference (non-premetive)

//Array,objects,Functions

//js is dynamically typed languages

// const bikes = ["Honda", "Suzuki", "RoyalEnfild"];
// const obj1 = {
//   id: 101,
//   name: "asd",
//   city: "pune",
// };

// console.log(typeof bikes); //object
// console.log(typeof obj1); //object
// console.log(typeof null); //object

// ------------------------------------------------------------------------------------------------

// Memory in js
// Stack(Premitive) , Heap(Non-Premitive)

// let myName = "akshayDhongade";

// let nickname = myName;

// console.log(myName);
// console.log(nickname);

// nickname = "Ak";
// console.log(nickname);   //because of all premitive datatype are gone into stack we get copy of variable

// ------------------------------------------------------------------------------------------------

// Heap:

const obj1 = {
  id: 101,
  name: "asd",
  city: "pune",
};

obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.city = "Mumbai";
console.log("After updating object2 , object1 also updated:");
console.log("Object 1: ", obj1);
console.log("Object 2 reference of object1 :", obj2);
