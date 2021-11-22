// Question 1.Write a function that displays current date & time

// function todayDate() {
//     var todayDate = new Date();
//     document.write(todayDate);
// }
// todayDate();

// Question 2.Write a function that takes first & last name

// function userName() {
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     alert("Have A Good Day" + " " + firstName + " " + lastName);
// }
// userName();

// Question 3.Write a function that adds two numbers

// var num1 = parseInt(prompt("Enter First Number"));
// var num2 = parseInt(prompt("Enter Second Number"));
// function add(num1, num2) {
//     return alert(num1 + num2);
// }
// add(num1, num2)

// Question 4.Write a function that takes three arguments

// var num1 = +prompt("Enter Number 1")
// var opt = prompt("Enter Operator + - x * / %")
// var num2 = +prompt("Enter Number 2")
// function calc(num1 ,opt , num2){    
//     if(opt == "+"){        return num1 + num2 
//        }   
//      else if(opt == "-"){   
//          return num1 - num2   
//          }   
//           else if (opt == "x"){   
//              return num1 * num2    } 
//         else if( opt == "/"){   
//              return num1 / num2    }   
//          else{   
//           return "enter correct numer"    }
// }
// var add = calc(num1 ,opt , num2)
// console.log(add)


// Question 5.Write a function that squares its argument.

// var numbr1 = +prompt("Enter Number For Square Your Value")
// function sqr(numbr1) {
//     return numbr1 * numbr1
// }
// var sqr1 = sqr(numbr1);
// document.write("Square value:" + " " + sqr1 + "<br><br><br>")

// Question 6.Write a function that computes factorial of a number.

// function fact() {
//     var inputNumber = +prompt("Please enter a number");
//     var numbr = 1;
//     for (var i = inputNumber; i >= 1; i--) {
//         numbr = numbr * i;
//     }
//     document.write("Factorail number is:" + " " + numbr + "<br><br><br>");
// }
// fact();

// Question 7.Write a function that computes factorial of a number.

// function counting() {
//     var startNum = +prompt("Enter Starting Number");
//     var endNum = +prompt("Enter Ending Number");

//     for (i = startNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting()

// Question 8.Write a function that computes factorial of a number.

// var base = Number(prompt("Enter Base"));
// var perp = Number(prompt("Enter Perpendicular"));
// function calculateHypotenuse(base, perp) {
//     function calculateSquare() {
//         var baseSquare = base * base;
//         var perpSquare = perp * perp;
//         var squareSum = baseSquare + perpSquare;
//         var hypo = squareSum;
//         return hypo;
//     }
//     return calculateSquare();
// }
// document.write("<h1>Hypotenuse </h1> ");
// document.write("Hypotenuse is: ");
// document.write(calculateHypotenuse(base, perp));

// Question 9.Write a function that calculates the area of a rectangle
// function mainArea(){
//     function rectangleArea(width=5,height=5){// Default
//         var area = width * height;
//         document.write("The area of Rectangle is " + area);
//     }
    
//     rectangleArea(+prompt("Enter Width Of Rectangle"),+prompt("Enter Hieght Of Rectangle"));
//     }

// mainArea();

// Question 10.Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindromeCheck() {
//     var string = prompt("Enter a String");
//     var len = string.length;
//     var msg = "It is a Palindrome";
//     for (i = 0; i < len / 2; i++) {
//         if (string[i] != string[len - 1 - i]) {
//             msg = "It is Not a Palindrome";
//         }
//     }
//     alert(`${string}: ${msg}`);
// }
// palindromeCheck()

// Question 14.Write a JavaScript function that checks whether a passed string is palindrome or not?

// var radius = Number(prompt("Enter radius Number"));
// function calcCircumference(radius) {
//     var cirFer = (2*3.14)*radius;
//     return cirFer;
// }
// document.write("<h1>Circumference Of A Circle </h1>");
// document.write("Circumference is:  ");
// document.write(calcCircumference(radius));


// function calcArea(radius) {
//     var area = 3.14*(radius*radius);
//     return area;
// }
// document.write("<h1>Area Of  Circle </h1>");
// document.write("Area is:  ");
// document.write(calcArea(radius));
