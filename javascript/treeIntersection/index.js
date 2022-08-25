const BinaryTree = require("./tree");
const Node = require("./Node");
const Hashmap = require("./hashtable");
const treeIntersection = require("./treeIntersection");
let one = new Node(30);
let two = new Node(21);
let three = new Node(40);
let four = new Node(49);
let five = new Node(51);


one.left = two;
one.right = three;
two.left = four;
two.right = five;
let tree1 = new BinaryTree(one);
let tree2 = new BinaryTree(one);

treeIntersection(tree1, tree2);