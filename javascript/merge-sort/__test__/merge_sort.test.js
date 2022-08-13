'use strict';

const Mergesort  = require('../merge-sort');
describe(' Merge Sort Test', () => {

    test(' Mergesort an array', () => {
        let arr = [-5,15,-10,0,25,5,1, 2];
        
        expect(Mergesort(arr)).toEqual[-10,-5,0,1,2,5,15,25];
    })
    //// another solution///
    // test(' Mergesort an array', () => {
    //     let arr = [-5,15,-10,0,25,5,1, 2];
    //     Mergesort(arr)
    //     let result =arr;
    //     expect(result).toEqual([-10,-5,0,1,2,5,15,25]);
    // })


})