
'use strict';
const LinkedList = require('./removeNode');

const l1 = new LinkedList();



l1.append(3);
l1.append(1);
l1.append(9);
l1.append(5);
l1.append(4);

console.log(l1.tostring());

console.log((l1.removeNode(l1,2)).tostring());




