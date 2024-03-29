'use strict';
 const arr = [-5, 15, -10, 0, 25, 5, 1, 2];
function Mergesort(arr) {

    let n = arr.length;
    if (n > 1) {
        let mid = Math.floor(n / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, n);
        // sort the left side
        Mergesort(left)
        // sort the right side
        Mergesort(right)
        // merge the sorted left and right sides together
        Merge(left, right, arr)
    }
}
function Merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length){
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        }
        else {
            arr[k] = right[j]
            j = j + 1
        }
    k = k + 1;
}
while (i < left.length) {
        arr[k] = left[i];
        k += 1;
        i += 1;
    }
  while (j < right.length){
        arr[k] = right[j];
        k += 1;
        j += 1;
    }
    return arr;  
}


Mergesort(arr)
 console.log(arr);
module.exports = Mergesort;