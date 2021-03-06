/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings = "Excitedly overwhlemed!";
document.getElementById("q2").innerHTML = feelings;




// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name = "Shannon",
    message = "Hey there, ";
document.getElementById("q3").innerHTML = message + name;




// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var firstNumber = 75,
    secondNumber = 25
document.getElementById("q4add").innerHTML = firstNumber + secondNumber;
document.getElementById("q4subtract").innerHTML = firstNumber - secondNumber;
document.getElementById("q4multiply").innerHTML = firstNumber * secondNumber;
document.getElementById("q4divide").innerHTML = firstNumber / secondNumber;

// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var lastPart = " .", firstPart = "There should be a space before the period", wholePart = firstPart + lastPart;
document.getElementById("q5").innerHTML = wholePart




// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

var firstString = "5",
secondString = "3"
document.getElementById("q6add").innerHTML = firstString + secondString;
document.getElementById("q6subtract").innerHTML = firstString - secondString;
document.getElementById("q6multiply").innerHTML = firstString * secondString;
document.getElementById("q6divide").innerHTML = firstString / secondString;

document.getElementById('q6note').innerHTML = "Note: I think because Addition will work as a concatenation method, that it does not innately Type Coerce."




// 7. When a button is clicked, add content into the ID "q7".


document.getElementById('callAlert').addEventListener('click', function(){
  document.getElementById('q7').innerHTML = "CREATURE REPORT! CREATURE REPORT!"
});




// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

document.getElementById('callDoubleNum').addEventListener('click', function(){
// var doubleNum = document.getElementById('doubleNum').value;
var doubleNum = document.getElementById('doubleNum');
console.log("doubleNum: ", doubleNum);
  document.getElementById('q8').innerHTML = doubleNum * 2;
});





// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
num2 = 10;

if (num1 > num2) {
  var output9 = 'Yes, the value of num1 is greater than num2.';
} else {
  var output9 = 'No, the value of num1 is not greater than num2.';
}
document.getElementById('q9').innerHTML = output9;





// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score = 97;

if (score > 90) {
  var output10 = 'Great job!';
} else if (score >= 60 && score <= 89) {
  var output10 = 'Nice work, keep practicing.';
} else {
  var output10 = 'Very bad: study more and retake the test...';
}
document.getElementById('q10').innerHTML = output10;






// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById('callAboutMe').addEventListener('click', function(){
var qAName = document.getElementById('qAName').value;
var qAAge = document.getElementById('qAAge').value;
var qACity = document.getElementById('qACity').value;
  document.getElementById('qa').innerHTML = 'My name is ' + qAName + '.' + 'Im ' +  qAAge + ' years old, and I live in ' + qACity + '.'
});




// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var height = 2, length = 3;
document.getElementById('qb').innerHTML = 'The area is: ' + (height * length) + ' square inches.'




// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById('callArea').addEventListener('click', function(){
var userHeight = document.getElementById('userHeight').value;
var userLength = document.getElementById('userLength').value;
document.getElementById('qc').innerHTML = 'The area is: ' + (userHeight * userLength) + ' square inches.'
});





// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById('countName').addEventListener('click', function(){
var userName = document.getElementById('userName').value;
  document.getElementById('qd').innerHTML = "Your name is " + userName.length + ' characters long.'
});





// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad
document.getElementById('scoreMe').addEventListener('click', function(){
var userScore = document.getElementById('userScore').value;

// var outputE = ['Good', 'OK', 'Bad'];
// if (userScore > 90) {
//   var outputE = 'Great job!';
// } else if (userScore >= 60 && userScore <= 89) {
//   var outputE = 'Nice work, keep practicing.';
// } else {
//   var outputE = 'Very bad: study more and retake the test...'
// }
// document.getElementById('qe').innerHTML = outputE;

  if (userScore > 90) {
    var outputE = '<span class=status-good>Great job!</span>';
  } else if (userScore >= 60 && userScore <= 89) {
    var outputE = '<span class=status-ok>Nice work, keep practicing.</span>';
  } else {
    // var outputE = 'Very bad: study more and retake the test...';
    // classList.add("status-bad");
    var outputE = '<span class=status-bad>Very bad: study more and retake the test...</span>'
  }
  document.getElementById('qe').innerHTML = outputE;


});




/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
