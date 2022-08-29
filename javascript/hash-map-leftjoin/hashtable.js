const linkedList = require('./linkedlist')
class HashMap {
    constructor(size){
        this.size=size,
        this.map= new Array(size)

}
makeHash(key){
    const ASCi= key.split("").reduce((acc,cur)=>{
        return acc+cur.charCodeAt(0)
    },0)
    const ASCiPrime=ASCi*599
    const Index=ASCiPrime%this.size
    return Index
}

set(key,value){
    const hash=this.makeHash(key)
    
    if (!this.map[hash]) {
        this.map[hash] = new linkedList();
    }
    this.map[hash].append({ [key]: value });
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
    let index = this.makeHash(key);
    if (!this.map[index]) {
      return false;
    }
    return true;
}

keys(){
    let arr=[]
    this.map.forEach((element)=>{
    
        let result = element.head
        
        while(result){
           arr.push(Object.keys(result.value))
        result=result.next
        
        }    
    })
    return arr
}


}

module.exports = HashMap;