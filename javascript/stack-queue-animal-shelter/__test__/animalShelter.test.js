'use strict';

const AnimalShelter = require('../lib/animalShelter');

describe("animalShelter", () => {
    test(" Can successfully enqueue a cat", () => {
        let  newAnimal = new AnimalShelter();
        newAnimal.enqueue('cat');
        expect(newAnimal.cat.front.value).toEqual('cat');
    })
    test(" Can successfully enqueue a dog", () => {
        let  newAnimal = new AnimalShelter();
        newAnimal.enqueue('dog');
        expect(newAnimal.dog.front.value).toEqual('dog');
    })

    test("Can successfully empty a queue after multiple dequeues", () => {
        let  newAnimal = new AnimalShelter();
        newAnimal.enqueue('cat');
        newAnimal.enqueue('cat');
        newAnimal.enqueue('dog');
        newAnimal.dequeue('cat');
        newAnimal.dequeue('dog');
        newAnimal.dequeue('cat');
        expect(newAnimal.length).toEqual(0);
       
    })
      it('return Exception if no animal', () => {
        let  newAnimal = new AnimalShelter();
        expect(newAnimal.dequeue('cat')).toEqual('Exception');
      });
      it('return Not Allowed if enquee does not cat or dog', () => {
        let  newAnimal = new AnimalShelter();
        expect( newAnimal.enqueue('fish')).toEqual('Not Allowed');
      });
      it('return Exception if dequee does not cat or dog', () => {
        let  newAnimal = new AnimalShelter();
        newAnimal.enqueue('cat');
        newAnimal.enqueue('dog');
        expect( newAnimal.dequeue('fish')).toEqual('Exception');
      });
})
