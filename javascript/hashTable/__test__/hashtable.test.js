const Hashmap=require('../hashtable')
 const myhashmap=new Hashmap(10)
     myhashmap.add('heba', '90000');
     myhashmap.add('hassan', '100000');
     myhashmap.add('zayd', '500000');
     myhashmap.add('lareen', '900000');
     myhashmap.add('mouna', '120000');
     myhashmap.add('mouna', '13330000');

 describe('Hash Tables Testing', () => {
    it('add a key/value to  hashtable', () => { 
      expect(myhashmap.contains('heba')).toBeTruthy();
    });

    it('Retrieving based on a key returns the value stored', () => {
      expect(myhashmap.get('heba')).toStrictEqual('90000');
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(myhashmap.get('anything')).toBeNull();
        expect(myhashmap.contains('anything')).toBeFalsy();
      });
      
    it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
        
        expect(myhashmap.keys().sort()).toEqual(['heba','hassan','zayd','lareen','mouna'].sort());
      });
    
    it('Successfully handle a collision within the hashtable', () => { 
      expect(myhashmap.contains('heba')).toBeTruthy();
      expect(myhashmap.contains('zayd')).toBeTruthy();
    });
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
      expect(myhashmap.get('heba')).toStrictEqual('90000');
      expect(myhashmap.get('zayd')).toStrictEqual('500000');
    });

    it('Successfully hash a key to an in-range value', () => { 
        let Key = 'heba';
        expect(myhashmap.makeHash(Key)).toBeLessThanOrEqual(0);
        //closeTo(0.3, 5)
    });

  });