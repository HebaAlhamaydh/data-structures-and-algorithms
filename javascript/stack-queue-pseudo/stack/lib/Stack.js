'use strict';
const Node = require('./Node');
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }
        // return this.top === null;
    }
    //Add from top
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.length += 1;
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
        }
    }
    //remove from top
    pop() {
        if (this.isEmpty()) {
            console.log('No Nodes are left in the stack');
            return 'Exception';
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length -= 1;
        return temp.value;
    }
    //look the top of stack
    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            return this.top.value;
        }
    }
}

module.exports = Stack;