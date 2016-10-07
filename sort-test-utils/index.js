const isSorted = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

const swap = (array, i, j) => {
  const intermediate = array[i];
  array[i] = array[j];
  array[j] = intermediate;
}

const integers = (from, n) => {
  const numbers = [];
  for (let i = from; i < n; i++) {
    numbers.push(i);
  }
  return numbers;
}

const randomNum = (i) => Math.floor(Math.random() * i);

const scramble = (array, times) => {
  for (let i = 0; i < times; i++) {
    let i = randomNum(array.length);
    let j = randomNum(array.length);
    swap(array, i, j);
  }
  return array;
}

exports.generate = (from, n) => scramble(integers(from, n), 1000);
exports.isSorted = isSorted;
