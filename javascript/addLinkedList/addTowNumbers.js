'use strict';
const Node = require('./node');

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

carry=Math.floor(sum/10);
sum=sum%10;
newList.append(sum);
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