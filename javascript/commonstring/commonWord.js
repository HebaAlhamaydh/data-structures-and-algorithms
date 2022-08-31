"use strict";
const Hashmap = require("./hashtable");
// function commonWord(string){
//     if (!string) {
//         return "No input";
//       }
//     let hash=new Hashmap(string.length);
//     let words = string.toLowerCase().match(/\w+/g);

//     let tempWord;
//     let tempCounter=0;

//     for (let i = 0; i < words.length; i++) {
//         if (hash.contain(words[i])) {
//         //counter=hash.get(words[i])
//             hash.set(words[i], hash.get(words[i])+1 );
//         }
//         else
//         hash.set(words[i], 1);
//     }
//     for (let [key, value] in hash.keys()) {
// tempCounter=
// tempWord=hash.get(key)
//         if (value > tempCounter) {
//             tempCounter = value;
//             tempWord = key;
//         }
//       }
    

//       // Return highest frequency
//       return tempWord;
//     }
function checkForUnique(string) {
    if (!string) {
        return "No input";
    }
    let hash = new Hashmap(1024);
    let words = string.toLowerCase().split(' ').join('').split('');
    for (let i = 0; i < words.length; i++) {
        if (hash.contain(words[i])) {

            return true;
        } else {
            hash.set(words[i]);
        }
    }
    return false;
}

module.exports = checkForUnique;



// commonWord("heba mousa hassan zayd hassan heba heba")
// console.log(commonWord("heba mousa hassan zayd hassan heba heba"));
// checkForUnique("heba mousa hassan zayd hassan heba heba")
// console.log(checkForUnique("heba mousa hassan zayd hassan heba heba"));