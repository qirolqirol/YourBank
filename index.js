// function son (num) {
//   const jami = num + 1
//   console.log(jami);
// }
// son(21)

// function son (num, num1) {
//   const jami = num + num1
//   console.log(jami);
// }
// son(21, 12)

// function son (num) {
//   const jami = num * 60 * 60
//   console.log(jami);
// }
// son(2)

// function son (num) {
//   if (num % 2 === 0) {
//     console.log("Juft");
//   }else{
//     console.log("toq");

//   }
// }
// son(2)

// function son (num) {
//   if (num > 0) {
//     console.log("Musbat");
//   }else{
//     console.log("Manfiy");

//   }
// }
// son(-2)

// function namber(nam1, nam2) {
//   let total = nam1 * nam2
//   console.log(total);

// }
// namber(12, 21)

// function names(name) {
//   console.log(`Xush kelibsiz ${name}`);

// }
// names(prompt("Isim yozing"))

// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkEvenOrOdd(prompt("Son kiriting")));


// function big_number(nam, nam1, nam2) {
//   return Math.max(nam, nam1, nam2);
// }
// console.log(big_number(12, 21, 31));


// function exponent(firstNumber, secondNumber, hirdNumber) {
//   let total = firstNumber ** 3;
//   let total1 = secondNumber ** 2;
//   let total2 = hirdNumber ** 0;
//   console.log(`Birinchi son ${total}, Ikkinchi son ${total1}, Uchinchi son ${total2}`);
// }
// exponent(2, 5, 10)















// const getSam = function(nam) {
//   console.log(nam + 1);
// }
// getSam(11)

// const getSam = (nam) => console.log(nam + 1);
// getSam(11)




// const namber = function (nam1, nam2) {
//   let total = nam1 + nam2
//   console.log(total);
// }
// namber(12, 21)

// const namber = (nam1, nam2) =>{
//   let total = nam1 + nam2
//   console.log(total);
// }
// namber(12, 21)



// const hour = function (seconds) {
//   let second = seconds * 60 * 60
//   console.log(second);
// }
// hour(1)

// const hour = (seconds) =>{
//   let second = seconds * 60 * 60
//   console.log(second);
// }
// hour(1)

// const square = function (square_surface , square_perimeter) {
//   let total = square_surface ** 2;
//   let total_1 = 4 * square_perimeter;
//   console.log(`Kvadradning yuzasi: ${total}
//                Kvadradning perimetri: ${total_1} `);
// }








// FUNCTION -> DECLARATION, EXPRESSION, ARROW, (CALLBACK, ANONYMOUS)



///////////   DECLARATION.   //////////////
// // 1)
// function number(nam) {
//    return nam + 1
// }
// console.log(number(2));

// // 2)
// function number(num, num1) {
//   return num + num1
// }
// console.log(number(12, 21));


// // 3)
// function hour(time) {
//   return time * 60 *60
// }
// console.log(hour(1));

// // 4)
// function square(square_perimeter, square_surface) {
//   const total = square_perimeter ** 2
//   const total_1 = 4 * square_surface
//   console.log(`Kvadratni perimetri: ${total},
// Kcvadratni yuzasi: ${total_1}`);
// }
// square(2, 2);

// // 5)
// function number(num) {
//   if (num % 2 === 0) {
//     console.log("Juft");
//   }else{
//     console.log("Toq");
//   }
// }
// number(1)

// // 6)
// function signed_numbers(num) {
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//     console.log("Manfiy");
//   }else{
//     console.log("Nol (Neytral)");
//   }
// }
// signed_numbers(0)

// // 7)
// function age(years) {
//   let total = years * 365;
//   let total_1 =total  * 24;
//   console.log(`Odam yoshi kun hisobida: ${total} kun
// Odam yoshi soat hisobida: ${total_1} soat`);
// }
// age(61.3);


// ///////////  EXPRESSION   //////////////

// // 1)
// const number = function (num) {
//   console.log(num + 1);
// }
// number(12)

// // 2)
// const number = function (num, num1) {
//   console.log(num + num1);
// }
// number(12, 12)

// // 3)
// const convertHoursToSeconds = function (hours) {
//   const seconds = hours * 60 * 60;
//   console.log(`${hours} soat — ${seconds} soniya bo'ladi.`);
// }
// convertHoursToSeconds(2); 

// // 4)
// const square = function (square_perimeter, square_surface) {
//   const total = square_perimeter * 2
//   const total_1 = square_surface * 4
//   console.log(`Kvadratni perimetri: ${total},
// Kvadratni yuzasi: ${total_1}`);
// }
// square(2, 2)


// // 5)
// const signed_numbers = function (num) {
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//     console.log("Manfiy");
//   }else{
//     console.log("Nol (Neytral)");
//   }
// }
// signed_numbers(0)

// // 6)
// const signed_numbers = function (num) {
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//     console.log("Manfiy");
//   }else{
//     console.log("Nol (Neytral)");
//   }
// }
// signed_numbers(12)

// // 7)
// const age = function (years) {
//   let total = years * 365;
//   let total_1 = total * 24;
//   console.log(`Odam yoshi kun hisobida: ${total} kun
// Odam yoshi soat hisobida: ${total_1} soat`);
// }
// age(61.3);

// ///////////  EXPRESSION   //////////////

// // 1)
// const number = (num) => {
//   console.log(num + 1);
// }
// number(12)

// // 2)
// const number = (num, num1) => {
//   console.log(num + num1);
// }
// number(12, 12)

// // 3)
// const convertHoursToSeconds = (hours) =>{
//   const seconds = hours * 60 * 60;
//   console.log(`${hours} soat — ${seconds} soniya bo'ladi.`);
// }
// convertHoursToSeconds(2); 

// // 4)
// const square = (square_perimeter, square_surface) =>{
//   const total = square_perimeter * 2
//   const total_1 = square_surface * 4
//   console.log(`Kvadratni perimetri: ${total},
// Kvadratni yuzasi: ${total_1}`);
// }
// square(2, 2)


// // 5)
// const signed_numbers = (num) => {
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//     console.log("Manfiy");
//   }else{
//     console.log("Nol (Neytral)");
//   }
// }
// signed_numbers(0)

// // 6)
// const signed_numbers = (num) =>{
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//     console.log("Manfiy");
//   }else{
//     console.log("Nol (Neytral)");
//   }
// }
// signed_numbers(12)

// // 7)
// const age = (years) => {
//   let total = years * 365;
//   let total_1 = total * 24;
//   console.log(`Odam yoshi kun hisobida: ${total} kun
// Odam yoshi soat hisobida: ${total_1} soat`);
// }
// age(61.3);


// const kattaSon = (a, b) => {
//   console.log(Math.max(a, b));
// }
// kattaSon(12, 32)


// const number = (num) => {
//   if (num > 0) {
//     console.log("Musbat");
//   }else if(num < 0){
//      console.log("Manfiy");
//   }else{
//     console.log("Nol Natural Son");
//   }
// }

// number(0)

// const number = (num) => {
//   if (num % 2 === 0) {
//     console.log("Bu son Juft");
//   }else if (num % 2 !== 0) {
//     console.log("Bu son Toq");
//   }else{
//     console.log("Bu son emas");
//   }
// }

// number(12)

// const yoshToifasi = (yosh) => {
//   if (yosh > 0 && yosh <= 12) {
//     console.log("Bola");
//   }else if (yosh >= 13 && yosh <= 19) {
//     console.log("O'smir");
//   }else if (yosh >= 20) {
//     console.log("Katta yosh");
//   }else{
//     console.log("Yosh kiriting");
//   }
// }
// yoshToifasi(13)

// const leap_year = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} - kabisa yili`);
//   } else {
//     console.log(`${year} - kabisa yili emas`);
//   }
// }
// leap_year(2024); 
// leap_year(2026); 


// const temperatureStatus = (temp) => {
//   if (temp < 0) {
//     console.log("Qaxraton sovuq");
//   } else if (temp > 0 && temp <= 15) {
//     console.log("Havo Savuq");
//   }else if (temp >= 16 && temp <= 25) {
//     console.log("Havo Iliq");
//   }else if(temp > 25){
//     console.log("Havo Issiq");
//   }else{
//     console.log("Temp Kiriting");
//   }
// }
//  temperatureStatus(16)


