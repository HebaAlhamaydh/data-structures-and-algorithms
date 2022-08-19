class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = newNode;
    }
    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values
    }


}
class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    makeHash(key) {
        //convert from string to array use split
        const asciicodeSum = key.split("").reduce((acc, curr) => {
            return acc + curr.charCodeAt(0);
        }, 0)

        const multiPrime = asciicodeSum * 599;
        const theIndex = multiPrime % this.size;
        //console.log(theIndex)
        return theIndex;
    }

    add(key, value) {
        //create hash of the key
        const hash = this.makeHash(key)
        if (!this.map[hash]) {

            this.map[hash] = new LinkedList();
        }
        //add to linked list
        this.map[hash].append({ [key]: value });
    }

    set(key, newValue) {
        
        const hash = this.makeHash(key)
        if (this.map[hash]) {
            let current = this.map[hash].head;
            while (current) {
                if (current.value[key]) {
                    current.value[key]=newValue
                 }
                 current=current.next
            }
        }
    }
    
    get(key) {
        const hash = this.makeHash(key);
        if (this.map[hash]) {
            let current = this.map[hash].head;
            while (current) {
                if (current.value[key]) {
                    return current.value[key]
                }
                current = current.next
            }
        }
        return null
    }

    contains(key) { 
        const hash=this.makeHash(key)
        if(this.map[hash])
        {
            let current=this.map[hash].head
            while(current){
               if(current.value[key]) 
               {
                   return true
               }  
               current=current.next
            }
        }
        return false
    }
    keys() {
        let keys=[];
        for(let i=0;i<=this.map.length;i++){
            if(this.map[i]){
                let current=this.map[i].head
                while(current){
                    for(let key in current.value){ 
                        if(!keys.includes(key)){

                            keys.push(key)
                        } 
                    }
                  current=current.next
                } 
            }
        }
      return keys
        
     }

}
// const myhashmap = new Hashmap(10);
// myhashmap.add('heba', '900000');
// myhashmap.add('hassan', '100000');
// myhashmap.add('zayd', '50000');
// myhashmap.add('mouna', '500000');
// myhashmap.add('lareen', '490000');
// myhashmap.add('aws', '450000');
// myhashmap.add('aws', '411150000');
// //get value befor update
// console.log("get value befor update",myhashmap.get('hassan'))



// //set 
// myhashmap.set('hassan','10055000')

// ////get the value after updated
// console.log("get value after update",myhashmap.get('hassan'))

// //print
// myhashmap.map.forEach((ll) => {
//     console.log(ll.print());  
// })
// // print keys
// console.log(myhashmap.keys());  

// //contains
// console.log(myhashmap.contains('heba'))

module.exports = Hashmap;
