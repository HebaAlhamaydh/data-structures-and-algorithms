'use strict';
const validateBrackets = require('./lab/stack-queue-brackets');


console.log(validateBrackets("([{}])"));//true
console.log(validateBrackets("()[[Extra Characters]]"));//true
console.log(validateBrackets("[({}]"));//false
console.log(validateBrackets("(]("));//false
console.log(validateBrackets("{}{Code}[Fellows](())"));//true