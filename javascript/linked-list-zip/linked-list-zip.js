const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
       
    }
  ////zip two linked list////
    zipLists(list1, list2){
        let zip = new LinkedList();
        let current1=list1.head;
         let current2=list2.head;
         while(current1!=null || current2!=null)
         {
          if(current1!=null){
           zip.append(current1.value);
           current1=current1.next;
          }  
          if(current2!=null){
            zip.append(current2.value);
            current2=current2.next;
          }
         }
         return zip;

    }

     /// Add a node at the end
     append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
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
        return str + "NULL";
    }
}
module.exports = LinkedList;


