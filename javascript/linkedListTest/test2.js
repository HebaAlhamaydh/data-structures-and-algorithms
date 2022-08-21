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

    //remove head
    removeHead() {
        this.head = this.head.next;
        return this;
    }

    //remove value
    removeNode(value) {
        let current = this.head;
        let prev = this.head;
        if (this.head.value == value) {
            this.head = this.head.next;
            return this;
        }

        while (current) {

            if (current.value !== value) {
                prev = current;
                current = current.next;
            }
            else if (current.value == value) {
                current = current.next;
                prev.next = current;
                return this;
            }

        }
    }
    //remove node by given index
removeNodeInd(index) {
    let current = this.head;
    let prev = this.head;
    let counter = 0;
    if (counter == index) {
        this.head = this.head.next;
        return this;
    }

    while (current) {
        if (counter !== index) {
            prev = current;
            current = current.next;
            counter++
        }

        if (counter == index) {
            //  prev=current.next.next;
            //  current.next=prev
            current = current.next;
            prev.next = current
            return this;
        }

    }
}
    
    //remove  all occurrences value
    removeNodeoccurrences(value) {
       
        let current =this.head;
        let prev=this.head;
        if(this.head.value==value){
            this.head=this.head.next;
        }
        while(current){
        
             if(current.value!==value) {
                prev = current;
                current = current.next;
            }
            else if(current.value == value){

                current = current.next;
                prev.next = current
            }
        }
        return this

    }
    //remove one of duplicate 
    removeDuplicate() {

        let current = this.head;
        //iterator until we are at the end of the list
        while (current.next != null ) {
            if (current.next == null) {
                break;
            }
            if (current.value == current.next.value)
                current.next = current.next.next;
            else
                current = current.next;

        }
        return this;
    }
    //remove two duplicate
    removeDuplicate2() {

        let current = this.head;
        let prev=this.head;
        //iterator until we are at the end of the list
        while (current.next != null ) {
            if (current.next == null) {
                break;
            }
            if (current.value == current.next.value)
                prev.next = current.next.next;
            else
                 prev=current;
                current = current.next;
               

        }
        return this;
    }

    //group all odd nodes together followed by the even nodes.
    //the node number and not the value in the nodes.
     oddEvenList() {
        if (this.head != null) {
        
            let  odd = this.head;
            let even = this.head.next;
            let  evenHead = even; 
        
            while (even != null && even.next != null) {
                odd.next = odd.next.next; 
                even.next = even.next.next; 
                odd = odd.next;
                even = even.next;
            }
            odd.next = evenHead; 
        }
        return this;
    }
    /////mergepoint between two linked list/////
    mergeNode(l1, l2) {
        let current1 = l1.head;
        let current2 = l2.head;
        let array = [];
        while (current1 != null) {
            array.push(current1.value)
            current1 = current1.next;
        }
        while (current2 != null) {
            if (array.includes(current2.value)) { return current2.value }
            current2 = current2.next;
        }
    }
    //mergeNode
    // mergeNode2(l1, l2) {
    //     let length1 = 0;
    //     let length2 = 0;
    //     let current1 = l1.head;
    //     let current2 = l2.head;
    //     while (current1 !== null) {
    //         length1++;
    //         current1 = current1.next
    //     }
    //     while (current2 !== null) {
    //         length2++;
    //         current2 = current2.next
    //     }
    //     let different = 0;
    //     if (length1 > length2) {
    //         different = length1 - length2
    //     }
    //     else {
    //         different = length2 - length1
    //     }
    //     current1 = l1.head;
    //     current2 = l2.head;
    //     if (length1 > length2) {
    //         while (different > 0) {
    //             current1 = current1.next;
    //             different--;
    //         }
    //     }
    //     else {
    //         while (different > 0) {
    //             current2 = current2.next;
    //             different--;
    //         }
    //     }
    //     while (current1 !== null && current2 !== null) {
           
    //         if (current1.value == current2.value) {
    //             return current1.value
    //         }
    //         else{

    //             current1 = current1.next;
    //             current2 = current2.next;
    //         }
    //     }
    //     return 0
        
    // }

//return true if found the value 
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
///print the list as string
tostring() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
        str += `{${currentNode.value}}->`;
        currentNode = currentNode.next;
    }
    return str + "NULL";
}

}
module.exports = LinkedList;

const l1 = new LinkedList();
const l2 = new LinkedList();



l1.append(1);
l1.append(2);
l1.append(3);
l1.append(3);
l1.append(5);

l2.append(4);
l2.append(6);
l2.append(7);
l2.append(17);
l2.append(4);
l2.append(5);
l2.append(6);


console.log(l1.tostring());
//console.log(l2.tostring());
// console.log((l1.removeHead()).tostring());
// console.log((l1.removeNode(4)).tostring());
// console.log((l1.removeNodeInd(1)).tostring());
//console.log((l1.removeDuplicate()).tostring());
//console.log((l1.removeDuplicate2()).tostring());
console.log((l1.removeNodeoccurrences(5)).tostring());

//console.log(l1.mergeNode2(l1, l2));
// console.log((l1.oddEvenList()).tostring());

