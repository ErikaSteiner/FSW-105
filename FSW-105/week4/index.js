//1. Make a function that will return any given string into all caps followed by the same string all lowercase.function capitalizedAndLowercase(str) {
//capilizeAndLowercase("hello") = HELLOhello

function capitalizeAndLowercase(_str) {
    var upperStr = str;
    return upperStr.toUpperCase(HELLO) + upperStr.toLowerCase(hello);
}
    console.log(capitalizeAndLowercase("HELLOhello"));


// 2: Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
//findMiddleIndex("Hello") => 2
//findMiddleIndex("Hello World") =>5
 function findMiddleIndex(str) {
    var halfWor = str.length;
    return  Math.floor(stringLength) /2;   
}
    console.log(findMiddleIndex("middleOfString"));


// 3: Make a function that uses slice() and the other functions you've written to return the first half of the string

//returnFirstHalf("Hello")
//returnFirstHalf("HelloWorld") 

function returnFirstHalf(str) {
    var stringLength = str.length
    var slice("HelloWorld") = str.slice(0, (Math.floor(stringLength)) /2);
    return Slice;
}
    console.log(firstHalf("Hello"));

 // 4: Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. 
 //   (If the string length is odd, capitalize the shorter of the first half.)


function firstHalfCapitalized(str) {
    var halfOne = str.toUpperCase().slice(0,2);
    var halfTwo = str.toLowerCase().slice( 2);
    return(halfOne + halfTwo);
}
    console.log(firstHalfCapitalized"HELLO world"));


//Aray Methods:

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercises() {
    //1: Remove the last item from the vegetable array.
    var lastItem = vegetables.pop();
    console.log("Last Item: " + lastItem);
    console.log(vegetables);

    //2: Remove the first item from the fruit array.
    var firstItem = fruit.shift();
    console.log("First Item: " + firstItem);
    console.log(fruit);

    //3: Find the index of "orange."
    var indexOfOrange = fruit.indexOf("orange");
    console.log("The Index of orange is: " + indexOfOrange);

    //4: Add that number to the end of the fruit array.
    fruit.push(indexOfOrange);
    console.log(fruit)

    //5: Use the length property to find the length of the vegetable array.
    var lengthOfVegetables = vegetables.length;
    console.log("The Length of the vegetable is: " + lengthOfVegetables);
    console.log(vegetables);

    //6: Add that number to the end of the vegetable array.
    vegetables.push(lengthOfVegetables);
    console.log(vegetables);


    //7: Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);
    console.log(food);

    //8: Remove 2 elements from your new array starting at index 4 with one method.
    var removeTwo = food.splice(4 , 2);
    console.log(removeTwo);
    console.log(food);

    //9: Reverse y
    var reverseArray = food.reverse();
    console.log(reverseArray);

    //10: Turn the array into a string and return it.
    var arrayToString = food.toString();
    console.log(arrayToString);
