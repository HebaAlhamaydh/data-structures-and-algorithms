'use strict';

const Stack = require("./lib/Stack");

const newStack=new Stack();
newStack.push('H');
newStack.push('E');
newStack.push('B');
newStack.push('A');
console.log(newStack.peek());//A
newStack.pop();
console.log(newStack.peek());//B
