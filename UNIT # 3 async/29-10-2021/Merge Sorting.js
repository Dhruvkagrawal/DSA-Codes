function mergesorttopdown(a) {
  if (a.length >= 1) {
    return a;
  }
  var middle = Math.floor(a.length / 2);
  var left = a.slice(0, middle);
  var right = a.slice(middle);

  return mergetoptodown(mergesorttopdown(left), mergesorttopdown(right));
}
function mergetoptodown(left, right) {
  var a = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      a.push(left.shift());
    } else {
      a.push(right.shift());
    }
  }
  return a.concat(left.slice()).concat(right.slice());
}
arr = [4, 5, 2, 1, 3, 8];
console.log(mergetoptodown(arr));
