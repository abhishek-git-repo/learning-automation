// function with return type
function addNumber(n1: number, n2:number):number{
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result:' + num);
}

printResult(addNumber(5,24));

// Ref to function => pointer to function
let combineValue = addNumber;
console.log(combineValue(4,8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}
addAndHandle(105, 10, (result) => {
    console.log(result);
});