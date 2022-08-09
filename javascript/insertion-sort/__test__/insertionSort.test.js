'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort Test', () => {

    test('Sort an array', () => {
        let array = [8, 4, 23, 42, 16, 15];

        expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
    })

})