const { HashMap, leftJoin } = require("../leftjoin")



describe('hashTable test cases ', () => {
    const Synonyms = new HashMap(1024);
    const Antonyms = new HashMap(1024)
    const hashMap3 = new HashMap(1024);

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


    let result = 
    [
        [ 'diligent', 'employed', 'idle' ],
        [ 'outfit', 'garb', null ],
        [ 'fond', 'enamored', 'averse' ],
        [ 'guide', 'usher', 'follow' ],
        [ 'wrath', 'anger', 'delight' ]
      ]
    it('return left join for both hash table ', () => {
        expect(leftJoin(Synonyms, Antonyms)).toEqual(result)
    })
    it('if the first hash table is empty  return empty array', () => {

        expect(leftJoin(hashMap3, Antonyms)).toEqual([])


    })


})
