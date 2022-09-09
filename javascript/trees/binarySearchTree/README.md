##  Binary Tree and BST Implementation
## Challenge
- **Node**

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- **Binary Tree**
  - Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    1. pre order
    2.  in order
    3.  post order which returns an array of the values, ordered appropriately.
- **Binary Search Tree**
  - Create a Binary Search Tree class
  - This class should be a sub-class  of the Binary Tree Class, with the following **methods:**
    1. **Add**
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
    2. **Contains**
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.
## Approach & Efficiency
Big O for preOrder is O(n)

Big O for inOrder is O(n)

Big O for postOrder is O(n)

For add(value) and contains(value) functions, we needed O(log(n)) as a time complexity because inserting and searching in a Binary Search Tree depends on the tree's height which equals to log(n).
The Big O space complexity of a BST search would be O(1). During a search, we are not allocating any additional space.
## Whiteboard Process
![](./stackGetMax.jpg)
## Test
### Binary Tree Test
![Binary Tree](../binaryTree/BTTest.png)
### Binary Search Tree Test
![Binary Search Tree](./BSTTest.png)
