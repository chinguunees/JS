// bodlogo1
const number1 = [5, 4];

function bodlogo1(sum1) {
  let sum = 0; //sanasan too

  for (let i = 0; i < sum1.length; i++) {
    // ugugdsun functionii urt buyu length hurtel loop ywna 0-s ehelsen.
    const num = sum1[i]; // shineer "num" ugch loopnees gargaj awsan toog undsen functionii ugugdul deer nemsen "sum1"
    sum = sum + num; // sanasan toon deer deerh "num"-s buyu loop bolon ugugduliin hariug nemew
  }
  return sum; // sanasan toonii etssiin hariug function-s butsaaj bga
}
const sum = bodlogo1(number1); // "sum" ni uuruu bodlogo1 functionii deer ugugdsun "number1" gedgiig ilerhiilj bui
console.log(sum); // functionoos butsaagdsan etssiin number ni "sum" gedgiig ilerhiilsnii daraa hevlene.

// bodlogo2

const bodlogo2str = "struggle is real";
console.log(bodlogo2str.length);

function bodlogo2(sum2) {
  let sums = "";
  for (let i = sum2.length - 1; i >= 0; i--) {
    const useg = sum2[i];
    sums = sums + useg;
  }
  return sums;
}

sum2 = bodlogo2str;

const sums = bodlogo2(bodlogo2str);
console.log(sums);

// bodlogo3

const maxNumber = [1, 3, 5, 8, 15];
console.log(maxNumber);

function bodlogo3(sum3) {
  let sum3s = 0; // sanasan too
  for (let i = 0; i < sum3.length; i++) {
    // loopees medeej sum3 iin urd hurtel awna hichneen ch too bj bolno
    if (sum3[i] < sum3s) {
      // loopees orj irsen too ni sanasan toonoos baga bh uyd sanasan too buyu 0 heweer uldene
      sum3s = sum3s;
    } else {
      // loopees orj isen too ni esregeeree sanasan toonoos ih bh uyd sanasab too buyu 0 ni loopiin toogoor soligdono
      sum3s = sum3[i];
    }

    // hervee number ni sum3s ih bol sum3s-iig number-aar solih
  }
  return sum3s;
}
const sum3s = bodlogo3(maxNumber);
console.log("etssiin", sum3s);

// bodlogo4

const ug = "hello";
console.log("ehnii ug", ug);

function bodlogo4(sum4) {
  let sum4s = "";
  for (let i = 0; i < sum4.length; i++) {
    if (i === 0) {
      sum4s = sum4s + sum4[i].toUpperCase() + "ello";
    }
    return sum4s;
  }
}
const sum4s = bodlogo4(ug);
console.log("suuliin ug", sum4s);

// bodlogo5

const factorialNumber = 8;

function bodlogo5(factorial) {
  let urjver = 1;
  for (let i = 1; i <= factorial; i++) {
    urjver = urjver * i;
  }
  return urjver;
}
const urjver = bodlogo5(factorialNumber);
console.log(urjver);

//bodlogo6

const palindromeString = "madam";

function bodlogo6(palindrome) {
  let sanasanToo = "";
  for (let i = palindrome.length - 1; i >= 0; i--) {
    usegs = palindrome[i];
    sanasanToo += usegs;
    if (palindrome === sanasanToo) {
      console.log(true);
    } else console.log(false);
  }
  return sanasanToo;
}
const sanasanToo = bodlogo6(palindromeString);
console.log("is it palindrome", sanasanToo);

// let sums = "";
// for (let i = sum2.length - 1; i >= 0; i--) {
//   const useg = sum2[i];
//   sums = sums + useg;
// }
// return sums;
