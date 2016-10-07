const Heaps = require('./index');
const { generate, isSorted } = require('../sort-test-utils');
const array = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

console.log(Heaps);

const myMaxHeap = new Heaps.Max(array);
console.log(myMaxHeap.array);
myMaxHeap.sort()
console.log(myMaxHeap.array);
myMaxHeap.build();
console.log(myMaxHeap.array);


let toSort = generate(0, 100);
let sorted = Heaps.heapSort(toSort);
console.log(isSorted(sorted));
