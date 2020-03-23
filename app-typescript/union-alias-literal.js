function combine(input1, input2, resultConversion // or resultConversion: 'as-number' | 'as-text'
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        result = +result;
    }
    else {
        result = result.toString();
    }
    return result;
}
;
var sumOfAge = combine(15, 83, 'as-number');
console.log(sumOfAge);
var combileNum = combine('15', '83', 'as-number');
console.log(combileNum);
var concatinatedMessage = combine('He is Rahul.', 'He is in 5th Std.', 'as-text');
console.log(concatinatedMessage);
