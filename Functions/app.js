//Question : 01
// function sum(a=2, b=3, c=5){
//     return a + b + c
// };

// document.write(sum(15,20,40));
//Note: we can use this function several times when we need to do sum of three different numbers by changing the arguments.

//Question : 02
// function currentdateandtime(){
//     var d = new Date();
//     document.getElementById("datetime").innerHTML = d;
// }
// currentdateandtime();

//Question : 03
// function greet(){
//     var firstName = prompt("Please enter your first name");
//     var lastName = prompt("Please enter your last name");
//     alert("Nice to meet you Mr. "+firstName+" "+lastName);
// }
// greet();

//Question : 04
// function sum(p, q){
//     var p = +prompt("Please enter num-1");
//     var q = +prompt("Please enter num-2");
//     return p + q;
// }
// document.write(sum());

//Question : 05 (Calculator)
// function calculator(a, b, c) {
//     a = +prompt("Please enter number 01: ");
//     b = +prompt("Please enter number 02: ");
//     c = prompt("Please enter the operator: ");
//     if(c == "+"){
//         return a + b
//     }else if(c == "-"){
//         return a - b
//     }else if(c == "*"){
//         return a * b
//     }else if(c == "/"){
//         return a / b
//     }else if(c == "%"){
//         return a % b
//     }else {
//         return "Invalid Operator"
//     }
// }
// document.write(calculator());

//Question : 07 (factorial of a number)
// function factorial(n){
//     n = +prompt("Enter a number whose factorial you want to find: ");
//     var ans = 1;
//     if (n === 0){
//         return 1
//     }else{
//         for (var i = 1; i <= n; i++) {
//             ans = ans * i;
//         }
        // return ans;
//     }
// }
// document.write(factorial());

//Question : 08
// function x(a, b){
//     a = +prompt("Enter the start number: ");
//     b = +prompt("Enter the end number: ");
//     for(var i=a; i<=b; i++){
//         document.write(i + " ");
//     } 
// }
// document.write(x());

//Question : 09
// function calculateHypotenuse(base, perpendicular){
//     function calculateSquare(number){
//         return number * number;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = calculateSquare(hypotenuseSquare);

//     return hypotenuse;

// }
// document.write (calculateHypotenuse (2, 5));
//considering value of base is 2 and perpendicular is 5

//Question : 11
// function findLargest() {
//     if (arguments.length === 0) {
//         return "No arguments provided.";
//     }

//     var largest = arguments[0];

//     for (var i = 1; i < arguments.length; i++) {
//         if (arguments[i] > largest) {
//             largest = arguments[i];
//         }
//     }

//     return largest;
// }

// // Example usage:
// var largestNumber = findLargest(10, 96, 48, 15, 25);
// document.write("The largest number is: " + largestNumber);

//Question : 11
