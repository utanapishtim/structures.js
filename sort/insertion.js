"use strict";

const insertionSort = (array) => {
  const l = array.length;
  for(var i = 1; i < l; i++) {
    var current = array[i];
    var j = i - 1;
    while(j > -1 && (array[j] <= current)) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = current;
  }
  return array;
}

exports.instertion = insertionSort;
