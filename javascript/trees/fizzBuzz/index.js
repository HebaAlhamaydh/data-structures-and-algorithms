
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

// let fbTree = fizzBuzz(tree);
// let node2 = three.children[0];
// let node3 = three.children[1];
// let node4 = three.children[2];
// let node5 = three.children[3];

// let node6 = node2.children[0];
// let node7 = node2.children[1];


// console.log(tree)
// console.log(fizzBuzz(tree))
// console.log('fbTree.root.value:', tree.root.value);
// console.log('node2.value:', node2.value);
// console.log('node3.value:', node3.value);
// console.log('node4.value:', node4.value);
// console.log('node5.value:', node5.value);
// console.log('node6.value:', node6.value);
// console.log('node7.value:', node7.value);

///////////////////////////////////
// let tree=null,result=null;
// let fifteen = new Node(15);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);

//         fifteen.children=[two,three,four,five]; 
//         two.parent=fifteen;       
//         three.parent=fifteen;       
//         four.parent=fifteen;       
//         five.parent=fifteen;       
//         tree = new KaryTree(fifteen);
        
//         console.log(tree.root)
//         console.log(fizzBuzz(tree))

/////////////////////////


