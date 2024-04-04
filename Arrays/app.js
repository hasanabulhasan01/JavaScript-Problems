// // Question 1

// var eng_students = [];
// document.write(eng_students);

// // Question 2

// var maths_students = [{}];
// document.write(maths_students);
// console.log(maths_students, 'array')

// // Question 3

// var strings_arr = ['dan','joe', 'sam'];
// document.write(strings_arr);

// // Question 4

// var num_arr = [1,2,4,5,6,7,]
// document.write(num_arr);

// // Question 5

// var boolean_arr = [true, false]
// document.write(boolean_arr);

// // Question 6

// var mixed_arr = [true, false, 1,2,3,4, 'dan', 'sam']
// document.write(mixed_arr);


// // Question 7

// var mobile_networks = ['telenor', 'jazz', 'warid', 'zong']
// document.write(mobile_networks);

// Question 8

// var qualifications = ['ssc', 'hsc', 'bcs', 'fsc', 'bcom'];
// document.write(
//     '<h1>'+ 'Qualifications' + '</h1>'
//     + '<ol type="1">'
//     +'<li>'  + qualifications[0] + '</li>'
//     +'<li>'  + qualifications[1] + '</li>'
//     +'<li>'  + qualifications[2] + '</li>'
//     +'<li>'  + qualifications[3] + '</li>'
//     +'<li>'  + qualifications[4] + '</li>'
// +'</ol>'
// )

// Question 9

// var movies = ['Avengers:Age of Ultron', 'Spectre', 'Jurassic World', 'Inside out'];
// document.write(
//     '<h1>'+ 'Top Movies of 2015' + '</h1>'
//     + '<ol type="1">'
//     +'<li>'  + movies[0] + '</li>'
//     +'<li>'  + movies[1] + '</li>'
//     +'<li>'  + movies[2] + '</li>'
//     +'<li>'  + movies[3] + '</li>'
// +'</ol>'
// )

// document.write('Length of the array is' + " " + movies.length + '<br>');

// // Question 10

// var cars = ['Audi', 'Volvo', 'corolla', 'Mercedes'];
// document.write("<h1>Favourite Cars</h1>");
// document.write(cars + '<br><br>');
// document.write('First index of the array:' + " " + cars.indexOf('civic') + '<br>' );
// document.write('Cars at First index of the array:' + " " + cars[0] + '<br>' );
// document.write('Last index of the array:' + " " + cars.indexOf('mehran') + '<br>' );
// document.write('Cars at Last index of the array:' + " " + cars[3] + '<br>' );

// // Question 11

// var student_names = ['Michael', 'John', 'Tony'];
// var scores = [320, 230, 480];

// var Michael_percentage = (scores[0] / 500) * 100;
// var John_percentage = (scores[1] / 500) * 100;
// var Tony_percentage = (scores[2] / 500) * 100;

// document.write('Score of ' + student_names[0] + ' is ' +  scores[0] + '.' + 'Percentage: ' + Michael_percentage +"%"+ '<br>' );
// document.write('Score of ' + student_names[1] + ' is ' +  scores[1] + '.' + 'Percentage: ' + John_percentage  +"%"+ '<br>');
// document.write('Score of ' + student_names[2] + ' is ' +  scores[2] + '.' + 'Percentage: ' + Tony_percentage +"%"+ '<br>' );

// // Question 19
var arr = ["Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
// document.write("<select>"+
// "<option>"+arr[0]+"</option>"+
// "<option>"+arr[1]+"</option>"+
// "<option>"+arr[2]+"</option>"+
// "<option>"+arr[3]+"</option>"+
// "<option>"+arr[4]+"</option>"+
// "<option>"+arr[5]+"</option>"+
// "</select>");

document.write('<select>');

for(var i=0; i<arr.length; i++){
    document.write('<option>' + arr[i] + '</option>');
}

document.write('</select>');

















