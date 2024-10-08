
//                              Question # 1

// var multiDimentionalArray=[[],[]];

//                              Question # 2                                                     ///**** */

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
//   document.write(`${matrix[0]} <br>
//     ${matrix[1]} <br>
//     ${matrix[2]} <br> `)


//                              Question # 3

// for(var i=1; i<=10; i++){
// console.log(i);
// }

//                              Question # 4

// var userTableNo=+prompt("Enter a number to show its multiplication table");
// var userTableLength=+prompt("Enter a length of table");
// for(var i=1; i<userTableLength; i++){
//     document.write(`${userTableNo} x ${i} = ${userTableNo*i} <br> `)
// }

//                              Question # 5

// var fruits=["Apple","Banana","Mango","Orange","Strawberry"]

// for(var i=0; i<fruits.length; i++){
// console.log(fruits[i]);
// }

//                              Question # 6

// Counting
// document.write(`<br />Counting: <br />`);
// for (var i = 1; i <= 15; i++) {
//   document.write(`${i},`);
// }

// // Reverse Counting
// document.write(`<br />Reverse Counting: <br />`);
// for (var i = 10; i >= 1; i--) {
//   document.write(`${i},`);
// }

// // Even Counting
// document.write(`<br /> Even Counting: <br />`);
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(`${i},`);
//   }
// }

// // Odd Counting
// document.write(`<br /> Odd Counting: <br />`);
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     document.write(`${i},`);
//   }
// }

// // Series Counting
// document.write(`<br /> Series Counting: <br />`);
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(`${i}k,`);
//   }
// }

//                                 Question no 7

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// var Userinput = prompt("Please Enter an item");

// var available = "no";

// for (var i = 0; i < a.length; i++)
//   if (Userinput === a[i]) {
//     available = "yes";
//     document.write(
//       `<br /> ${Userinput} is available at index ${i} in our bakery <br />`
//     );
//   }
// if (available === "no") {
//   document.write(
//     `<br />We are sorry. ${Userinput} is not available in our bakery <br />`
//   );
// }

//                                   Question # 8

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];

// for(i=1;i<=A.length;i++){
//     if(A[i]>largest){
//         largest=A[i]
//     }
// }
// document.write(`<br/>Array items: ${A}<br/>`);
// document.write(`The largest number in the array is: ${largest}<br/>`);

//                                   Question # 9

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for(i=1;i<=A.length;i++){
    if(A[i]<smallest){
        smallest=A[i]
    }
}
document.write(`Array items: ${A}<br/>`)
document.write(`The smallest number in the array is: ${smallest}<br/>`)

//                                   Question # 10

for (var i = 1; i <= 100; i++) {
    
    if (i % 5 === 0)
    {
      document.write(`${i} , `) 
    }}