'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
 
   }
removeNode(l,n){
  
let fast=l.head
let slow=l.head
for(let i=0;i<n;i++){
    fast=fast.next;
}
    
while (fast.next!==null) {
    fast = fast.next;
    slow = slow.next;
}

  // So, delete the node first is pointing to
  slow.next = slow.next.next;
  return l
  
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