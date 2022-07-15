'use strict';
const { Node, KaryTree, fizzBuzz }=require('../fizzBuzz')



describe("Binary Tree", () => {
    beforeAll(() => {
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
    });
   
    test('return EmptyTree on an empty tree', () => {
        const newTree = new KaryTree();
        expect(fizzBuzz(newTree)).toEqual("Empty tree!");
    });
    
    test('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”.',()=>{
        
        let one = new Node(15);
        let tree = new KaryTree(one);
        expect(fizzBuzz(tree).value).toEqual('FizzBuzz');
    })
    test("If the value is divisible by 3, replace the value with “Fizz”.", () => {
        let one = new Node(3);
        let tree = new KaryTree(one);
        expect(fizzBuzz(tree).value).toEqual('Fizz');
      });
      test("If the value is divisible by 5, replace the value with “Buzz”.", () => {
        let one = new Node(5);
        let tree = new KaryTree(one);
        expect(fizzBuzz(tree).value).toEqual('Buzz');
      });
    test('If the value is not divisible by 3 or 5, simply turn the number into a String',()=>{
        let one = new Node(1);
        let tree = new KaryTree(one);
        expect(fizzBuzz(tree).value).toEqual('1');
    })
    
})