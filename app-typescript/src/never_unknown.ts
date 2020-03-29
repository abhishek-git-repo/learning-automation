let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Satish';

if(typeof userInput === 'string'){
    console.log('Assigning String');
    userName = userInput; // Here with additional check we can assign a unknown type to string or any other variable which is not in case of any type
}

function throwerror(message:string, code:number):never{ // never is a type which indicates it won't return anything ever, like here this function crashes and quits execution
    throw{message:message, code:code};
}

throwerror('This is never type error function', 500);