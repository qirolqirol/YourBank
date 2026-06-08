// let name = prompt("Ismingizni kiriting")
// let birthYear = prompt("Tug'ilgan yilingizni kiriting")
// let userAge = 2026 - birthYear
// let isAgree = confirm("Rozimisiz")
// if (isAgree) {
//   console.log(`Ismingiz ${name} yoshingiz ${userAge}`);
// }else{
//   console.log("Raxmat");
// }


// let son = prompt("Son kiriting")
// if(son % 3 === 0 && son % 5 === 0 ){
//   console.log("FizzBazz");
// }else if(son % 3 === 0){
//    console.log("Fizz");
// }else if(son % 5 === 0){
//   console.log("Fazz");
// }else{
//   console.log("Xato"); 
// }


// let pul = Number(prompt("Pul to'lang "))
// if(pul >= 50000 && pul <= 300000 ){
//   let jami = pul * 0.15
//   console.log(jami);
// }else if(pul < 50000 || pul > 300000){
//   let jami_1 = pul * 0.20
//   console.log(jami_1);
// }

// let son = prompt("Haft Kunlarini kiriting (1 - 7)  ")
// let haftaKunlari = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]
// if (son > 1 && son < 7) {
//   let kun = haftaKunlari[son - 1];
//   console.log(kun);
// } else {
//   console.log("Xato Kun Kiritmoqdasiz");
// }


// let kun = Number(prompt("Hafta kunini kiriting (1-7):"));
// if (kun === 1) {
//     console.log("Dushanba");
// } else if (kun === 2) {
//     console.log("Seshanba");
// } else if (kun === 3) {
//     console.log("Chorshanba");
// } else if (kun === 4) {
//     console.log("Payshanba");
// } else if (kun === 5) {
//     console.log("Juma");
// } else if (kun === 6) {
//     console.log("Shanba");
// } else if (kun === 7) {
//     console.log("Yakshanba");
// } else {
//     console.log("Xato 1 dan 7 gacha raqam kiriting.");
// }


// let son = prompt("1 dan 12 son kiriting ")
// let haftaKunlari = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyul", "Iyun","Avgust","Sentyabr","Oktiyabr","Noyabr","Dekabr"]
// if (son > 1  && son <= 12) {
//   let kun = haftaKunlari[son - 1];
//   console.log(kun);
// } else {
//   console.log("Xato Kun Kiritmoqdasiz");
// }

// let son = prompt("Yoshingizni kiriting ")
// if (son >= 18) {
//   console.log("Siz haydashingiz mumkin");
// }else{
//   console.log("Siz hali haydal olmaysiz");
// }

// let son = Number(prompt("son kiriting "))
// let son_1 = Number(prompt("2 sonni kiriting"))
// let jami = son + son_1;
// if (jami === 100) {
//   console.log("Yig'indi 100 ga teng");
// }else if (jami < 100) {
//   console.log("Kichik yig'indi");
// }else {
//   console.log("Katta yig'indi");
// }

// let son = Number(prompt("Ball kiriting "));

// if (son >= 85) {
//   console.log("A'lo");
// } else if (son >= 70 && son <= 84) {
//   console.log("Yaxshi");
// } else if (son >= 50 && son <= 69) {
//   console.log("Qoniqarli");
// } else {
//   console.log("Qoniqarsiz");
// }



// let text = String(prompt("Harf kiriting ")).toLowerCase()
// const undoshlar = ["b", "d", "f", "g", "g'", "h", "j", "k", "l", "m",
//   "n", "p", "q", "r", "s", "t", "v", "x", "y", "z",
//   "ch", "sh", "ng"];
// const unlilar = ["a", "e", "i", "o", "u", "o'"];
// if (undoshlar.includes(text)) {
//     console.log("Bu undosh harf");
// }else if (unlilar.includes(text)) {
//    console.log("Bu unli harf");
// }else{
//   console.log("Bu harf emas yoki xato kiritilgan");
// }

// let temp = Number(prompt("Temperaturni kiriting "))
// if (temp < 0) {
//   console.log("Sovuq");
// }else if (temp > 0 && temp < 14) {
//    console.log("Salqin");
// }else if (temp >= 14 & temp < 24 ) {
//   console.log("Yoqimli");
// }else if (temp >= 24 && temp < 34) {
//   console.log("Issiq"); 
// }else if (temp >= 34) {
//   console.log("Juda Issiq");
// }






// const prompt = require('prompt-sync')();
// let day = +prompt("Hafta kunkiriting ");
// switch (day) {
//   case 1: console.log("Yanvar");
//     break;
//   case 2: console.log("Fevral");
//     break;
//   case 3: console.log("Mart");
//     break;
//   case 4: console.log("Aprel");
//     break;
//   case 5: console.log("May");
//     break;
//   case 6: console.log("Iyun");
//     break;
//   case 7: console.log("Iyul");
//     break;
//   case 8: console.log("Avgust"); 
//     break;
//   case 9: console.log("Sentabr");
//     break;
//   case 10: console.log("Oktabr");
//     break;
//   case 11: console.log("Noyabr");
//     break;
//   case 12: console.log("Dekabr");
//     break;
//   default: console.log("Bunday oy yo'q");
// }



// let son = Number(prompt("Soat vaqtini kiriting "))
// if (son >= 0 && son < 5) {
//   console.log("Hayirli tun");
// }else if (son >= 5 && son < 12) {
//   console.log("Hayirli tong");
// }else if (son >= 12 && son < 17) {
//   console.log("Xayirli kun");
// }else if (son >= 17 && son < 22) {
//   console.log("Hayirli kech");
// }else if (son >= 22 && son <= 24 ) {
//   console.log("Hayirli tun");
// }else{
//   console.log("Natog'ri vaqt kiritdizgiz");

// }

// const prompt = require('prompt-sync')();
// let tezlik = +prompt("tezlik kiriting ")
// if (tezlik > 0 && tezlik <= 70) {
//   console.log("siz normal tezlikdasiz");
// }else if (tezlik >  70 && tezlik < 100 ) {
//   console.log("jarima 200");
// }else if (tezlik > 100) {
//   console.log("jarima 500");
// }else{
//   console.log("error");
// }



// const prompt = require('prompt-sync')();
// let type = prompt("Harf kiriting ")
// if (typeof (type) === 'string') console.log("String");
// else if (typeof (type) ===' number') console.log("Number");
// else if (typeof (type) === 'boolean') console.log("Number");
// else console.log("Error");


// const prompt = require('prompt-sync')();
// let type = prompt("Harf kiriting ")


// const prompt = require('prompt-sync')();
// let harorat = +prompt("Harorat kiriting ");
// if (harorat > 20) {
//   console.log("Kun issiq");
// }else{
//   console.log("Kun sovuq");

// }1




// const prompt = require('prompt-sync')();
// let bal = +prompt("Bal kiriting ");
// if (bal < 50) {
//   console.log("Siz imtihondan yiqildingiz.");
// }else if (bal <= 79) {
//   console.log("Siz kontraktga kirdingiz.");
// }else if (bal > 80) {
//   console.log("Siz grant yutdingiz!");
// }


// let yosh = +prompt("Yoshingizni kiriting ")
// let prava = confirm("Sizda prava bormi ")
// if (yosh >= 20 && prava) {
//   console.log("Siz mashina hayday olasiz.");
// }else{
//   console.log("Sizga mashina boshqarish taqiqlanadi.");
// }

// let login = prompt("Login kiriting ")
// let parol = prompt("Parol kiriting ")
// if (login === "admin" && parol === "12345") {
//   console.log("Tizimga muvaffaqiyatli kirdingiz!");
// }else if (login === "admin" && parol !== "12345"){
//   console.log("Parol noto'g'ri!")
// }else{
//   console.log("Bunday foydalanuvchi mavjud emas!");

// }

// let number = +prompt("Son kiriting ");

// if (number > 0 && number % 2 === 0) {
//   console.log("Bu musbat juft son");
// } else if (number > 0 && number % 2 !== 0) { // 2 ga bo'linmasa - toq son
//   console.log("Bu musbat toq son");
// } else if (number < 0) {
//   console.log("Bu manfiy son");
// } else { // Agar musbat ham, manfiy ham bo'lmasa, demak u noldir
//   console.log("Kiritilgan son nol");
// }


// let day = +prompt("Hafta kunini kiriting ");
// if (day === 1) {
//   console.log("Dushanba");
// }else if (day === 2) {
//   console.log("Seshanba");
// }else if (day === 3) {
//   console.log("Chorshanba");
// }else if (day === 4) {
//   console.log("Payshanba");
// }else if (day === 5) {
//   console.log("Juma");
// }else if (day === 6) {
//   console.log("Shanba");
// }else if (day === 7) {
//   console.log("Yakshanba");
// }else{
//   console.log("Nomalum kun");
// }

// let day = +prompt("Kun kiriting ")
// if (day >= 1 && day <= 5) {
//   console.log("Ish kuni");
// }else if (day >= 6 && day <= 7) {
//   console.log("Dam olish kuni");
// }else{
//   console.log("Bunday hafta kuni yo'q!");
// }

// let yosh = +prompt("Yoshingizni kiriting ")
// let talaba = confirm("Talabamisiz")
// if (yosh <= 12 || yosh >= 60) {
//   console.log("Sizga kirish bepul");
// }else if (talaba) {
//   console.log("Sizga 50% chegirma");/
// }else{
//   console.log("Chipta narxi to'liq");
// }


// let age = +prompt("Yoshingizni kiriting ")
// if (age >= 18) {
//   console.log("Xush kelibsiz!");
// }else{
//   console.log("Kirish taqiqlanadi!");
// }

// let ball = +prompt("Balingizni kiriting (0-100):");
// if (ball >= 90 && ball <= 100) {
//   console.log("A'lo");
// }else if (ball >= 70) {
//   console.log("Yaxshi");
// }else if (ball >= 50) {
//   console.log("Qoniqarli");
// }else{
//   console.log("Yiqildi (Qayta topshirish)");
// }

// let son = +prompt("Son kiriting:");
// if (son % 2 === 0) {
//   console.log("Bu juft");
// }else{
//   console.log("Bu toq son");
// }

// let son = +prompt("Son kiriting:");
// if (son > 0 && son % 2 ===0 ) {
//   console.log("Musbat juft son");
// }else if(son < 0 && son % 2 ===0 ){
//   console.log("Manfiy juft son" );
// }else{
//   console.log("Shartga mos kelmaydi");
// }

// let son = +prompt("Son kiriting:");
// if (son > 0) {
//   if (son % 2 ===0) {
//     console.log("Musbat juft son");
//   }else{
//     console.log("Musbat toq son");
//   }
// }else  if (son < 0) {
//     if (son % 2 === 0) {
//       console.log("Manfiy juft son");
//     }else{
//       console.log("Manfiy toq son");
//     }
//   }else{
//       console.log("Bu nol");
//   }

// let son = +prompt("Son kiriting:");
// let xabar = son % 2 === 0 ? "Juft": "Toq";
// console.log(xabar);


// let ism = prompt("Ismingizni kiriting:");

// // Agar ism bo'sh bo'lsa, "Mehmon" ni yuklaydigan qisqa kod yozing
// let yakuniyIsm = ism || "Mehmon"; 

// console.log("Xush kelibsiz, " + yakuniyIsm);

// let login = prompt("Loginni kiriting:");
// if (login === "admin") {
//   let parol = prompt("Parol kiriting")
//   if (parol === "12345") {
//     console.log("Tizimga muvaffaqiyatli kirdingiz!");
//   }else{
//     console.log("Parol noto'g'ri!");
//   }
// }else{
//   console.log("Bunday foydalanuvchi mavjud emas");
// }

// let player1 = prompt("1-o'yinchi son kiriting 1)tosh, 2)qaychi, 3)qog'oz:");
// let player2 = prompt("2-o'yinchi son kiriting 1)tosh, 2)qaychi, 3)qog'oz:");
// let _1 = 1
// let _2 = 2
// let _3 = 3

// if (player1 === player2) {
//   console.log("Durang!");
// } 
// else if (
//   (player1 === _1 && player2 === _2) || 
//   (player1 === _2 && player2 === _3) ||
//   (player1 === _3 && player2 === _1)
// ) {
//   console.log("1-o'yinchi yutdi!");
// } 
// else {
//   console.log("2-o'yinchi yutdi!");

// }

// let ball = +prompt("Ball kiritng")
// switch (true) {
//   case ball >= 90:
//     console.log("A'lo (A)");
//     break;
//   case ball >= 70:
//     console.log("Yaxshi (B)");
//     break
//   case ball >= 50:
//     console.log("Qoniqarli (C)");
//     break
//   default:
//     console.log("Imtihondan o'ta olmadi (F)");
//     break
// }

// let son1 = +prompt("Birinchi sonni kiriting:");
// let son2 = +prompt("Ikkinchi sonni kiriting:");
// let amal = prompt("Amalni kiriting (+, -, *, /):");

// switch (amal) {
//   case "+":
//     console.log(son1 + son2);
//     break;
//   case "-":
//     console.log(son1 - son2);
//     break
//   case "*":
//     console.log(son1 * son2);
//     break
//   case "%":
//     console.log(son1 % son2);
//     break
//   case "/":
//     console.log(son1 / son2);
//     break;
//   default:
//     console.log("Bunday amal mavjud emas");
// }


