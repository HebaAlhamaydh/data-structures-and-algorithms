'use strict';
const BinaryTree = require('../binaryTree/binary-tree');

const sumOdd=require('./sumOdd')

const Node = require('../node');
const BinaryTree2=require('./sumOdd2')

let treeOdd = null;
let treeOdd2 = null;

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

treeOdd = new BinaryTree(one);
treeOdd2 = new BinaryTree2(one);


console.log(sumOdd(treeOdd));
console.log(treeOdd2.sumOdd2());

