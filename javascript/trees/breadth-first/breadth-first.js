'use strict';

    function breadthFirst(tree) {
        if (tree.root == null)
        return "Empty tree!";
        let visited = [];
        let queue = [];
        let currentNode = tree.root;
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            visited.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            
        };
        return visited;
     }


module.exports = breadthFirst;