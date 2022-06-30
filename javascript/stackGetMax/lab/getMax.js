'use strict';
const Stack=require('../lab/Stack');
 
    let mainStack = new Stack();
    let maxStack = new Stack();
    function push(value)
    {
        mainStack.push(value);
        if (mainStack.length == 1)
        {
            maxStack.push(value);
            return;
        }
   
        // If current element is greater than the top element of max stack,
        // push the current element to max stackotherwise push the element at top of  max stack again into it
        if (value > maxStack.peek())
        maxStack.push(value);
        else
        maxStack.push(maxStack.peek());
    }
    function getMax()
    {
        return maxStack.peek();
    }
   
    // function pop()
    // {
    //     mainStack.pop();
    //     maxStack.pop();
    // }
   
module.exports = {getMax,push};