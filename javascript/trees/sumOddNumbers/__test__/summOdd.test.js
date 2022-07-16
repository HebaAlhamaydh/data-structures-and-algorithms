const BinaryTree = require('../../binaryTree/binary-tree');
const Node = require('../../node');

const sumOdd=require('../sumOdd');
const BinaryTree2=require('../sumOdd2')


let treeOdd = null;
let treeOdd2 = null;

describe("Summ Odd number In Binary Tree", () => {
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

        treeOdd = new BinaryTree(one);
        treeOdd2 = new BinaryTree2(one);
    });

    test('the sum  odd numbers should be equal to 25 using sumOdd', () => {
        
        expect(sumOdd(treeOdd)).toEqual(25);
      })
      test('the sum odd numbers should be equal to 25  using sumOdd2', () => {
        
        expect(treeOdd2.sumOdd2()).toEqual(25);
      })
})