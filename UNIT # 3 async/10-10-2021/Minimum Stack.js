var a = [
  ["push", 5],
  ["push", 3],
  ["push", 1],
  ["getMin"],
  ["pop"],
  ["getMin"],
  ["pop"],
  ["getMin"],
];
stack = [];
for (let i = 0; i < a.length; i++) {
  m = stack[0];
  if (a[i][0] === "push") {
    stack.push(a[i][1]);
    m = getmin(stack);
  } else if (a[i][0] === "getMin") {
    console.log(m);
  } else if (a[i][0] === "pop") {
    stack.pop();
  }
}
function getmin(stack) {
  min = stack[0];
  for (let i = 0; i < stack.length; i++) {
    if (min > stack[i]) {
      min = stack[i];
    }
  }
  return min;
}
console.log(stack);

// function runProgram(input) {
//   n = input.trim().split("\n");
//   t = +n[0];
//   a = [];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     a1 = n[line++].trim().split(" ");
//     a.push(a1);
//   }
//   stack = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] === "push") {
//       stack.push(a[i][1]);
//     } else if (a[i][0] === "getMin") {
//       console.log(getmin(stack));
//     } else if (a[i][0]) {
//       stack.pop();
//     }
//   }
//   function getmin(stack) {
//     min = stack[0];
//     for (let i = 0; i < stack.length; i++) {
//       if (min > stack[i]) {
//         min = stack[i];
//       }
//     }
//     return min;
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`8
//   push 5
//   push 3
//   push 1
//   getMin
//   pop
//   getMin
//   pop
//   getMin`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
