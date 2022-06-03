'use strict';

const LinkedList = require('../linkedList');

describe("link list", () => {
    test(" create an empty linked list", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test("insert in to linklist", () => {
        let list = new LinkedList();
        list.insert('one');
        expect(list.head.value).toEqual('one');
    })
    test("The head point to the first node in the linked list", () => {
        let list = new LinkedList();
        list.insert('one');
        list.insert('two');
        expect(list.head.value).toEqual('two');
    })
    test("insert multiple nodes into the linked list", () => {
        let list = new LinkedList();
        list.insert('one');
        expect(list.head.value).toEqual('one');
        list.insert('two');
        expect(list.head.value).toEqual('two');
        list.insert('three');
        expect(list.head.value).toEqual('three');
        
    })
    test("return true when finding a value within the linked list that exists ", () => {
        let list = new LinkedList();
        list.insert(90);
        list.insert(100);
        list.insert(900);
         expect(list.includes(100)).toBeTruthy();
    })
   
   test("return false when searching for a value in the linked list that does not exist", () => {
        let list = new LinkedList();
        list.insert('one');
        list.insert('two');
         expect(list.includes(100)).toEqual(false);
    })
    
    test("return a collection of all the values that exist in the linked list", () => {
        let list = new LinkedList();
        list.insert('one');
        list.insert('two');
        list.insert('three');
         expect(list.tostring()).toEqual("{three}->{two}->{one}->NULL");
    })

})