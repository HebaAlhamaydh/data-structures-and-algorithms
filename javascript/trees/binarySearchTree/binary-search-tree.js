"use strict";
const BinaryTree = require('../binaryTree/binary-tree');
const Node = require('../node');
class BinarySearchTree extends BinaryTree {

    // add(value){
    //   var newNode = new Node(value);
    //   // root is null then node wil be added and made it root

    //     if(this.root === null)
    //        {
    //         return this.root = newNode;
    //     } 

    //     let current = this.root;
    //     const nLoop = true;
    //     while (nLoop) {
    //       if (value === current.value) return undefined;
    //       if (value < current.value) {
    //         if (!current.left) {
    //           current.left = newNode;
    //           return this;
    //         }
    //         current = current.left;
    //       } else {
    //         if (!current.right) {
    //           current.right = newNode;
    //           return this;
    //         }
    //         current = current.right;
    //       }
    //     }
    //   }

    add(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
           let  current = this.root;
            while (current) {
                if (value === current.value) return undefined;
                // if the new value is less than this currentvalue, go left
                if (value < current.value) {

                    // if there is no left, then the new node belongs there
                    if (current.left === null) {
                        current.left = newNode;
                        
                    } else {
                        current = current.left;
                    }

                    // if the new value is greater than this current value, go right
                } else if (value > current.value) {

                    // if there is no right, then the new node belongs there
                    if (current.right === null) {
                        current.right = newNode;
                       
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

contains(value){
    let found = false;
    let current = this.root;

        //  there is a node to search
        while (current) {
           
            // if the value is less than the current value go left
            if (value <current.value) {
                current = current.left;

            // if the value is greater than the current value go right
            } else if (value> current.value) {
                current = current.right;

            // value ​​is equal, found it
            } else {
                found = true;
            }
        }
        return found;
    }
}



module.exports = BinarySearchTree;