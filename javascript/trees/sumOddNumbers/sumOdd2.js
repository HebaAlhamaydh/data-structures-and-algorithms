
class BinaryTree2 {
    constructor(root = null) {
        this.root = root;
    }
 sumOdd2(){
    let sum =0;
    let traverse = (node) => {
        if(node.value %2 !=0){
            sum=sum+node.value;
        }
        if (node.left) traverse(node.left);
        
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return sum;

}
}
module.exports = BinaryTree2;