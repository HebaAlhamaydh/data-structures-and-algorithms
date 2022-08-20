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
    // removeNode(l,n){

    // let fast=l.head
    // let slow=l.head
    // for(let i=0;i<n;i++){
    //     fast=fast.next;
    // }

    // while (fast.next!==null) {
    //     fast = fast.next;
    //     slow = slow.next;
    // }

    //   // So, delete the node first is pointing to
    //   slow.next = slow.next.next;
    //   return l

    // }
    //remove head
    removeHead() {
        this.head = this.head.next;
        return this;
    }

    //remove value
    removeNode(value) {
       let current=this.head;
       let prev=this.head;
       if(this.head .value==value){
        this.head = this.head.next;
        return this;
       }
       
       while(current){
        
        if(current.value!==value)
        {
            prev=current;
            current=current.next;
        }
         else if(current.value==value){
            current=current.next;
            prev.next=current
            // prev=current.next.next;
            // current.next=prev
            return this;
        }
       
       }
    }
    //remove node by given index
    removeNodeInd(index) {
        let current=this.head;
        let prev=this.head;
        let counter=0;
        if(counter==index){
         this.head = this.head.next;
         return this;
        }
        
        while(current){
            
        if(counter!==index){
             prev=current;
             current=current.next;
             counter++
         }
          
          if(counter==index){
            //  prev=current.next.next;
            //  current.next=prev
             current=current.next;
             prev.next=current
             return this;
         }
         
        }
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



l1.append(3);
l1.append(2);
l1.append(9);
l1.append(5);
l1.append(4);

console.log(l1.tostring());
// console.log((l1.removeHead()).tostring());
// console.log((l1.removeNode(4)).tostring());
console.log((l1.removeNodeInd(1)).tostring());//delet
