'use strict';

function sumOdd(tree) {
    if (tree.root == null)
       return "Empty tree!";
       let queue = [];
       let sum=0;
    let currentNode = tree.root;
    queue.push(currentNode);
    while (queue.length) {
       currentNode = queue.shift();
       if (currentNode.value % 2 != 0 )
        {sum=sum+currentNode.value;}
       if (currentNode.left) queue.push(currentNode.left);
       if (currentNode.right) queue.push(currentNode.right);
 
    }
    return sum;
 }


 module.exports = sumOdd; 