'use strict';
const LinkedList = require('./linked-list-Reverse');
const ll = new LinkedList();
const l2=new LinkedList();
ll.insert(10);
ll.insert(30);
ll.insert(90);
ll.insert(100);
ll.insert(900);

//befor1 {900}->{100}->{90}->{30}->{10}->NULL
console.log("befor1",ll.tostring());
//after1 {10}->{30}->{90}->{100}->{900}->NULL
console.log("after1",ll.linkedReverse(ll).tostring());
/////////
console.log("*****Second Way*****");
//befor2 {10}->{30}->{90}->{100}->{900}->NULL
console.log("befor2",ll.tostring());
//after2 {900}->{100}->{90}->{30}->{10}->NULL
console.log("after2",ll.linkedReverse2(ll).tostring());


