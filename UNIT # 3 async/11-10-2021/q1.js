var a = [39, 27, 11, 4, 24, 32, 32, 1];
function right(a) {
  arr1 = [];
  stack = [];
  for (let i = a.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      arr1.push(-1);
    } else if (stack.length !== 0 && stack[stack.length - 1] < a[i]) {
      arr1.push(stack.length - 1);
    } else if (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        arr1.push(-1);
      } else {
        arr1.push(stack.length - 1);
      }
    }
    stack.push(i);
  }
  return arr1.reverse();
}
console.log(right(a));

// function left(a) {
//   arr2 = [];
//   stack = [];
//   for (let i = 0; i < a.length; i++) {
//     if (stack.length === 0) {
//       arr2.push(-1);
//     } else if (stack.length !== 0 && stack[stack.length - 1] < a[i]) {
//       arr2.push(stack[stack.length - 1]);
//     } else if (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
//       while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
//         stack.pop();
//       }
//       if (stack.length === 0) {
//         arr2.push(-1);
//       } else {
//         arr2.push(stack[stack.length - 1]);
//       }
//     }
//     stack.push(a[i]);
//   }
//   console.log(arr2);
//   return arr2;
// }

// var a1 = right(a);
// var a2 = left(a);

// function ans(a1, a2) {
//   ans = [];
//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] === -1 && a2[i] === -1) {
//       ans.push(-1);
//     } else if (a1[i] > a2[i]) {
//       ans.push(a2[i]);
//     } else if (a1[i] < a2[i]) {
//       ans.push(a1[i]);
//     }
//   }
//   return ans;
// }
// console.log(ans(a1, a2));
