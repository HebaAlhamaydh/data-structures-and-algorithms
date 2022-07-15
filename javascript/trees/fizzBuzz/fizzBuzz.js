'use strict';
class Node {
   constructor(value) {
     this.value = value;
     this.children = [];
   }
 } 
 class KaryTree {
   constructor(root=null) {
     this.root = root;
   
   }
 }

function fizzBuzz(tree) {
   if (tree.root == null)
      return "Empty tree!";
      let temp = [];
      let visited = [];
   let currentNode = tree.root;
   temp.push(currentNode);
   while (temp.length > 0) {
      currentNode = temp.shift();
      if (currentNode.value % 5 === 0 && currentNode.value % 3 == 0) {
         currentNode.value = 'FizzBuzz';
          visited.push(currentNode.value);
      }

      else if (currentNode.value % 3 == 0) {
         currentNode.value = 'Fizz';
          visited.push(currentNode.value);

      }

      else if (currentNode.value % 5 == 0) {
         currentNode.value = 'Buzz';
          visited.push(currentNode.value);
      }

      else {
         currentNode.value = currentNode.value.toString();
       visited.push(currentNode.value);
      }
         for(let child of currentNode.children){
            temp.push(child); 
        } 
   };
  
    return tree.root;
   // return visited;
}


module.exports = {
   Node,
   KaryTree,
   fizzBuzz,
 };