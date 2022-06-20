const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
          }

///way1///
linkedReverse(list) {
    let next=null;
    let prev=null;
    if(!this.head.next){
        return list;
    }
    let current =this.head;
    while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    list.head=prev;
    return list;
} 
///way2///
linkedReverse2(list){
let current=list.head;
let newList=new LinkedList();
while(current){
newList.insert(current.value);
current=current.next;
}
return newList;
}      

 ///Add a node at the front
 insert(value) {
    const newNode = new Node(value);
    // if(this.head === null)
    //if it is empty
    if (!this.head) {
        this.head = newNode;
        return this;
    }
    else {
        // Make next of new Node as head 
        newNode.next = this.head;
        // Move the head to point to new Node 
        this.head = newNode;
        return this;
    }
}
tostring() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
        str += `{${currentNode.value}}->`;
        // if (!currentNode.next) {
        //     str += "Null";
        // }
        currentNode = currentNode.next;
    }
    return str +"NULL";
}

}
module.exports = LinkedList;