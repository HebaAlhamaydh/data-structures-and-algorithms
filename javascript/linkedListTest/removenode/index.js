
'use strict';
//const LinkedList = require('./removeNode');
const LinkedList = require('../linkedlist');

const l1 = new LinkedList();



l1.append(3);
l1.append(2);
l1.append(9);
l1.append(5);
l1.append(4);

console.log(l1.tostring());
console.log((l1.removeNode(3)).tostring());
// console.log((l1.removeNode(l1,2)).tostring());
// console.log(l1.sum(l1));
// console.log(l1.maxNode(l1));
// console.log(l1.sumEven(l1));
// console.log(l1.tostring());
// console.log((l1.reverse(l1)).tostring());



