function count(input) {
  // your code here
  var count_map = {};
  for (var ch of input) {
    if (ch in count_map) {
      count_map[ch] += 1;
    }
    else {
      count_map[ch] = 1;
    }
  }
  return count_map;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  var count_map = {};
  for (var obj of input) {
    if (obj.key in count_map) {
      count_map[obj.key] += obj.value;
    }
    else {
      count_map[obj.key] = obj.value;
    }
  }
  return count_map;
}

let input2 = [{
  key: 'a',
  value: 3
}, {
  key: 'b',
  value: 1
}, {
  key: 'c',
  value: 2
}, {
  key: 'a',
  value: 3
}, {
  key: 'c',
  value: 5
}]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
