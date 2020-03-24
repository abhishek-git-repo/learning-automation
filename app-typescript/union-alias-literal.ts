// Union type, Literal, custom type
type combinable = number | string;
function combine(
    input1: number | string,
    input2: combinable,
    resultConversion: string // or resultConversion: 'as-number' | 'as-text'
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-number'){
        result = +result;
    }
    else{
        result = result.toString();
    }
    return result;
};

const sumOfAge = combine(15, 83, 'as-number');
console.log(sumOfAge);
const combileNum = combine('15', '83', 'as-number');
console.log(combileNum);
const concatinatedMessage = combine('He is Rahul.', 'He is in 5th Std.', 'as-text');
console.log(concatinatedMessage);