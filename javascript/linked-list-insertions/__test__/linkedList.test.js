
'use strict';

const LinkedList = require('../linkedList');
describe("link list", () => {
    test(" create an empty linked list", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    test("Can successfully add a node to the end of the linked list", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.head.value).toEqual('one');
        list.append('two');
        expect(list.head.value).toEqual('one');
    })
    test('Can successfully add multiple nodes to the end of a linked list', () => {
        let list= new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        expect(list.tostring()).toBe("{one}->{two}->{three}->NULL");
      });
      test('Can successfully insert a node before a node located in the middle of a linked list', () => {
        let list = new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        list.insertBefore('two', 'beformid');
        expect(list.tostring()).toBe("{one}->{beformid}->{two}->{three}->NULL");
      });
      test('Can successfully insert a node before the first node of a linked list', () => {
        let list = new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        list.insertBefore('one', 'zero');
        expect(list.tostring()).toBe("{zero}->{one}->{two}->{three}->NULL");
      });
      test('Can successfully insert after a node in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        list.insertAfter('two', 'aftermid');
        expect(list.tostring()).toBe("{one}->{two}->{aftermid}->{three}->NULL");
      });
      test('Can successfully insert a node after the last node of the linked list', () => {
        let list = new LinkedList();
        list.append('one');
        list.append('two');
        list.append('three');
        list.insertAfter('three', 'four');
        expect(list.tostring()).toBe("{one}->{two}->{three}->{four}->NULL");
      });



})