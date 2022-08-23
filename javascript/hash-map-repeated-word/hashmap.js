const Hashmap = require("../hashTable/hashtable");

function firstRepeatingWord(string) {
  if (!string) {
    return "No input";
  }
  const hashTable = new Hashmap(string.length);
  const words = string.toLowerCase().match(/\w+/g);
 
  for (let i = 0; i <= string.length; i++) {
    if (hashTable.contains(words[i])) {
      return words[i];
    } else {
      hashTable.add(words[i], words[i]);
    }
  }
  return "No repeated words";
}

module.exports = firstRepeatingWord;
