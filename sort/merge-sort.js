const mergeSort = (array) => {

  const compare = (x, y) => x <= y

  const merge = (array, start, middle, end) => {
    //console.log("\nSetting up merge...");
    //console.log("start: %s\tmiddle: %s\tend: %s", start, middle, end);
    const left = [];
    const right = [];
    const lSize = middle - start;
    const rSize = end - middle;
    //console.log("Size of Left: %s\tSize of Right: %s", lSize, rSize);
    for (var i = 0; i < lSize; i++) {
      left[i] = array[start + i];
    }
    for (var j = 0; j < rSize; j++) {
      right[j] = array[middle + j];
    }
    left.push(Infinity);
    right.push(Infinity);
    //console.log("Left: %s\tRight: %s", left, right);
    var i = 0;
    var j = 0;
    //console.log("\nMerging...");
    for (var k = start; k < end; k++) {
     //console.log("i: %s\tl[i]: %s\tj: %s\tr[j]: %s", i, left[i], j, right[j]);
     if (compare(left[i], right[j])) {
       array[k] = left[i];
       i++;
     } else {
       array[k] = right[j];
       j++;
     }
    }
  }

  const sort = (array, start, end) => {
    if (end - start > 1) {
      const middle = Math.floor((start + end) / 2);
      sort(array, start, middle);
      sort(array, middle, end);
      merge(array, start, middle, end);
    }
  }

  sort(array, 0, array.length);
  return array;
} 
