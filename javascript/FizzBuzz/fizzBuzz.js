'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    fizzBuzz(){
        let currentNode=this.root;
        let newArray=[];
        while(currentNode!=null){
         if(currentNode.value %3==0){
            currentNode.value='Fizz';
            newArray.push(currentNode);
         }
         if(currentNode.value %5==0)
         {
            currentNode.value='Buzz';
            newArray.push(currentNode);
         }
         if(currentNode.value %15==0)
         {
            currentNode.value='FizzBuzz';
            newArray.push(currentNode);
         }
         else{
            currentNode.value= currentNode.value.toString();
            newArray.push(currentNode);
         }
       
        }
        return newArray;
    }
    // fizzBuzz(){
    //     if (this.root === null) {
    //         return "Empty tree!";
    //   }
    //   let current=this.root.value;
    //   let traverse = (node) => {
          
        
    //   }
    //   traverse(this.root);
    //   return max;
    
    // }


}
module.exports = BinaryTree;