'use strict';
const Hashmap = require("./hashtable");
function treeIntersection(tree1, tree2){
    let resultArr = [];
      const btree1 = tree1.inOrder();
      const btree2 = tree2.inOrder();
    
      const myhashmap = new Hashmap(1024);
    
      
      for (let index = 0; index < btree1.length; index++) {
        if (!myhashmap.contain(btree1[index].toString())) {
            myhashmap.set(btree1[index].toString(), btree1[index]);
        }
      }
      for (let index = 0; index < btree2.length; index++) {
        if (myhashmap.contain(btree2[index].toString())) {
          resultArr.push(btree2[index]);
        }
      }
    
      return resultArr.length ? resultArr : "no common values";
    };
module.exports = treeIntersection;