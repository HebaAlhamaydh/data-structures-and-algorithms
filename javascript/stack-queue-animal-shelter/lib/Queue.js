'use strict';
const Node = require('../Node');
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.front === null || this.length === 0) {
            return true;
        } else {
            return false;
        }

        // return this.front ===null;
        // return this.length ===0;
    }
      // Add from End
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.length += 1;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length += 1;
        }
    }
    // Delete from Front
    dequeue() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            const temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length -= 1;
            return temp.value;
        }
    }
    peek() {
        // i do care only about the front
        if (this.isEmpty()) {
            return 'Exception';
        }
        return this.front.value;
    }
}
module.exports = Queue;