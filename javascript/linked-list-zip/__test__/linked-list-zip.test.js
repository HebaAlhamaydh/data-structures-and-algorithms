'use strict';

const LinkedList = require('../linked-list-zip');
describe("link list", () => {
    

  test('merge two linked lists ', () => {
    let list1 = new LinkedList();
    list1.append('one');
    list1.append('two');
    list1.append('three');
    let list2 = new LinkedList();
    list2.append('four');
    list2.append('five');
    list2.append('six');
    const l3 = new LinkedList();
    
    expect((l3.zipLists(list1,list2)).tostring()).toBe("{one}->{four}->{two}->{five}->{three}->{six}->NULL");
  });


  test(' merge two linked lists, list2 had one more node', () => {
    let list1 = new LinkedList();
    list1.append('one');
    list1.append('two');
    let list2 = new LinkedList();
    list2.append('four');
    list2.append('five');
    list2.append('six');
    const l3 = new LinkedList();
    expect((l3.zipLists(list1,list2)).tostring()).toBe("{one}->{four}->{two}->{five}->{six}->NULL");
  });
  test('merge two linked lists, list1 had one more node', () => {
    let list1 = new LinkedList();
    list1.append('one');
    list1.append('two');
    list1.append('three');
    let list2 = new LinkedList();
    list2.append('four');
    list2.append('five');
    const l3 = new LinkedList();
    expect((l3.zipLists(list1,list2)).tostring()).toBe("{one}->{four}->{two}->{five}->{three}->NULL");
  });
})