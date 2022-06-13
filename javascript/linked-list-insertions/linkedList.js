'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;

    }
    ///Add a node at the front
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
            newNode.next = this.head;
            // Move the head to point to new Node 
            this.head = newNode;
            return this;
        }
    }
    /// Add a node at the end
    append(value) {
        const newNode = new Node(value);
        // if(this.head === null)
        //if it is empty
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else {
           let currentNode=this.head;
           while(currentNode.next){
            currentNode=currentNode.next;
           }
            currentNode.next=newNode;
            return this;
        }
    }
    insertBefore(value, newValue) {
        let newNode = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        
        return this;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
           
        }
       
    
    insertAfter(value, newValue) {
        // 1. Check if the given Node is null 
        
        if (!this.head ) {
            return this;
        }
        let currentNode = this.head;
        var newNode = new Node(newValue);
        while (currentNode) {
            if (currentNode.value === value){
             // Make next of new Node as next of prev_node 
             newNode.next = currentNode.next;
            //  make next of prev_node as new_node 
            currentNode.next = newNode;
            } 
            currentNode=currentNode.next; 
        }
        return this;
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

