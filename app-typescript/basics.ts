console.log("We write code here in this file...");
console.log("lite-server works great... when installed");

// Core Types and Syntax
function addNum(n1: number, n2: number, showInfo: boolean, info: string) {
    if(showInfo){
        console.log(info);
    }
    return n1 + n2;
}

function add2(n1, n2) {
    // Javascript specific
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Invalid Input!');        
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 4.5;
const number3 = '6';

const s = addNum(number1, number2, true, 'Sum of two numbers!');
let t: number;
try{
    t = add2(number2, number3);
}
catch(e){
    console.log(e);
}
const u = add2(number1, number2);
console.log(s);
console.log(t); // called js typeof
console.log(u); // called js typeof