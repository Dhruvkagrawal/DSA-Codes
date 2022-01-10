var a = "[(])";
stack = [];
count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] === "(" || a[i] === "{" || a[i] === "[") {
    stack.push(a[i]);
  } else {
    if (stack.length === 0) {
      count++;
      break;
    } else {
      if (
        (a[i] === ")" && stack[stack.length] !== "(") ||
        (a[i] === "}" && stack[stack.length] !== "{") ||
        (a[i] === "]" && stack[stack.length] !== "[")
      ) {
        count++;
        break;
      } else {
        stack.pop();
      }
    }
  }
}
if (count !== 0) {
  console.log("Not balanced");
} else {
  if (stack.length === 0) {
    console.log("Balanced");
  } else {
    console.log("Not balanced");
  }
}

// function runProgram(input) {
//   n = input.trim().split("\n");
//   var t = +n[0];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     a = n[line++].trim();
//     stack = [];
//     count = 0;
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] === "(" || a[i] === "{" || a[i] === "[") {
//         stack.push(a[i]);
//       } else {
//         if (stack.length === 0) {
//           count++;
//           break;
//         } else {
//           if (
//             (a[i] === ")" && stack[stack.length - 1] !== "(") ||
//             (a[i] === "}" && stack[stack.length - 1] !== "{") ||
//             (a[i] === "]" && stack[stack.length - 1] !== "[")
//           ) {
//             count++;
//             break;
//           } else {
//             stack.pop();
//           }
//         }
//       }
//     }
//     if (count !== 0) {
//       console.log("Not balanced");
//     } else {
//       if (stack.length === 0) {
//         console.log("Balanced");
//       } else {
//         console.log("Not balanced");
//       }
//     }
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`3
//     {([])}
//     ()
//     ([]
//     `);
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
