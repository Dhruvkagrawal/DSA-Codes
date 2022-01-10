// var a = [1, 3, 2, 4];
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   let j = 0;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] < a[j]) {
//       arr.push(a[j]);
//       break;
//     }
//   }
// }
// console.log(arr);

var a = [1, 3, 2, 4];
arr = [];
stack = [];
for (let i = a.length - 1; i >= 0; i--) {
  if (stack.length === 0) {
    arr.push(-1);
  } else if (stack.length !== 0 && stack[stack.length - 1] > a[i]) {
    arr.push(stack[stack.length - 1]);
  } else if (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
    while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      arr.push(-1);
    } else {
      arr.push(stack[stack.length - 1]);
    }
  }
  stack.push(a[i]);
}
console.log(arr.reverse().join(" "));
console.log(stack.reverse().join(" "));
