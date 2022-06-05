'use strict';
const LinkedList = require('./linkedList');
const ll = new LinkedList();
ll.insert(10);
ll.insert(30);
ll.insert(90);
ll.insert(100);
ll.insert(900);


console.log(ll);

//included
console.log(ll.includes(900));
console.log(ll.includes(100));


//not included
console.log(ll.includes(500));
console.log(ll.includes(50));


// string representing all the values in the Linked List "{ a } -> { b } -> { c } -> NULL"
console.log(ll.tostring());