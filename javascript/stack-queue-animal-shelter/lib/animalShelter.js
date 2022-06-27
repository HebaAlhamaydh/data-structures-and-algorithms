'use strict';

const Queue = require('./Queue');

class AnimalShelter{
    constructor( ){
    
        this.cat = new Queue();
        this.dog = new Queue();
        this.length = 0;
    }
    
    enqueue(animal) {
        if (animal === 'cat') {
            this.cat.enqueue(animal);
            this.length++;
        } else if (animal === 'dog') {
            this.dog.enqueue(animal);
            this.length++;
        } else {
            return 'Not Allowed'
        }
    }
   
    dequeue(pref) {
        if (this.length === 0) return 'Exception';
        if (pref === 'dog') {
            this.length--;
            return this.dog.dequeue(pref);
        } else if (pref === 'cat') {
            this.length--;
            return this.cat.dequeue(pref);
        } else {
            return 'Exception';
        }
    }
}


module.exports =AnimalShelter;