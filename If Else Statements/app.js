// =====================chapter: 8-11======================
// //Question 01
// var userName = prompt("Please enter your name:");
// if (userName !== null && userName !== "") {
//   var greeting = "Hi, " + userName + "!";
//   alert(greeting);
// } else {
//   alert("You didn't enter a name. Please try again.");
// }

//Question 02
// var userInput = prompt("Enter a number to display its multiplication table:");
// var number;
// if (userInput === null || userInput === "") {
//     number = 5;
// } else {
//     number = (userInput);
//     if (isNaN(number)) {
//         alert("Invalid input. Using 5 as the default.");
//         number = 5;
//     }
// }
// document.write("<h1>" + "Multiplication Table of " + number + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write( number + " x " + i +"=" + result +"<br>");
// }

//Question 03
// var cityName = prompt("Enter the name of your city:");
// if (cityName !== null && cityName === "karachi") {
// alert("Welcome to the city of lights!");
// } else {
// alert("Welcome to " + cityName); 
// }

//Question 04
// var gender = prompt("Please enter your gender: ");
// gender = gender.toLowerCase();
// if (gender === "male") {
//   alert("Good Morning Sir.");
// } else if (gender === "female") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Sorry, we don't recognize that gender.");
// }

//Question 05
// var signalColor = prompt("Enter the color of the traffic signal:");
// signalColor = signalColor.toLowerCase();
// if (signalColor === "red") {
//     alert("Vehicles must stop.");
// } else if (signalColor === "yellow") {
//     alert("Vehicles should get ready to move.");
// } else if (signalColor === "green") {
//     alert("Vehicles can move now.");
// } else {
//     alert("Invalid input! Please enter 'red', 'yellow', or 'green'.");
// };

//Question 06
// var maxAge = prompt("Enter the maximum age:");
// var currentAge = prompt("Enter your current age:");
// if (currentAge <= maxAge) {
//   alert("You are welcome.");
// } else {
//   alert("Sorry, you are not welcome.");
// }

//Question 07
// var remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):")
// if (remainingFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }else{
//     alert("You have sufficient fuel to continue your journey.")
// };


//Question 08
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if ("false"){
//     alert("False")
//     };

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Question 09
// var mathsMarks = +prompt("Enter marks obtained in Maths:");
// var physicsMarks = +prompt("Enter marks obtained in Physics:");
// var chemistryMarks = +prompt("Enter marks obtained in Chemistry:");

// var totalMarks = +prompt("Enter total marks for the three subjects:");

// var totalObtainedMarks = mathsMarks + physicsMarks + chemistryMarks;

// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2> <br>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

//Question 10
var item1Name = prompt("Enter the name of item 1:");
var item1Price = prompt("Enter the price of item 1 (in PKR):");
var item1Quantity = prompt("Enter the ordered quantity of item 1:");

var item2Name = prompt("Enter the name of item 2:");
var item2Price = prompt("Enter the price of item 2 (in PKR):");
var item2Quantity = prompt("Enter the ordered quantity of item 2:");

var shippingCharges = prompt("Enter shipping charges (in PKR):");

var totalCost = item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;

if (totalCost > 2000) {
    var discount = 0.10 * totalCost;
    totalCost -= discount;
}

document.write("<h2>Shopping Cart</h2>");
document.write("<p>Price of " + item1Name + " is " + item1Price + "</p>");
document.write("<p>Item 2: " + item2Name + " (Price: " + item2Price + " PKR, Quantity: " + item2Quantity + ")</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<p>Total Cost (After Discount): " + totalCost.toFixed(2) + " PKR</p>");


//Question 13
// var teamAName = prompt("Enter the name of Team A:");
// var teamAScore = parseInt(prompt("Enter the total score of Team A:"));

// var teamBName = prompt("Enter the name of Team B:");
// var teamBScore = parseInt(prompt("Enter the total score of Team B:"));

// var result;

// if (teamAScore > teamBScore) {
//   result = teamAName + " has won the game!";
// } else if (teamBScore > teamAScore) {
//   result = teamBName + " has won the game!";
// } else {
//   result = "It's a tie!";
// }
// alert(result);




// =====================chapter: 12-13======================

//Question 01
// var number = prompt("Enter a number:");
// if (number % 3 === 0) {
// } else {
//   alert("The number is not divisible by 3.");
// }

//Question 02
// var number = prompt("Enter a number:");
// if (number % 2 === 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }

//Question 03
// var age = prompt("Enter your age:");
// if (age > 18) {
//   alert("You are old enough");
// } else {
//   alert("You are too young");
// }

//Question 04
// var yourName = "hasan"; 
// var userName = prompt("Please enter your name:");
// if (userName === yourName) {
//   alert("Hello, " + userName + "! You have the same name as me!");
// }

//Question 05
// var number = prompt("Enter a number:");
// if (number % 3 === 0) {
//   alert("The number is divisible by 3.");
// } else {
//   alert("The number is not divisible by 3.");
// }

//Question 07
// var number1 = +prompt("Enter the first number:");
// var operator = prompt("Enter an operator (+, -, *, /, %):");
// var number2 = +prompt("Enter the second number:");
// var result;
// switch (operator) {
//   case '+':
//     result = number1 + number2;
//     break;
//   case '-':
//     result = number1 - number2;
//     break;
//   case '*':
//     result = number1 * number2;
//     break;
//   case '/':
//     if (number2 !== 0) {
//       result = number1 / number2;
//     } else {
//       result = "Division by zero is not allowed";
//     }
//     break;
//   case '%':
//     if (number2 !== 0) {
//       result = number1 % number2;
//     } else {
//       result = "Modulus by zero is not allowed";
//     }
//     break;
//   default:
//     result = "Invalid operator";
// }
// alert("Result: " + result);


