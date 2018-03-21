/* This
is a
multiline
comment
*/
var hello = "Hello World";
console.log(hello)

// Sets value
var value = 3;
var valueTwo = "3";

// Boolean test
var open = true;
console.log(open);
console.log(value + 3);
// This adds valueTwo + the character "3"
console.log(valueTwo + "3");
console.log(value == 3);

// if statement basics
var name = "Andres";
// Checks to see if name is Andres
if ( name === "Andres" ) {
  //Output something
    console.log(name + " is the name")
}


// Video 7 content

var name = "Florencia"
var val = 2

//Checks to see if name is Amaya
if ( name === "Amaya"){
      console.log( name + " is my daughter");
} else if ( name !== "Amaya"){
      console.log( name + " is not my daughter");
} else {
      console.log("0");
}
 // Video 9 content

 var name = "Sofia";
 var val = 6;

 var myList = [1, 2, 3, 4, "Hello", ["yo", "hihi"]];
 console.log( myList[5][1] );

 // Video 10 content

 var name = "Sofia";
 var val = 6;

 var myList = [1, 2, 3, 4, "Hello", ["yo", "hihi"]];

for (var i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}




// Video 11 content

var name = "Sofia";
var val = 6;

var myList = [1, 2, 3, 4, 5, 20, 35];

// for (var i = 0; i < myList.length; i++) {
//  console.log(myList[i]);
// }

var i = 0;
while ( myList[i] ){
      console.log(myList[i]);
      i++;
}


// Video 12 content

alert ("This is a real simple calculator")

var firstNum;
var secondNum;
var calc;
// var answer = firstNum + secondNum;


firstNum = parseInt(prompt("What's your first number?"));
secondNum = parseInt(prompt("what's your second number"));
// console.log(firstNum + secondNum);
function calcfunc(firstNum, secondNum) {
  return firstNum + secondNum;
}
console.log(calcfunc);
      // } else {
      //       calc = prompt("Please try again")
      // }


// Video 13 content
//
// var name = "Maria";
// // Defines function
// function firstFunc() {
//       console.log("yo yo");
//       var name = "Roberto";
//       console.log("Name in function " + name);
// }
// // Runs function
// firstFunc();
// console.log(name);
//
// // Video 14 content
//
// var name = "Maria";
// // Defines function with one argument
// function firstFunc(arg) {
//       console.log(arg);
//       var name = "Roberto";
//       console.log("Name in function " + name);
// }
// // Defines a function with two arguments
// function secondFunc(greeting, name) {
//       var name = "Roberto";
//       console.log(greeting + " " + name);
// }
// // Runs function
// firstFunc("YO YO");
// firstFunc(name);
// firstFunc("yo");
// secondFunc("Mr", name);
// console.log(name);
