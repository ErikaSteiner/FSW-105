//Preliminaries:
//1. Write an if statement that prints "is greater than" if 5 is greater than 3
if (5 > 3) {
    console.log("is greater than")
} else {
    console.log("not greater than")
}
//5 > 3 ? console.log("is greater than") : console.log("not greater than");

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3

if ("cat".length === 3) {
    console.log("is the length");
}

//3.Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal
if ("cat" != "dog") {
    console.log("not the same");
} else {
    console.log("is the same");
}
//"cat" != "dog" ? console.log("not the same") : console.log ("is the same");


//Bronze Medal:
//1. Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log(person.name + "is allowed to go to th movies");
} else {
    console.log(person.name + "is not allowed to go to th movies");
}
//person.age >= 18 ? console.log( person.name + "is allowed to go to th movies") : console.log( person.name + "is not allowed to go to th movies");

//2.
console.log(person.name.charAt(0));
if (person.name.charAt(0) === "B") {
    console.log(person.name + "is allowed to go to th movies");
} else {
    console.log(person.name + "is not allowed to go to th movies");
}
//person.name.charAt(0) === "B" ? console.log( person.name + "is allowed to go to th movies") : console.log( person.name + "is not allowed to go to th movies");

//3.
console.log(person.name.charAt(0));
if (person.name.charAt(0) === "B" && person.age >= 18) {
    console.log(person.name + "is not allowed to go to th movies");
} else {
    console.log(person.name + "is allowed to go to th movies");
}
//person.name.charAt(0) === "B" && person.age >=18 ? console.log( person.name + "is not allowed to go to th movies") : console.log( person.name + "is allowed to go to th movies");

//Siver Medal:
//1.
if (1 === "1") {
    console.log("Strict");
} else if (1 == "1") {
    console.log("loose")
} else {
    console.log("not qual at all");
}
//1 == "1" ? console.log("loose") : console.log("not qual at all");

//2.
if (1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("no");
}
//<= 2 && 2 === 4 ? console.log("yes") : console.log("no");

//Gold Medal:
//1.
if (typeof "dog" === "string") {
    console.log("This is a string");
} else {
    console.log("This is not a string");
}
//typeof "dog" === "string" ? console.log("This is a string") : console.log("This is not a string");

//2.
if (typeof true === "boolean") {
    console.log("This is a boolean");
} else {
    console.log("This is not a boolean");
}
//typeof true === "boolean" ? console.log("This is a boolean") : console.log("This is not a boolean");

//3.
let name = "Erika";
if (typeof name === "undefined") {
    console.log("This vaiable is defined");
} else {
    console.log("This vaiable is not defined");
}
//typeof name === "undefined" ? console.log("This vaiable is defined") : console.log("This vaiable is not defined");

let name;
if (typeof name === "undefined") {
    console.log("This vaiable is not defined");
} else {
    console.log("This vaiable is defined");
}
//typeof name === "undefined" ? console.log("This vaiable is not defined") : console.log("This vaiable is defined");

//4.
function name(params) {
    
}if ("s" > 12) {
    console.log("This is True");
} else {
    console.log("This is False");
}
//typeof name === "undefined" ? console.log("This vaiable is not defined") : console.log("This vaiable is defined");

//5.
12 % 2 === 0 ? "condition" ? console.log("The number is Even") : console.log("The number is Odd");

