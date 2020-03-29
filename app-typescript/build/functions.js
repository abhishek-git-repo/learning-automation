"use strict";
function addNumber(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
printResult(addNumber(5, 24));
let combineValue = addNumber;
console.log(combineValue(4, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(105, 10, (result) => {
    console.log(result);
});
