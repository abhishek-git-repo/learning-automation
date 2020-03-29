"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Satish';
if (typeof userInput === 'string') {
    console.log('Assigning String');
    userName = userInput;
}
function throwerror(message, code) {
    throw { message: message, code: code };
}
throwerror('This is never type error function', 500);
