'use strict';

const Queue = require('../queue/lib/PseudoQueue');

describe("Queue", () => {
    test(" Can successfully enqueue into a queue", () => {
        let queue = new Queue();
        queue.enqueue('one');
        expect(queue.inputStack.top.value).toEqual('one');
    })
    test("Can successfully enquee multiple values onto a queue", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        expect(queue.inputStack.top.value).toEqual('three');
    })
    test("Can successfully dequeue out of a queue the expected value", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        expect(queue.dequeue()).toEqual('one');
    })
    test("Can successfully peek into a queue, seeing the expected value", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        expect(queue.peek()).toEqual('one');
    })
    test("Can successfully empty a queue after multiple dequeues", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.length).toEqual(0);
       
    })
    test("Can successfully instantiate an empty queue", () => {
        let queue = new Queue();
        expect(queue.inputStack.top).toBeNull();
       
    })

it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(queue.peek()).toBe("Exception");
    expect(queue.dequeue()).toBe("Exception");
  
 })

})



