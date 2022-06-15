'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

    }
    ////return the node of the index from the tail of the linked list.
    kthFromEnd(index) {
        let length = 0;
        let currentNode = this.head;
        // count the number of nodes in Linked List
        while (currentNode != null) {
            currentNode = currentNode.next;
            length++;
        }
        // if value of index is more than length of the linked list
        if (length < index) {
            return 'Exception';
        }
        if (index < 0) {
            return 'Exception';
          }
        currentNode = this.head;
        for (let i = 1; i < length - index; i++)
            {currentNode = currentNode.next;}
        return currentNode.value;
    }


    // printNthFromLast(n) {
    //     var main_ptr = this.head;
    //     var ref_ptr = this.head;

    //     var count = 0;
    //     if (this.head != null) {
    //         while (count < n) {
    //             if (ref_ptr == null) {
    //                 // document.write(n + " is greater than the no " +
    //                 // " of nodes in the list");
    //                 return;
    //             }
    //             ref_ptr = ref_ptr.next;
    //             count++;
    //         }

    //         if (ref_ptr == null) {

    //             if (this.head != null)
    //                 document.write("Node no. " + n + " from last is " + head.data);
    //         } else {

    //             while (ref_ptr != null) {
    //                 main_ptr = main_ptr.next;
    //                 ref_ptr = ref_ptr.next;
    //             }
    //             // document.write("Node no. " + n + " from last is " + main_ptr.data);
    //         }
    //     }
    // }
    ////return the node of the index from the head of the linked list
    kthFromHead(k) {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (counter === k) {
                return currentNode.value;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return -1;

    }

    //// Returns count of nodes in linked list
    getCount() {
        var currentNode = this.head;
        var count = 0;
        while (currentNode != null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
    ////return the index of the node
    indexOf(value) {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (value === currentNode.value) {
                return counter;
            }
            counter++;
            currentNode = currentNode.next;
        }

        return -1
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