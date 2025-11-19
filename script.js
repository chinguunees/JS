// let weekNumber = 7;
// let weekName;

// if (weekNumber == 1) {
//   weekName = "Даваа";
//   console.log("Davaa mun bn");
// } else if (weekNumber == 2) {
//   weekName = "Мягмар";
// } else if (weekNumber == 3) {
//   weekName = "Лхагва";
// } else if (weekNumber == 4) {
//   weekName = "Пүрэв";
// } else if (weekNumber == 5) {
//   weekName = "Баасан";
// } else if (weekNumber == 6) {
//   weekName = "Бямба";
// } else if (weekNumber == 7) {
//   weekName = "Ням";
// }
// console.log(weekName);
// // switch (weekNumber) {
// //   case 1:
// //     console.log("Monday");
// //     break;
// //   case 2:
// //     console.log("Tuesday");
// //     break;
// //   case 3:
// //     console.log("Wednesday");
// //     break;
// //   case 4:
// //     console.log("Thursday");
// //     break;
// //   case 5:
// //     console.log("Friday");
// //     break;
// //   case 6:
// //     console.log("Saturday");
// //     break;
// //   case 7:
// //     console.log("Sunday");
// //     break;
// //   default:
// //     console.log("Switch test hiij bn");
// // }

// // bodlogo1
// // const numberOne = 1;
// // const numberTwo = 2;

// // if (numberOne > numberTwo) {
// //   console.log("bodlogo1", numberOne);
// // } else {
// //   console.log("bodlogo1", numberTwo);
// // }

// // bodlogo2
// // const numberOne = 35;

// // if (numberOne % 2 === 0) {
// //   console.log("even");
// // } else {
// //   console.log("odd");
// // }

// // bodlogo3;
// const numberOne = 1;
// const numberTwo = 2;
// const numberThree = 3;

// if (numberOne > numberTwo && numberOne > numberThree) {
//   console.log("hamgiin ih", numberOne);
// }
// if (numberTwo > numberThree && numberTwo > numberOne) {
//   console.log("hamgiin ih", numberTwo);
// }
// if (numberThree > numberOne && numberThree > numberTwo) {
//   console.log("hamgiin ih", numberThree);
// }

// if (numberOne < numberTwo && numberOne < numberThree) {
//   console.log("hamgiin baga", numberOne);
// }
// if (numberTwo < numberThree && numberTwo < numberOne) {
//   console.log("hamgiin baga", numberTwo);
// }
// if (numberThree < numberOne && numberThree < numberTwo) {
//   console.log("hamgiin baga", numberThree);
// }

// // Bodlogo4

// const stringChinguun = "CHINGUUNEEGIIN STRING";
// console.log(stringChinguun.length);

const arrayCars = ["BMW", "Toyota", "Suzuki", "Mercedes", "Tesla"];
console.log(arrayCars);

// 11.19
// bodlogo 1

const fruits = ["Banana", "Apple", "Strawberry", "Lemon", "Kiwi"];
const first = fruits.at(0);
const last = fruits.at(4);
console.log(first, last);

// bodlogo 2

const fruits1 = ["Apple", "Banana"];
fruits1.push("Mango");

console.log(fruits1);

// bodlogo 3

fruits.pop(4);
console.log(fruits);

// bodlogo 4
const too = [10, 20, 30];
too.unshift(5);
console.log(too);

// bodlogo 5
const too1 = [100, 200, 300];
too1.shift(1);
console.log(too1);

// bodlogo 6
const too2 = [1, 2, 3];
const too3 = [4, 5, 6];
const too4 = too2.concat(too3);
console.log(too4);

// bodlogo 7

const fruit7 = ["Apple", "Banana", "Orange"];
// fruit7.find("Banana");
console.log(fruit7.at(1));

// bodlogo 8

const animals = ["Cat", "Dog", "Bird"];
const position = animals.indexOf("Dog");
console.log(position);

// bodlogo 9

const love = ["i", "love", "javascript"];
console.log(love.join(" "));

// bodlogo 10

const too10 = [10, 20, 30, 40, 50];
const too102 = [too10.slice(0, 3)];
console.log(too102);

// bodlogo 11

const too11 = [1, 2, 3, 4];
too11.splice(1, 1);
console.log(too11);

// bodlogo 12

const too12 = [1, 2, 3, 4, 5];
too12.reverse(1);
console.log(too12);

// bodlogo 13

const fruits13 = ["banana", "apple", "cherry"];
fruits13.sort();
console.log(fruits13);

// bodlogo 14

console.log(Array.isArray(fruits13));

// bodlogo 15
const colors15 = ["red", "blue", "green"];

console.log(colors15.length);

// bodlogo 16

const too16 = [10, 20, 30];
too16[1] = 25;
console.log(too16);

//bodlogo 17

const too17 = ["HTML", "CSS"];
const too177 = ["Javascript", "React"];
console.log(too17.concat(too177).length);

// bodlogo 18

const too18 = [1, 2, 3, 4, 5];
too18.splice(3, 2);
console.log(too18);

// bodlogo 19

const too19 = [5, 10, 15, 20];
too19.splice(2, 1);
console.log(too19);

// bodlogo 20

const too20 = [100, 200, 300];
if (too20.includes(200)) {
  console.log("Baina");
} else console.log("Baihgui");
