'use strict';
const BinaryTree = require('./binaryTree/binary-tree');
const BinarySearchTree = require('./binarySearchTree/binary-search-tree');
const sumOdd=require('../trees/sumOddNumbers/sumOdd')
const breadthFirst=require('../trees/breadth-first/breadth-first')
const Node = require('./node');
const binaryTree=require('./sumOddNumbers/sumOdd2')

let tree = null;


let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(15);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);
// tree2 = new binaryTree(one);

// const treeSearch = new BinarySearchTree();

// let preOrder = tree.preOrder();
// console.log('pre order: ', preOrder);
// //pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

// let inOrder = tree.inOrder();
// console.log('in order: ', inOrder);
// //in order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


// let postOrder = tree.postOrder();
// console.log('post order: ', postOrder);
// //postorder > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.add(1000); 
// binarySearchTree.add(6); 
// binarySearchTree.add(9000);
// binarySearchTree.add(20);
// binarySearchTree.add(7000);
// binarySearchTree.add(69);
// binarySearchTree.add(4);

// console.log(binarySearchTree.contains(7000));
// console.log(binarySearchTree.contains(3));
// console.log(binarySearchTree.contains(20));
// console.log(binarySearchTree.contains(9000));
// console.log(binarySearchTree.contains(200));
// console.log(breadthFirst(tree));
console.log(sumOdd(tree));
// console.log(tree2.sumOdd2());

