// // Question no : 01
// var num1 = +prompt('Enter value 01');
// var num2 = +prompt('Enter value 02');
// var add = num1 + num2;
// alert ("Sum of "+num1+ " and "+num2+ " is " + add);

// // Question no : 02
// var num1 = +prompt('Enter value 01');
// var num2 = +prompt('Enter value 02');
// var sub = num1 - num2;
// alert ("Result of subtracting "+num2+ " from "+num1+ " is " + sub);

// var num1 = +prompt('Enter value 01');
// var num2 = +prompt('Enter value 02');
// var multiply = num1 * num2;
// alert ("Result of multiplying "+num1+ " and "+num2+ " is " + multiply);

// var num1 = +prompt('Enter value 01');
// var num2 = +prompt('Enter value 02');
// var divide = num1 / num2;
// alert ("Result of dividing "+num1+ " by "+num2+ " is " + divide);

// var num1 = +prompt('Enter value 01');
// var num2 = +prompt('Enter value 02');
// var mod = num1 % num2;
// alert ("Remainder of dividing "+num1+ " by "+num2+ " is " + mod);

// // Question no : 03
// var a;
// document.write("Value after variable declaration is: " + a + "<br>");
// a = 3;
// document.write("Initial value: " + a + "<br>");
// a++;
// document.write("Value after increment is: " + a + "<br>");
// a += 7;
// document.write("Value after addition is: " + a + "<br>");
// a--;
// document.write("Value after decrement is: " + a + "<br>");
// var remainder = a % 3;
// document.write("The remainder is: " + remainder);

// // Question no : 04
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("The cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");

// // Question no : 05
// var number = prompt('Enter the number for multiplication table');
// document.write("<h1>" + "Multiplication Table of " + number + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write( number + " x " + i +"=" + result +"<br>");
// }

// //Question no : 06
// var celsiusTemp = 12;
// var toFahr = (celsiusTemp*9/5)+32;
// document.write ("<h1>"+ celsiusTemp + "°C " + " is " + toFahr +"°F" + "</h1>"+"<br>");
// var fahrTemp = 68;
// var toCelsius = (fahrTemp-32)*5/9;
// document.write ("<h1>"+fahrTemp+"°F"+" is " +toCelsius+"°C" + "</h1>");

// // Question no : 07
// var priceItem1 = 560;
// var quantityItem1 = 2;
// var priceItem2 = 200;
// var quantityItem2 = 5;
// var shippingCharges = 150;
// var subtotalItem1 = priceItem1 * quantityItem1;
// var subtotalItem2 = priceItem2 * quantityItem2;
// var totalCost = subtotalItem1 + subtotalItem2 + shippingCharges;
// document.write("<h2>Shopping Cart</h2>");
// document.write("<p>Price of Item 1 is " + priceItem1 + "</p>");
// document.write("<p>Quantity of Item 1 is " + quantityItem1 + "</p>");
// document.write("<p>Price of Item 2 is " + priceItem2 + "</p>");
// document.write("<p>Quantity of Item 2 is " + quantityItem2 + "</p>");
// document.write("<p>Shipping Charges " + shippingCharges + "</p>");
// document.write("<p>Total Cost of your order is " + totalCost + " PKR</p>");

// // Question no : 08
// var totalMarks = +prompt("Enter total marks:");
// var marksObtained = +prompt("Enter marks obtained:");
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h2>Marks Sheet</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");

// // Question no : 09
// var exchangeRateUSD = 104;
// var exchangeRateSAR = 28; 
// var usDollars = 10;
// var saudiRiyals = 25;
// var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
// document.write("<h2>Currency in PKR</h2>");
// document.write("<p>Total Currency in PKR: " + totalRupees + "</p>"); 

// //Question no : 10
// var a = 7.53;
// var result = ((a + 5) * 10) / 2
// alert(result);

// //Question no : 11
// var currentYear = +prompt("Enter current year:");
// var birthYear = +prompt("Enter your birth year:");
// var age = currentYear - birthYear;
// document.write("<h1>The Age Calculator</h1>"+"<br>"+ "Current Year : "+currentYear+"</br>"+ "Birth Year : "+birthYear+"<br>"+"<br>" +"You are either "+(age - 1) +" or "+age+ "years old.");

// //Question no : 12
// var radius = 12;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * (radius * radius);
// document.write("<h1>The Geometrizer</h1>" + "<br>" + "Radius of Circle : "+radius + "<br>" + "The Circumference is : "+circumference + "<br>" + "The Area is : "+area);

// //Question no : 13
// var a = 10
// document.write("<h3>Result: </h3>"+"<br>");
// document.write("The value of a is: "+ a +"<br><br>");
// document.write("The value of ++a is: "+ ++a +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");
// document.write("The value of a++ is: "+ a++ +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");
// document.write("The value of --a is: "+ --a +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");
// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");

// //Question no : 14
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b +b--;
// document.write("<h1>"+"a is 2 </h1>");
// document.write("<h1>"+"b is 1 </h1>");
// document.write("<h1>"+"result is " +result+ "</h1>");

// //Question no : 15
// var favSnack = "Oreo"+ " " +"Biscuit";
// var currentAge = 23;
// var maxAge = 75;
// var remYears = maxAge - currentAge;
// var perDay = 3;
// var reqQuantity = (remYears * 365)*perDay;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>")
// document.write("Favourite Snack : " + favSnack + "<br>");
// document.write("Current Age : " + currentAge + "<br>");
// document.write("Estimated Maximum Age : " + maxAge + "<br>");
// document.write("Amount of snacks per day : " + perDay + "<br><br>");
// document.write("You will need " + reqQuantity +" " + favSnack + " to last you until the ripe old age of " +maxAge +"<br>");










