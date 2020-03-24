// function with return type
function addNum(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
printResult(addNum(5, 24));
// Ref to function => pointer to function
var combineValue = addNum;
console.log(combineValue(4, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(105, 10, function (result) {
    console.log(result);
});
