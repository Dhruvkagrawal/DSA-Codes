// var a = [12, 18, 17, 65, 46];
// k = 6;
// for (let i = 0; i < a.length - 1; i++) {
//   min = i;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[min] % k <= a[j] % k) {
//       min = j;
//     }
//   }
//   [a[i], a[min]] = [a[min], a[i]];
// }
// console.log(a.reverse().join(" "));

// function runProgram(input) {
//   n = input.trim().split("\n");
//   tk = n[0].trim().split(" ").map(Number);
//   var k = +tk[1];
//   var a = n[1].trim().split(" ").map(Number);
//   for (let i = 0; i < a.length - 1; i++) {
//     min = i;
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[min] % k >= a[j] % k) {
//         min = j;
//       }
//     }
//     [a[i], a[min]] = [a[min], a[i]];
//   }
//   console.log(a.join(" "));
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`5 6
//   12 18 17 65 46`);
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

function runProgram(input) {
  n = input.trim().split("\n");
  tk = n[0].trim().split(" ").map(Number);
  var k = +tk[1];
  var a = n[1].trim().split(" ").map(Number);
  for (let i = 0; i < a.length - 1; i++) {
    swap = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j] % k > a[j + 1] % k) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
  }
  console.log(a.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5 6
  12 18 17 65 46`);
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
