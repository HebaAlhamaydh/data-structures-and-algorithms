'use strict';
// const Node = require('./Node');
const Stack=require('../lab/Stack');


 function validateBrackets(string)
 {
    const stack=new Stack();
    for(let i = 0; i < string.length; i++)
    {
        let x = string[i];
  
        if (x == '(' || x == '[' || x == '{')
        { 
            stack.push(x);
        }
        if (stack.length == 0)
        return false;
    
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    // Check Empty Stack
    return stack.isEmpty();
}


module.exports = validateBrackets;

