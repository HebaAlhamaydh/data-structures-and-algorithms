
const HashMap = require('./hashtable')
function leftJoin(hashMap1, hashMap2) {
    let result = [];
    let tableValue1;
    let tableValue2;
    let key = hashMap1.keys()

    for (let i = 0; i < key.length; i++) {

        tableValue1 = hashMap1.get(key[i][0])

        if (hashMap2.contains(key[i][0])) {
            tableValue2 = hashMap2.get(key[i][0])
        }
        else {
            tableValue2 = null;
        }
        result.push([key[i][0], tableValue1, tableValue2])
    }

    return result
}
// function left_join(leftHashMap, rightHashMap) {
//     for(let [key, value] of leftHashMap) {
//       console.log(value)
//       let rightValue = null
//       rightHashMap.has(key) ? rightValue = rightHashMap.get(key) : null
//       leftHashMap.set(key, [value, rightValue])
//     }
//     return leftHashMap
//   }


const Synonyms = new HashMap(1024);
const Antonyms = new HashMap(1024)


Synonyms.set('diligent', 'employed');
Synonyms.set('fond', 'enamored');
Synonyms.set('guide', 'usher');
Synonyms.set('outfit', 'garb');
Synonyms.set('wrath', 'anger');

////////////////////////////////
Antonyms.set('diligent', 'idle');
Antonyms.set('fond', 'averse');
Antonyms.set('guide', 'follow');
Antonyms.set('flow', 'jam');
Antonyms.set('wrath', 'delight');


console.log(leftJoin(Synonyms, Antonyms))

module.exports = { HashMap, leftJoin }