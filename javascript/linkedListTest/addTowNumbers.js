'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

addTowNubers(l1,l2){
let newList=new LinkedList();
let current1=l1.head;
let current2=l2.head;
let sum=0;
let carry=0;
while(current1!=null || current2!=null || sum >0){

   
   if(current1!=null ){
    sum+=current1.value;
    current1=current1.next;
}
 if(current2!=null){
    sum+=current2.value;
    current2=current2.next;
}
//If sum = 13, then we know the carry should be 1. To get the carry, we can divide the sum by 10.
// Since we don't want a remainder, we can use Math.floor(). Math.floor(13/10) is 1,
carry=Math.floor(sum/10);
//For the sum.13 % 10 gives us 3, because the remainder of 13/10 is 3.
sum=sum%10;
newList.append(sum);
//if sum > 0, if there's a number that's being carried over, then a new node will be made.
sum = carry;
carry = 0;

}
return newList;


}
 /// Add a node at the end
 append(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        return this;
    }
    else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
    }

}
    tostring() {
        let currentNode = this.head;
        let str = "";
        while (currentNode) {
            str += `{${currentNode.value}}->`;
            // if (!currentNode.next) {
            //     str += "Null";
            // }
            currentNode = currentNode.next;
        }
        return str + "NULL";
    }


}
module.exports = LinkedList;
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