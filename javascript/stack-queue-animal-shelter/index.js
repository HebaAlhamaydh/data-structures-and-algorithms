'use strict';
const Queue = require('./lib/animalShelter');
const newQueue = new Queue();

newQueue.enqueue('cat');
newQueue.enqueue('cat');
newQueue.enqueue('dog');
newQueue.enqueue('dog');
newQueue.enqueue('cat');
newQueue.enqueue('dog');
newQueue.enqueue('fish');


console.log( newQueue.dequeue('dog'));//dog

console.log(newQueue.dequeue('cat'));//cat

console.log( newQueue.dequeue('dog'));//dog

console.log(newQueue.dequeue('cat'));//cat

console.log(newQueue.enqueue('fish'));

console.log(newQueue.dequeue('fish'));