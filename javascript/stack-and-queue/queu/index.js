'use strict';
const Queue = require('./lib/Queue');
const newQueue = new Queue();

newQueue.enqueue('H');
newQueue.enqueue('E');
newQueue.enqueue('B');
newQueue.enqueue('A');

console.log('front is ', newQueue.peek());//H

newQueue.dequeue();
console.log('front is ', newQueue.peek());//E