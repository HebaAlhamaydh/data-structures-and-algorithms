"use strict";
const Hashmap = require("../hashTable/hashtable");

function leftjoin(myHash1,myHash2){
    if(!myHash1 instanceof Hashmap || !myHash2 instanceof Hashmap) {
        throw new Error("Illegal Arguments")
     }
    let hashTable = new Hashmap(1024);
    myHash1.map.forEach((k, v) => hashTable.set(k, v));
    
    myHash2.map.forEach((element,indx)=>{
        if (myHash2.contain(hashTable[element]))
        hashTable.set(element,element)
        else {
            hashTable.set(element,null)
        }
    })

return hashTable
}



const myhashmap = new Hashmap(10);
myhashmap.add('heba', '900000');
myhashmap.add('hassan', '100000');
myhashmap.add('zayd', '50000');
myhashmap.add('mouna', '500000');
myhashmap.add('lareen', '490000');
myhashmap.add('aws', '450000');


const myhashmap2 = new Hashmap(10);
myhashmap.add('heba', '900000');
myhashmap.add('hassan', '100000');
myhashmap.add('zayd', '50000');
myhashmap.add('mouna', '500000');
myhashmap.add('lareen', '490000');

const myhashmap3= new Hashmap(10);

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
console.log(myhashmap3.leftjoin(myhashmap,myhashmap2));
module.exports =leftjoin;
