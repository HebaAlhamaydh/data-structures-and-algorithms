'use strict';
const Node = require('./Node');
const Stack=require('../../stack/lib/Stack')
class PseudoQueue {
    constructor() {
        this.inputStack = new Stack();
        this.outPutStack =  new Stack();
        this.length=0;
    }
    isEmpty() {
      this.inputStack.isEmpty();
    }

    enqueue(value) {
        this.inputStack.push(value);
        this.length++;
    }
    // Delete from Front
    dequeue() {
        if (this.outPutStack.isEmpty()){ 
            while(!this.inputStack.isEmpty()){
                this.outPutStack.push(this.inputStack.pop()); 
            }
        }
        this.length--;
         return this.outPutStack.pop();
           
    }
    peek() {
        if (this.isEmpty()) {
      return 'Exception';
    }
    if (this.outPutStack.isEmpty()) {
      while (!this.inputStack.isEmpty())
        this.outPutStack.push(this.inputStack.pop());
    }
    return this.outPutStack.peek();
    }
}
module.exports = PseudoQueue;