'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    //root - left - right 
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            // if left go left
            if (node.left) traverse(node.left);
            // if right go right
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right 
    inOrder() {
        let result = [];
        let traverse = (node) => {

            // if left go left
            if (node.left) traverse(node.left);
            result.push(node.value);
            // if right go right
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result;
    }

    //left - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {

            // if left go left
            if (node.left) traverse(node.left);
            // if right go right
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root)
        return result;
    }
    findMax(){
        if (this.root === null) {
            return "Empty tree!";
      }
        let max=this.root.value;
        let traverse = (node) => {
            // if (node.value > max) max = node.value;
            if (node.left !=null) {
            if (node.left.value > max) {
                max=node.left.value;
                traverse(node.left);
            }
            }
           if (node.right !=null) {
                if (node.right.value> max) 
            
                max=node.right.value;
                traverse(node.right);
            }
        }
        traverse(this.root);
        return max;

    }
}
module.exports = BinaryTree;