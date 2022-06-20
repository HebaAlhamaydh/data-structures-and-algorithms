'use strict';

const LinkedList = require('../linked-list-Reverse');
describe("link list", () => {
   
    test("list contain one node ", () => {
        let list = new LinkedList();
        list.insert('one');
        expect(list.linkedReverse2(list).tostring()).toEqual("{one}->NULL");
    })
    test("Reversed list contain more one node ", () => {
        let list = new LinkedList();
        list.insert('three');
        list.insert('two');
        list.insert('one');
        //befor {one}->{two}->{three}->NULL
        //after {three}->{two}->{one}->NULL
        expect(list.linkedReverse(list).tostring()).toEqual("{three}->{two}->{one}->NULL");
    })
    test("Firts node in new reversedlist is the last node in list ", () => {
        let list = new LinkedList();
        list.insert('three');
        list.insert('two');
        list.insert('one');
        //befor {one}->{two}->{three}->NULL
        list.linkedReverse(list);
        //after {three}->{two}->{one}->NULL
        expect(list.head.value).toEqual('three');
    })
})