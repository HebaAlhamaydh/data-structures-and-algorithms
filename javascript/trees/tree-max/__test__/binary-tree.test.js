'use strict';
const BinaryTree = require('../binary-tree');
const Node = require('../node');

let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });
    test('return the maximum value in a tree', () => {
        expect(tree.findMax()).toEqual(9);
    });
    test('return EmptyTree on an empty tree', () => {
        const newTree = new BinaryTree();
        expect(newTree.findMax()).toEqual("Empty tree!");
    });
    
})