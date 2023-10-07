let mydate = new Date();
// console.log("Date", mydate);
// console.log("Date toString() :", mydate.toString());
// console.log("Date toDateString() :", mydate.toDateString());
// console.log("Date toLocalString() :", mydate.toLocaleString());
// console.log("Type of Date : ", typeof mydate);

// ---------------------------------------------------------------------------------------
// note: month satrts with 0

// let mycreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log("mycreatedDate :", mycreatedDate.toDateString());

// console.log("mycreateddate :", mycreatedDate.toLocaleString());

// ------------------------------------------------------------------------------------------------

// let mycreatedDate2 = new Date("5-22-1998"); //mm-dd-yyyy
// let mycreatedDate2 = new Date("1998-05-22"); //yyyy-month-dd
// console.log("Mycreated Date: ", mycreatedDate2.toDateString());

// ------------------------------------------------------------------------------------------------

let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log("getDate :", date.getDate());
console.log("getFullYear :", date.getFullYear());
console.log("getMonth :", date.getMonth() + 1); //remember month start with consider jan=0 like wise, we can add +1
console.log("getDay :", date.getDay()); //weekday in number

console.log(date.toLocaleString());
