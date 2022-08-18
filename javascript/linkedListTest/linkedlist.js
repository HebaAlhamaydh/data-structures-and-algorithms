'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //////sum all node///
    sum(list) {
        let current = list.head;
        let sum = 0;
        while (current) {
            sum += current.value;
            current = current.next;
        }
        return sum;

    }
    ////sum even node//
    sumEven(list) {
        let current = list.head;
        let sum = 0;
        while (current) {
            if (current.value % 2 == 0) {
                sum += current.value
            }
            current = current.next;
        }
        return sum;
    }
    ///max////
    maxNode(list) {
        let current = list.head;
        let max = 0;
        while (current) {
            if (current.value > max) {
                max = current.value
            }
            current = current.next;
        }
        return max;
    }
    ///reverse linked list///
    reverse(list) {
        let current = list.head;
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;//store next node of current before change
            current.next = prev;//change next of current by reverse the link
            prev = current;//move prev node forward
            current = next;//move current node forward
        }
        list.head=prev
        return list
    }




    ///add to the end of the list//
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
    //print linked list///
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