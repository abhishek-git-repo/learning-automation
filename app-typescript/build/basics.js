"use strict";
console.log("We write code here in this file...");
console.log("lite-server works great... when installed");
function addNumAndShowInfo(n1, n2, showInfo, info) {
    if (showInfo) {
        console.log(info);
    }
    return n1 + n2;
}
function add2(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Invalid Input!');
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 4.5;
const number3 = '6';
const s = addNumAndShowInfo(number1, number2, true, 'Sum of two numbers!');
let t = 0;
try {
    t = add2(number2, number3);
}
catch (e) {
    console.log(e);
}
const u = add2(number1, number2);
console.log(s);
console.log(t);
console.log(u);
