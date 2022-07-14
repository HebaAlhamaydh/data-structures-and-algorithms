'use strict';
const fizzBuzz=require('../fizzBuzz')
const BinaryTree=require('../../binaryTree/binary-tree')
const Node = require('../../node');

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
    });
    test('implement fizzBuzz', () => {
        expect(fizzBuzz(tree)).toEqual([
            '1',        '2',
            'Fizz',     'Fizz',
            '4',        'Buzz',
            '7',        '8',
            'FizzBuzz'
          ]);
    });
    test('return EmptyTree on an empty tree', () => {
        const newTree = new BinaryTree();
        expect(fizzBuzz(newTree)).toEqual("Empty tree!");
    });
    
    test('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”.',()=>{
        
        let one = new Node(15);
        let tree = new BinaryTree(one);
        
        expect(fizzBuzz(tree)).toEqual(['FizzBuzz']);
    })
    test("If the value is divisible by 3, replace the value with “Fizz”.", () => {
        let one = new Node(3);
        let tree = new BinaryTree(one);
        expect(fizzBuzz(tree)).toEqual(['Fizz']);
      });
      test("If the value is divisible by 5, replace the value with “Buzz”.", () => {
        let one = new Node(5);
        let tree = new BinaryTree(one);
        expect(fizzBuzz(tree)).toEqual(['Buzz']);
      });
    test('If the value is not divisible by 3 or 5, simply turn the number into a String',()=>{
        expect(tree.root.value).toEqual('1');
    })
    
})