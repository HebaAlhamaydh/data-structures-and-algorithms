
'use strict';
const LinkedList = require('./addTowNumbers');
const l1 = new LinkedList();
const l2 = new LinkedList();
const l3 = new LinkedList();


l1.append(3);
l1.append(1);
l1.append(9);

l2.append(9);
l2.append(5);
l2.append(7);
console.log(l1.tostring());
console.log(l2.tostring());

console.log((l3.addTowNubers(l1,l2)).tostring());




