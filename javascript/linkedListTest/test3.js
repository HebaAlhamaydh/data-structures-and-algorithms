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
        this.size=0;
    }
   
    /////middle node 
    middleNode() {
        let current = this.head;
        let middle = Math.floor(this.size/ 2);
        let counter = 0;
        current = this.head;
        while (current)
         {
            if (counter == middle) {
                return current.value;
            }
            current = current.next;
            counter++;
        }
    }
 ///delete middle
    deleteMiddle(){
    let mid = Math.floor(this.size / 2);
    let current = this.head;
    let count = 0;
    while (current) {
        if (mid === count) {
            current.data = current.next.data;
            current.next = current.next.next;
        }
        current = current.next;
        count++;
    }
}
    ////compare two linkedlist
    compare(list1, list2) {
        let current1 = list1.head;
        let current2 = list2.head;

        while (current1.next !== null && current2.next !== null) {
            if (current1.value == current2.value) {

                current1 = current1.next;
                current2 = current2.next;
            }
            else return false
        }
        if (current1.next == null && current2.next == null)
            return true;
        else return false;
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
        list.head = prev
        return list
    }
     /// Add a node at the end
 append(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.size++;
        return this;
    }
    else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++
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

const l1 = new LinkedList();
const l2 = new LinkedList();
// const l3 = new LinkedList();


l1.append(20);
l1.append(4);
l1.append(20);
l1.append(10);
l1.append(3);
l1.append(3);
l1.append(999);
l1.append(9999);


l2.append(3);
l2.append(11);
l2.append(9);
console.log(l1.tostring());
//console.log(l2.tostring());



// console.log(l1.sum(l1));
// console.log(l1.maxNode(l1));
// console.log(l1.sumEven(l1));
// console.log(l1.tostring());
// console.log((l1.reverse(l1)).tostring());
//console.log(l1.compare(l1,l2));
 console.log(l1.middleNode());
// console.log(l1.middleNode2());
// console.log(l1.middleNode3());
// console.log((l1.deleteMiddle()).tostring());
l1.deleteMiddle()
console.log(l1.tostring());

