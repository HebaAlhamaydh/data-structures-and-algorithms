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
    firstRepeatingWord(string) {
        //Write a function called repeated word that finds the first word to occur more than once in a string.
        //If there is no input, return No input.
        //If there are no words that occur more than once, return No repeated words.
      
        if (!string) {
          return "No input";
     
       }

       
    }

}
