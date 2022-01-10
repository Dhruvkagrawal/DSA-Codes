// var a = "{([])}";
// count1 = 0;
// count2 = 0;
// count3 = 0;
// count4 = 0;
// count5 = 0;
// count6 = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "{") {
//     count1++;
//   } else if (a[i] === "}") {
//     count2++;
//   } else if (a[i] === "(") {
//     count3++;
//   } else if (a[i] === ")") {
//     count4++;
//   } else if (a[i] === "[") {
//     count5++;
//   } else if (a[i] === "]") {
//     count6++;
//   }
// }
// if (count1 === count2 && count3 === count4 && count5 === count6) {
//   console.log("balanced");
// } else {
//   console.log("not balanced");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line++].trim();
    stack = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "{" || a[i] === "(" || a[i] === "[") {
        stack.push(a[i]);
      } else {
        if (stack.length === 0) {
          console.log("not balanced");
          break;
        } else {
          if (
            (a[i] === "}" && stack[stack.length - 1] !== "{") ||
            (a[i] === "]" && stack[stack.length - 1] !== "[") ||
            (a[i] === ")" && stack[stack.length - 1] !== "(")
          ) {
            console.log("not balanced");
            break;
          } else {
            stack.pop();
          }
        }
      }
    }
    if (stack.length === 0) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  {[])}
  ()
  (
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// var a = "{";
// stack = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "(" || a[i] === "{" || a[i] === "[") {
//     stack.push(a[i]);
//   } else {
//     if (stack.length === 0) {
//       break;
//     } else {
//       if (
//         (a[i] === "}" && stack[stack.length - 1] !== "{") ||
//         (a[i] === ")" && stack[stack.length - 1] !== "(") ||
//         (a[i] === "]" && stack[stack.length - 1] !== "[")
//       ) {
//         break;
//       } else {
//         stack.pop();
//       }
//     }
//   }
// }
// if (stack.length === 0) {
//   console.log("balanced");
// } else {
//   console.log("not balanced");
// }
// console.log(stack);

// var a = "{[(])}";
// stack = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "{" || a[i] === "(" || a[i] === "[") {
//     stack.push(a[i]);
//   } else {
//     if (stack.length === 0) {
//       break;
//     } else {
//       if (
//         (a[i] === "}" && stack[stack.length - 1] !== "{") ||
//         (a[i] === "]" && stack[stack.length - 1] !== "[") ||
//         (a[i] === ")" && stack[stack.length - 1] !== "(")
//       ) {
//         break;
//       } else {
//         stack.pop();
//       }
//     }
//   }
// }
// if (stack.length === 0) {
//   console.log("balanced");
// } else {
//   console.log("not balanced");
// }
