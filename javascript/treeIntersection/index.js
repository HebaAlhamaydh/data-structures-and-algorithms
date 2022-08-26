const BinaryTree = require("./tree");
const Node = require("./Node");
const Hashmap = require("./hashtable");
const treeIntersection = require("./treeIntersection");
let tree1  = null;
let tree2  = null;
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

let one1 = new Node(1);
let twoe = new Node(2);
let threee = new Node(3);
let foure = new Node(4);
let fivee = new Node(10);
let sixe = new Node(60);
let sevene = new Node(70);
let eighte = new Node(80);
let ninee = new Node(90);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

one1.left = twoe;
one1.right = threee;
twoe.left = sixe;
sixe.right = sevene;
sevene.left = eighte;
sevene.right = ninee;
threee.left = foure;
threee.right = fivee;

tree1 = new BinaryTree(one);
tree2 = new BinaryTree(one1);

console.log(treeIntersection(tree1, tree2));