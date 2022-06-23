'use strict';
const Queue = require('./lib/PseudoQueue');
const newQueue = new Queue();

newQueue.enqueue('H');
newQueue.enqueue('E');
newQueue.enqueue('B');
newQueue.enqueue('A');

console.log('front is ', newQueue.peek());//H

console.log(newQueue.dequeue());
console.log('front is ', newQueue.peek());//E
newQueue.isEmpty();