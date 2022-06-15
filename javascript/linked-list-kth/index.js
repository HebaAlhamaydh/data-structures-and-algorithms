'use strict';
const LinkedList = require('./linked-list-kth');
const ll = new LinkedList();

ll.append(30);
ll.append(100);
ll.append(900);
ll.append(9000);
ll.append(5000);
ll.append(7000);


console.log(ll.tostring());
console.log(ll.kthFromEnd(0));
// console.log(ll.indexOf(900));
console.log(ll. kthFromEnd(7));
console.log(ll.kthFromEnd(1));
console.log(ll.kthFromEnd(5));
console.log(ll.kthFromEnd(-1));