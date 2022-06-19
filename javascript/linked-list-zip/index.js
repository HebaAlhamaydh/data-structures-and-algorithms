
'use strict';
const LinkedList = require('./linked-list-zip');
const l1 = new LinkedList();
const l2 = new LinkedList();
const l3 = new LinkedList();

l1.append(30);
l1.append(100);
l1.append(900);

l2.append(9000);
l2.append(5000);
l2.append(7000);

console.log(l1.tostring());
console.log(l2.tostring());

console.log((l2.zipLists(l1,l2)).tostring());

let list1 = new LinkedList();
list1.append('one');
list1.append('two');
list1.append('three');
let list2 = new LinkedList();
list2.append('four');
list2.append('five');
list2.append('six');


console.log((l3.zipLists(list1,list2)).tostring());