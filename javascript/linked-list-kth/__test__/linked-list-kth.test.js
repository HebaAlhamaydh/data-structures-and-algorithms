'use strict';

const LinkedList = require('../linked-list-kth');
describe("link list", () => {
    test(" create an empty linked list", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test(" Where k is greater than the length of the linked list", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.kthFromEnd(3)).toEqual('Exception');
    })
    test(" Where k and the length of the list are the same", () => {
        let list= new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        expect(list.kthFromEnd(2)).toBe('one');
    })
    // test(" Where k is not a positive integer", () => {
    //     let list = new LinkedList();
    //     list.append('one');
    //     list.append('two');
    //     list.append('three');
    //     expect(list.kthFromEnd(-1)).toBe("Exception");
    // })
    test(" Where the linked list is of a size 1", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.kthFromEnd(0)).toBe("one");
    })
    test(" “Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
        let list = new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        list.append('four');
        expect(list.kthFromEnd(2)).toBe("two");
    })


})









