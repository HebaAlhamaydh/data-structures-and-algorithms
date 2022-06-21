'use strict';

const Stack = require('../lib/Stack');
describe("Stack", () => {
    test(" Can successfully push onto a stack", () => {
        let stack = new Stack();
        stack.push('one');
        expect(stack.top.value).toEqual('one');
        stack.push('two');
        expect(stack.top.value).toEqual('two');
    })
    test("Can successfully push multiple values onto a stack", () => {
        let stack = new Stack();
        stack.push('one');
        expect(stack.top.value).toEqual('one');
        stack.push('two');
        stack.push('three');
        expect(stack.top.value).toEqual('three');
    })
    test("Can successfully pop off the stack", () => {
        let stack = new Stack();
        stack.push('one');
        stack.push('two');
        stack.push('three');
        stack.pop();
        expect(stack.top.value).toEqual('two');
    })
    test("Can successfully empty a stack after multiple pops", () => {
        let stack = new Stack();
        stack.push('one');
        stack.push('two');
        stack.push('three');
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.length).toEqual(0);
    })
    test("Can successfully peek the next item on the stack", () => {
        let stack = new Stack();
        stack.push('one');
        stack.push('two');
        stack.push('three');
        stack.pop();
        stack.peek();
        expect(stack.top.value).toEqual('two');
    })
     test("Can successfully instantiate an empty stack", () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();
    })

    test(" Calling pop or peek on empty stack raises exception", () => {
        let stack = new Stack();
       expect(stack.peek()).toBe("Exception");
       expect(stack.pop()).toBe("Exception");;
    })
   
    
})
