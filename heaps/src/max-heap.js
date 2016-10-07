const swap = (array, i, j) => {
  const intermediate = array[i];
  array[i] = array[j];
  array[j] = intermediate;
}

let withinHeap = (index, size) => index < size;
let greaterThan = (array, i, j) => array[i] > array[j]

const findLargest = (array, size, i, l, r) => {
  let largest = (withinHeap(l, size) && greaterThan(array, l, i)) ? l : i;
  return (withinHeap(r, size) && greaterThan(array, r, largest)) ? r : largest;
}

function Max() {

  this.left = (i) => (i === 0) ? 2 : 2 * (i + 1)
  this.right = (i) => (i === 0) ? 1 : (2 * i) + 1
  this.parent = (i) => Math.floor(i / 2)

  // should this be made private?
  this.heapify = (i) => {
    let left = this.left(i);
    let right = this.right(i);

    let largest = findLargest(this.array, this.size, i, left, right);

    if (largest !== i) {
      swap(this.array, i, largest);
      // recurse
      this.heapify(largest);
    }
    return this;
  }

  this.build = (array) => {
    if (array) {
      this.array = array;
      this.size = array.length;
    }

    for (let i = Math.floor(this.array.length / 2); i >= 0; i--) {
      this.heapify(i);
    }

    return this;
  }

  this.sort = () => {
    let size = this.size;
    // start at the end of the array, and move backwards
    for (let i = this.array.length - 1; i >= 0; i--) {
      swap(this.array, i, 0);
      // decrement the size of the heap so we don't undo our swap
      // essentially, ignore the the entries beyond this.size - 1
      this.size -= 1;
      // rebalance the heap
      this.heapify(0);
    }
    // array is sorted, readjust the size of the heap
    this.size = size;
    return this;
  }
}

function MaxHeap(array) {
  Max.call(this);
  if (array) {
    this.array = array;
    this.size = array.length;
    this.build();
  }
}

const heapSort = (array) => new MaxHeap(array).sort().array;

exports.MaxHeap = MaxHeap;
exports.heapSort = heapSort
