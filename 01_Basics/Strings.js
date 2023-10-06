const fname = "Akshay";
const lname = "Dhongade";

console.log("Concatenation :", fname + " " + lname);
console.log("Type of variable :", typeof fname);
console.log("Lenght of string :", fname.length);
console.log("Uppercase conversion : ", fname.toUpperCase());
console.log("original Value of fname : ", fname);

//fining character based on index value
console.log("Finding character based on position :", fname.charAt(2)); //s

//we can find the position of specific character as well
console.log("Finding position of character 's':", fname.indexOf("s")); //

//string interpolation or template string  modern way
console.log(`Template String : Hello My name is ${fname} ${lname}`);

// note: we can not provide negative values in substrng ,still if we given then consider from 0
console.log("SubString", fname.substring(0, 3)); //Aks

//note : negative values are allowed
console.log("Slice", fname.slice(-8, 4));

//trim removes blank spaces
const newstr = "     Rajesh     ";
console.log(newstr);
console.log(newstr.trim());

const url = "https://asd.com/asd%20dhongade";

console.log(url);
console.log("Replacement in url :", url.replace("%20", "-"));
console.log(url.includes("asd"));

//we can easily split the values based on some operator
const newVar = "asd-sgd-gd";
console.log(newVar.split("-"));
