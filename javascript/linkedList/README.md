## Singly Linked List
 One reference and there is refer to next node. start at the head node and navigate from the root until last node that pointing to empty null value

- **node** : object containing data and pointer.
- **pointer** : reference to another node.
- **Head** :the first node in the likedlist.

## Challenge
- I Created a **Class Node** that has two properties the value and a pointer to the next Node.
- I created **Class LinkedList** include a head property.

   includes  a following steps:
  - created  linked-list
  - insert into the beginning of the linked list
  - Return true when finding a value within the linked list otherwise return false by using ***while*** loop.
  - Returns a string representing all the values in the Linked List, 

## Approach & Efficiency

- **Insert** node from beginning 
  - The Big O of **time O(1)** and **space O(1)**.
- for **searching** an element in a linked list is 
   - The Big O of **time O(n)** and **space O(1)**
- to string methods **Print** a LinkedList
   - The Big O of **time O(n)** and **space O(1)**

## API
in this challenge I did as the follwing steps:
- ***insert method*** to add new node with that value to the head.
- ***includes method*** Return true when finding a value within the linked list otherwise return false.
- ***to string methods*** Returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"