//             //Chapter 1

// //Task-1

// alert("Welcome to the web");

// //Task-2

// alert("Error! Please enter a valid password");

// //Task-3

// alert("Welcome to JS land \n Happy Coding!");

// //Task-4

// alert("Welcome to JS land");
// alert("Happy coding!");

// //Task 5 coppied from consol
// alert("Hello... I can run JS  through my browser's consol");
// //undefined

// //Task 6
// alert("Using alert in new html page!");

// //Task 7 (a)
// alert("Using <Script> tag in head!");

// //Task 7 (b)
// alert("Using <Script> tag in body before HTML!");

// //Task 7 (c)
// alert("Using <Script>inside  HTML!");

// //Task 7 (d)
// alert("Using <Script>After page's HTML!");
 

//CHAPTER #2

// Task - 1
// var username;


//TASK-2
// var myName;
// myName = "Nabeel Jawed";

//Task-3  (a,b,c)

// var message;
// message ="Hello World"
// alert(message);

//Task - 4

// var name = "Jhone Doe";
// var age = "15 years old"
// var course = "Certified Mobile Application Development"
// alert(name);
// alert(age);
// alert(course);

// Task - 5
// var a = " PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(a);

// Task - 6

// var email = "njkhan124@gmail.com"
// alert("My Email is "+ email);

// Task - 7

// var book = "A Smarter way to learn JavaScript"
// alert("I am trying to learn from the book "+ book );

// Task - 8

// var a = "Yah! I can write HTML content through JavaScript";
// document.write(a);

// Task -9

// var a ="---------##@@##---------";
// alert(a);
// document.write(a);

// CHAPTER 3

// Task - 1

// var age = 15;
// alert("I am "+ age +" years old");

// Task - 2
// var visited = 14;
// alert("You have visited this site "+ visited + " times");

// // Task - 3;
// var birthYear = 1998;
// document.write("My birth year is "+ birthYear + " <br> Data type of my decleared variable is " + typeof(birthYear));

// // Task - 4
//  var visitorName = "John Doe"
//  var ProducutTitle = "T-Shirt";
//  var quantity = 5;
//  document.write(visitorName + " Ordered " + quantity+" "+ ProducutTitle+"(s)");

// CHAPTER 4

// // Task - 1

//  var a , b , c;

// // task - 2 
// // Legal Variable
//  var a;
//  var a1;
//  var $d ;
//  var _a;
//  var _a_b;

// //  Illegal Variables
// var 1a;
// var @email;
// var #num;
// var ~name;
// var %Data;

// // Task -3
// var a = "Rules for naming JS Variables";
// var b = "Variable names can only contain , number, $  and _ for example: $my_1stVariabe"
// var c = "Variables must begin with a letter, $ or _.For example $name, _name or na";
// var d = "Variable names are case sensitive";
// var e = "Variable name should not be JS keyword";
// document.write(a + "<br>" + b +"<br>" + c + "<br>" + d + "<br>" + e );

// // CHAPTER 5

// // Task - 1
//  var a = 3;
//  var b = 5;
//  var c = 3+5;
//  document.write("Sum of " + a + " and "+b+" is " +c); 

// //Task - 2

// var a = 3;
// var b = 5;
// var c = a - b;
// var d = a * b;
// var e = a / b;
// var f = a%b;
//  document.write("Difference of " + a + " and "+b+" is " + c + "<br>" + "Product of " + a + " and "+b+" is " + d + "<br>" + "Division of " + a + " and "+b+" is " + e + "<br>" + "Modulos of " + a + " and "+b+" is " + f);

// //Task - 3

// var a;
// document.write("Value after variable declration"+a);
// a =  5;
// document.write("<br> Initial value = " + a);
// a++;
// document.write("<br> Value after Increment is "+a);
// a = a+7;
// document.write("<br> value after addision is "+a);
// a--;
// document.write("<br> Value after Decrement is "+a);
// a = a%3;
// document.write("<br>The remainder"+a );

// //Task 4
//  var ticketPrice = 600;
//  var quantity = 5;
//  document.write("Total cost of buying "+ quantity + " tickets is "  + ticketPrice*quantity);

// // Task 5
// var a = 4;
// for(var i = 1; i<= 10; i++){
//     document.write(a+ "*" + i + "=" + a*i + "<br>");
// }

// // Task - 6

// var celTemp = 25;
// var ferConvert = (celTemp * 9/5)+32;
// var ferTemp = 70;
// var celConvt = (ferTemp - 32) *5/9;

// document.write(celTemp+ "<sup>0</sup>C is "+ferConvert+"<sup>0</sup>F <br>"+ferTemp+"<sup>0</sup>F is "+celConvt+"<sup>0</sup>C" );

// // Task 7
// var p1 = +650;
// var q1 = +3;
// var p2 = +100;
// var q2 = +7;
// var ship = +100;
// var total = (p1*q1)+(p2*q2)+(ship);
//  document.write("Price of item 1 is " + p1 + "<br>Quantity of item 1 is " + q1+ "<br>Price if item 2 is " + p2 + "<br>Quantity of otem 2 is "+ q2+"<br>Shipping Charges "+ship+"<br><br>Total cost of your order is "+total);

// // Task 8

// var totalMark = 980;
// var obtainedMark = 804;
// var percentage = (obtainedMark * 100)/totalMark;
// document.write("Total Marks: "+totalMark +"<br>Marks obtained: "+obtainedMark+"<br>Percentage: "+percentage);

// // Task 9

// var usd = 10;
// var sriyal = 25;
// var pkr = usd * 104.80 + sriyal * 28;
// document.write("Total Currency in PKR is "+pkr);

// // Task 10

// var a = 5;
// var ans = ((a+5)*(10))/2
// document.write(ans);

// // Task 11

// var currentYear = 2020;
// var birthYear = 1998;
// var age = 2020 - 1998;
// document.write("Current Year is "+currentYear+"<br>Birth Year is "+birthYear+"<br>Your age is "+age);

// // Task 12

//  var radius = 20;
//  var circumference = 2*3.142*radius;
//  var area = 3.142 *radius*radius;
//  document.write("Radius of circle:"+radius+"<br>The circumference is:"+circumference+"<br>The area is:"+area);

// // Task 13

// var favSnack = "choxolate chip"
// var age = 15;
// var maxAge = 65
// var amountPerYear = 3;
// var ans = (maxAge - age)* amountPerYear;
// document.write("Youw will need "+ans+" chocolate chip to last  you until the ripe old age of 65");

// // CHAPTER 6

// // TASK - 1

// document.write("Result:");
// var a = 10;
// document.write("The value of a is "+a+"<br>..........................................<br> the value of a++ is "+ ++a+"<br>Now the value of a is"+a+"<br><br>The value of a++ is "+ a++ +"<br>now the value of a is "+a+"<br><br>The value of --a is "+ --a+"<br>Now the value of a is "+a+"<br><br>The value of a-- is "+a-- +"<br>Now the value of a is "+a);

// // Task 2

// var a = 2; 
// var b = 1;
// document.write("Value of a is: "+a+"<br>Value of b is: "+b);
// var z = --a - --b;
// var x = z + 1;
// var y = x + b--;
// // var result = --a - --b + ++b + b--;
// document.write("<br>Value of --a is:"+ a+"<br>The value of --a - --b is:"+z+"<br>The value of --a - --b + ++b is: "+x+"<br>The value of --a - --b + ++b + b-- is: "+y);
// document.write("Ther reuslt og the given expression(--a - --b + ++b + b--) is: "+y)

// //Task 3
// var a = prompt("Please Enter your name");
// alert("Welcome to the page "+a);

// //Task 4

// Task - 5

// var a = prompt("Enter Number for Multiplication table");
// for(var i =1 ;  i<=10 ; i++){
//     if(a === null){
//         document.write("5 *"+i+"=" + 5 * i+"<br>");
//     }else{
//         document.write(+a+ " * "+i+ " = " + +a*i +"<br>");
//     }
// }

// Task - 6
// var a = prompt("Enter 1St subject name: ");
// var b = prompt("Enter 2nd subject name: ");
// var c = prompt("Enter 3rd subject name: ");
// var totalMark = 100;
// var fMark = prompt("Enter marks of first subject: ");
// var sMark = prompt("Enter marks of Second subject: ");
// var TMark = prompt("Enter marks of Third subject: ");
// var totalResult = 300;
// var totalPercentage = (fMark + sMark + TMark/totalResult)*100;
// document.write("<b>Subject</b>" +" "+"<b>Total</b>" +" "+ "<b>Obtained Marks</b>" +" " +"<b>Percentage</b><br>"+a +" "+totalMark+" "+fMark+" "+" "+" "+(fMark*100)/totalMark+"%"+"<br>" +b +" "+totalMark+" "+sMark+" "+" "+" "+(sMark*100)/totalMark+"%"+"<br>" +c +" "+totalMark+" "+TMark+" "+" "+" "+(TMark*100)/totalMark+"%"+"Total percentage is: "+totalPercentage);
// alert(TotalObtained);

// ========= Chapter 9-11 and Task 1 ===================

//  var city = prompt("Enteryour city name: ");
//  if(city === "karachi"){
//      alert("Welcome to the city of light");
//     }else{
//         alert("City not found!");
//     }

// ========= Chapter 9-11 and Task 2 ===================

// var gender = prompt("Enter your gender: ")
// if(gender === "male"){
// alert("Good Morning sir");
// }else if(gender === "female"){
//     alert("Good Morning ma'am");
// }

// ========= Chapter 9-11 and Task 3 ===================

// var color = prompt("Enter Trafic Signal Color please: ");
// if(color === "red"){
//     alert("Must Stop");
// }else if(color === "yellow") {
// alert("Ready to move");
// }else if(color === "green"){
//     alert("Move now");
// }else{
//     alert("Its not trfic signal light's color");
// }

// ========= Chapter 9-11 and Task 4 ===================

// var remainFuel = prompt("Enter your fuel in liiters");
// if(remainFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }


// ========= Chapter 9-11 and Task 5 ===================

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("Given condition is false");
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
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// ========= Chapter 9-11 and Task 5 ===================

// var m1 = +prompt("Enter 1st subject marks:");
// var m2 = +prompt("Enter 2nd subject marks:");
// var m3 = +prompt("Enter 3rd subject marks:");
// var tMark = 300;
// var totalObtained = m1 + m2 + m3;
// var percentage = (totalObtained*100)/tMark;
// var grade;
// var remarks;
// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent"
// }else if(percentage  >= 70){
//     grade = "A";
//     remarks = "Good"
// }else if(percentage  >= 60){
//     grade = "B";
//     remarks = "You need to improve"
// }else if(percentage < 60){
//     grade = "fail";
//     remarks = "Sorry!"
// }
// document.write("<b>Total Marks: </b>"+tMark+"<br><b>Marks Obtained: </b>:"+totalObtained+"<br><b>Percentage: </b>:"+percentage+"% <br><b>Grade: </b>"+grade+"<br><b>Remarks:</b> "+remarks); 

// ========= Chapter 9-11 and Task 7 ===================

// var secret = 8;
// var a = +prompt("Enter a guess number:" );
// if(a === secret){
//     alert("Bingo! Correct answer");
// }else if(a+1 === secret ){
//     alert("Close Enough");
// }

// ========= Chapter 9-11 and Task 8 ===================

// var a = prompt("Enter a number: ");
// if(a % 3 == 0){
//     alert("Given Number is divisible by 3");
// }else{
//     alert("Sorry! the number is not divisibe by 3");
// }

// ========= Chapter 9-11 and Task 9 ===================

// var a = +prompt("Enter a number: ");
// if(a%2 === 0){
//     alert("Provided number is EVEN number ");
// }else{
//     alert("Provided number is an ODD nummber")
// }

// ========= Chapter 9-11 and Task 10 ===================

// var t = +prompt("Please Enter temprature:");
// if(t > 40){
//     alert("It is too hot outside.")
// }else if(t > 30){
//     alert("The Weather today is Normal.");
// }else if(t > 20){
//     alert("Today’s Weather is cool.");
// }else if(t > 10){
//     alert("OMG! Today’s weather is so Cool.");
// }

// ========= Chapter 9-11 and Task 10 ===================

// var a = +prompt("Enter first number");
// var b =  prompt("Enter Operator");
// var c = +prompt("Enter second number");
// if(b == +){
//     alert(a + b);
// }

// ========= Chapter 12-13 and Task 2 ===================

// var int1 = +prompt("Enter First Integer");
// var int2 = +prompt("Enter Second Integer");
// if(int1 > int2){
//     alert("INTEGER 1 is Larger");
// }else if(int1 < int2){
//     alert("INTERGER 2 is LARGER");
// }else{
//     alert("Both INTERGERS are equal");
// }

// ========= Chapter 12-13 and Task 3 ===================

// var a = +prompt("Enter Number:");
// if(a > 0){
//     alert("Given number is positive");
// }else if(a < 0){
//     alert("Given number is Negative");
// }else{
//     alert("Given number is 0");
// }

// ========= Chapter 12-13 and Task 4 ===================

// var a = prompt("Enter a Character");
// if( a === "a" || a === "e" || a == "i" || a=="o"|| a=="u"){
//     alert("True");
// }
// else{
//     alert("False");
// }

// ========= Chapter 12-13 and Task 5 ===================

// var pass = "password";
// var a = prompt("Enter Password");
// if(a === ""){
//     alert("please Enter Passw0rd");
// }else if(a === pass){
//     alert("“Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect password");
// }

// ========= Chapter 12-13 and Task 6 ===================

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }else{
// greeting = "Good evening";
// alert(greeting);
// }

// ========= Chapter 12-13 and Task 7 ===================

// var time = prompt("Enter time plese");
// if(time  >= 0000 && time < 1200){
//     alert("Good Morining");
// }else if(time >= 1200 && time < 1700){
//     alert("Good afternoon");
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening");
// }else if(time >= 2100 && time <= 2359){
//     alert("Good Night");
// }

// ========= Chapter 14-16 and Task 1 ===================

// var studentName =[];

// ========= Chapter 14-16 and Task 2 ===================

// var studentName = new studentName();

// ========= Chapter 14-16 and Task 3 ===================

//  var stringArrey = ["String1","String2","String3"];

// ========= Chapter 14-16 and Task 4 ===================

// var numArray = [1 , 2 , 3, 4];

// ========= Chapter 14-16 and Task 5 ===================

// var bolArray = [true , false];

// ========= Chapter 14-16 and Task 6 ===================

// var mixArray = ["String" , 11 , true];

// ========= Chapter 14-16 and Task 7 ===================

// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PHD"];
// for(var i = 0; i < qualification.length; i++){
//     document.write(i+1 +")" +" "+qualification[i]+"<br>");
// }

// ========= Chapter 14-16 and Task 8 ===================

// var std = ["Michael","john","Tony"];
// var score = [320,230,480];
// var totalMark = 500;
// document.write("Score of "+std[0]+" is "+score[0]+". Percentage: "+(score[0]/totalMark)*100+"%" +"<br>Score of "+std[1]+" is "+score[1]+ " Percentage: " +(score[1]/totalMark)*100 + "%" + "<br>Score of "+std[2]+" is "+score[2]+ " Percentage: " +(score[2]/totalMark)*100 + "%");

// ========= Chapter 14-16 and Task 9 ===================

// var color = ["red","yellow","green"];
// document.write(color);
// var a = prompt("whuch color you want to add at the end:");
// color.push(a);
// document.write("<br><b>Updated array:  </b>"+color);
// var b = prompt("Enter 1st color you want to add in starting if above array");
// var c = prompt("Enter 2nd color you want to add in starting if above array");
// var i = prompt("At which index you want to add color");
// var j = prompt("Which color you want add at your desire index");
// document.write("<br><b>Deleted Value: </b>"+color.shift()+"<br><b>Deleted Value: </b>"+color+"<br><b>Deleting Last color : </b>"+color.pop()+"<br> <b>Array after deleting last color :</b> "+color+"<br><b><INDEX NO :</b>"+i+"<br><b>Color to be add: </b>"+j+"<br><b>updated array: </b>"+color.splice(i,j)+color);

// ========= Chapter 14-16 and Task 10 ===================

// var stdScore = [234 , 453, 120, 115];
// document.write("Array before sorting: "+stdScore+"<br>Array after sorting: "+stdScore.sort()); 

// ========= Chapter 14-16 and Task 11 ===================

// var cities = ["Karachi", "Lahore","Islamabad","Queeta","Faisalabad"];
// var selectedCities = cities.slice(1,4);
// document.write("<b>Cities: </b>"+cities+"<br><b>Selected Cities: </b>"+selectedCities);

// ========= Chapter 14-16 and Task 12 ===================

// var arr = ["This","is","my","cat"];
// document.write(arr);
// var b = arr.join();
// document.write("<br>"+b);

// ========= Chapter 14-16 and Task 13 ===================

// var arr =["keyboard","mouse","printer","monitor"];
// for(var i = 0 ; i<arr.length;i++){
//     document.write("Out: <br>"+ arr[i]+"<br>" );

// }

// ========= Chapter 14-16 and Task 14 ===================

// var arr =["keyboard","mouse","printer","monitor"];
// for(var i = arr.length-1 ; i >=0 ; i--){
//     document.write("Out: <br>"+ arr[i]+"<br>" );
// }

// ========= Chapter 14-16 and Task 15 ===================

// var companies = ["Apple","Samsung","Motorola"," Nokia", "Sony","Haier"]
// for(var i = 0 ; i<companies.length; i++){
//     document.write(companies);
// }

// ========= Chapter 17-20 and Task 1 ===================

// var multi =[],[],[];

// ========= Chapter 17-20 and Task 2 ===================

// var matrix =[ [0,1,2,3] , [1,0,1,2,] , [2,1,0,1]];
// document.write(matrix);

// ========= Chapter 17-20 and Task 3 ===================

// for(var i= 1; i<=10;i++){
//     document.write(i+"<br>");
// }

// ========= Chapter 17-20 and Task 4 ===================

// var table = prompt("Enter number fir multiplication table");
// var limit = prompt("Enter the limit of the table");
// for(var i=1;i<= limit; i++){
//     document.write(table+ " * " +i+" = "+ table*i+"<br>");
// }

// ========= Chapter 17-20 and Task 5 ===================

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(var i = 0; i< fruits.length; i++){
//     document.write("Element at index"+i+" is "+fruits[i]+"<br>");
// } 

// ========= Chapter 17-20 and Task 6 ===================

// document.write("Counting<br>")
// for(var i = 1;i< 16;i++){
//     document.write(i+",");
// }
// document.write("<br>Reverse Counting<br>");
// for(var i=10;i>=1;i--){
//     document.write(i+",");
// }
// document.write("<br>Even:<br>");
// for(var i=0;i<=20;i++){
//     if(i%2 === 0 ){
//         document.write(i+",");
//     }
// }
// document.write("<br>ODD:<br>");
// for(var i=0;i<=20;i++){
//     if(i%2 != 0 ){
//         document.write(i+",");
//     }
// }
// document.write("<br>Series:<br>");
// for(var i=1;i<=20;i++){
//     if(i%2 === 0 ){
//         document.write(i+"k, ");
//     }
// }

// ========= Chapter 17-20 and Task 7 ===================

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Enter the iten you are searching for:");
// for(var i =0; i<a.length;i++){
//     if(a[i] === b){
//         document.write(b+"is availabe in our bakery at Index no "+ a.indexOf(a[i]));
//     }else{
//         document.write("Not found!");
//     }
//     break;
// }

// ========= Chapter 17-20 and Task 8 ===================

// var a = [24, 53, 78, 91, 12];
// var temp;
// for(var i =0;i<a.length;i++){
    
// }

// ========= Chapter 17-20 and Task 10 ===================

// for(var i=1;i <= 100;i++){
//     if(i%5 === 0){
//         document.write(i+" ");
//     }
// }
