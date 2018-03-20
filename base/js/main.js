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
//
// alert ("You have 10 guesses. Guess 1-10")
//
// var answer = 3;
// var guess;
//
// for (i=0; i<10; i++) {
//       guess = prompt("What's your guess?")
//       if (answer == guess) {
//             alert("You guessed correctly");
//             break;
//       } else {
//             guess = prompt("Please try again")
//       }
// }

// Video 13 content

var name = "Maria";
// Defines function
function firstFunc() {
      console.log("yo yo");
      var name = "Roberto";
      console.log("Name in function " + name);
}
// Runs function
firstFunc();
console.log(name);
