'use strict';
const LinkedList = require('./linkedList');
const ll = new LinkedList();
ll.append(10);
ll.append(30);
ll.append(90);
ll.append(100);
ll.append(900);
console.log(ll.insertAfter(100,33));

 console.log(ll.insertBefore(10,11111));

console.log(ll.tostring());

