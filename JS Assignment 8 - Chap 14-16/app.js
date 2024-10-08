//                          Question # 1

var studentsName = [];

//                          Question # 2

var studentsName = new Array();

//                          Question # 3

var arr = ["Ali","Usman","Zain","Ayan","Hamza"];

//                          Question # 4

var arr = [24,33,16,42,18];

//                          Question # 5

var arr = [true,false,true,true,false];

//                          Question # 6

var arr = ["Ali",25,"december",2003,true];

//                          Question # 7

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write(qualifications +"<br>" +"<br>");

//                          Question # 8

var studentsName=["Fahad","Amir","Hamza"];
var studentsMarks=[378,386,461];
var studentsPercentage=[378/500*100,386/500*100,461/500*100];
console.log (studentsPercentage);
document.write(" score of " + studentsName[0]+ " is "+studentsMarks[0]+ " and Percentage is " +studentsPercentage[0]  +"<br>");
document.write(" score of " + studentsName[1]+ " is "+studentsMarks[1]+ " and Percentage is " +studentsPercentage[1]  +"<br>");
document.write(" score of " + studentsName[2]+ " is "+studentsMarks[2]+ " and Percentage is " +studentsPercentage[2]  +"<br>"  +"<br>");

//                          Question # 9

// var colors=["Red","Green","Blue" ];
// document.write(colors +"<br>");
// var userColor=prompt("What color do you want to add at the beginening of an array");
// colors.unshift(userColor);
// document.write(colors +"<br>");
// var userColorEnd=prompt("What color do you want to add at the end of an array");
// colors.push(userColorEnd);
// document.write(colors +"<br>");
// colors.unshift("Black","White");
// document.write(colors +"<br>");
// colors.shift();
// document.write(colors +"<br>");
// colors.pop();
// document.write(colors +"<br>");
// var userColorIndex=prompt("Which index you want to add a color");
// var userColorAdd=prompt("What color do you want to add");
// colors.splice(userColorIndex,0,userColorAdd);
// document.write(colors +"<br>");
// var userColorIndex=prompt("From which index you want to delete a color");
// var userColorDelete=prompt("How many colors you want to delete");
// colors.splice(userColorIndex,userColorDelete);
// document.write(colors +"<br>");

//                          Question # 10
// var studentsScore = [245,120,461,322,260,765];
// studentsScore.sort();
// document.write(studentsScore);

//                          Question # 11

// var cities=["Karachi" , "Lahore", "Multan","Islamabad","Peshawar"]
// document.write(cities +"<br>");
// var selectedCities=cities.slice(2,4);
// document.write(selectedCities +"<br>");

//                          Question # 12

// var arr =["This","is","my","cat"]
// var newArr =arr.join(" ");
// document.write(newArr);

//                          Question # 13

var devices=["Keyboard","Mouse","Printer","Monitor"]
document.write(devices +"<br>");
var newArr=devices.shift();
document.write(newArr +"<br>");
var newArr=devices.shift();
document.write(newArr +"<br>");
var newArr=devices.shift();
document.write(newArr +"<br>");
var newArr=devices.shift();
document.write(newArr +"<br>" +"<br>");


//                          Question # 14

var devices=["Keyboard","Mouse","Printer","Monitor"]
document.write(devices +"<br>");
var newArr=devices.pop();
document.write(newArr +"<br>");
var newArr=devices.pop();
document.write(newArr +"<br>");
var newArr=devices.pop();
document.write(newArr +"<br>");
var newArr=devices.pop();
document.write(newArr +"<br>");

//                          Question # 15


var phoneManufacturers=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>");
document.write("<option>" + phoneManufacturers[0] + "</option>");
document.write("<option>" + phoneManufacturers[1] + "</option>");
document.write("<option>" + phoneManufacturers[2] + "</option>");
document.write("<option>" + phoneManufacturers[3] + "</option>");
document.write("<option>" + phoneManufacturers[4] + "</option>");
document.write("<option>" + phoneManufacturers[5] + "</option>");
