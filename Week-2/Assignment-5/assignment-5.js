function binarySearchPosition(numbers, target) {
  // your code here
  function getIdx(start_idx, end_idx) {
    return start_idx + Math.round((end_idx - start_idx) / 2);
  }

  var start_idx = 0
  var end_idx = numbers.length - 1
  var idx = getIdx(start_idx, end_idx);

  while (0 <= idx <= numbers.length - 1) {
    // console.log(idx);
    if (numbers[idx] === target) {
      return idx;
    } else if (numbers[idx] > target) {
      end_idx = idx - 1;
      new_idx = getIdx(start_idx, end_idx);
    } else if (numbers[idx] < target) {
      start_idx = idx + 1;
      new_idx = getIdx(start_idx, end_idx);
    }
    if (new_idx === idx) {
      return -1;
    }
    else {
      idx = new_idx;
    }
  }
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1));
// should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6));
// should print 3
