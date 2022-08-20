'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
       
    }
    insert(value) {
        const newNode = new Node(value);
        // if(this.head === null)
        //if it is empty
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else {
            // Make next of new Node as head 
            //both pointers point at the same node.
            newNode.next = this.head;
            // Move the head to point to new Node 
            this.head = newNode;
            return this;
        }
    }
    includes(value) {
        let currentNode = this.head;
        while (currentNode.next != null) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
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
        return str +"NULL";
    }


}
module.exports = LinkedList;