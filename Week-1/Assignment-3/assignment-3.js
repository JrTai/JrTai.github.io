function countAandB(input) {
    // your code here
    output = 0;
    input.forEach(function (item, index) {
      //console.log(item, index);
      if (item == 'a' || item == 'b') {
        output += 1;
      }
    });
    return output;
}
function toNumber(input) {
    // your code here
    output = [];
    input.forEach(function (item, index) {
      // console.log(item, index);
      output.push(item.charCodeAt(0) - 97 + 1)
    });
    return output;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter) console.log(toNumber(input1); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(toNumber(input2)); // should print 0 console.log(toNumber(input2); // should print [5, 4, 3, 4, 5]
