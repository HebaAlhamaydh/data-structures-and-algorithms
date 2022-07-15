
'use strict';
const { Node, KaryTree, fizzBuzz } = require('./fizzBuzz');


let tree = null
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let fifteen = new Node(15);
let five = new Node (5)
let nine=new Node (9);
let six= new Node(6);
let thirty= new Node(30);

one.children=[two,three,fifteen,five];
two.children=[nine,six,thirty];

tree = new KaryTree(one);
 console.log(tree.root.children[0])
 console.log(fizzBuzz(tree))


