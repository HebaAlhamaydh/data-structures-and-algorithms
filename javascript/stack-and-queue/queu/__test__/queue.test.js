'use strict';

const Queue = require('../lib/Queue');
describe("Queue", () => {
    test(" Can successfully enqueue into a queue", () => {
        let queue = new Queue();
        queue.enqueue('one');
        expect(queue.front.value).toEqual('one');
        queue.enqueue('two');
        expect(queue.front.value).toEqual('one');
    })
    test("Can successfully push multiple values onto a stack", () => {
        let queue = new Queue();
        queue.enqueue('one');
        expect(queue.front.value).toEqual('one');
        queue.enqueue('two');
        queue.enqueue('three');
        expect(queue.front.value).toEqual('one');
    })
    test("Can successfully dequeue out of a queue the expected value", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        queue.dequeue();
        expect(queue.front.value).toEqual('two');
    })
    test("Can successfully peek into a queue, seeing the expected value", () => {
        let queue = new Queue();
        queue.enqueue('one');
        queue.enqueue('two');
        queue.enqueue('three');
        queue.peek();
        expect(queue.front.value).toEqual('one');
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
        expect(queue.front).toBeNull();
       
    })

it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(queue.peek()).toBe("Exception");
    expect(queue.dequeue()).toBe("Exception");;
 })

})



