// sum = 0;
// for (let i = 0; i < a.length; i++) {
//   switch (a[i]) {
//     case "a":
//       sum = sum + n;
//       break;
//     case "b":
//       sum = sum + n + 1;
//       break;
//     case "c":
//       sum = sum + n + 2;
//       break;
//     case "d":
//       sum = sum + n + 3;
//       break;
//     case "e":
//       sum = sum + n + 4;
//       break;
//     case "f":
//       sum = sum + n + 5;
//       break;
//     case "g":
//       sum = sum + n + 6;
//       break;
//     case "h":
//       sum = sum + n + 7;
//       break;
//     case "i":
//       sum = sum + n + 8;
//       break;
//     case "j":
//       sum = sum + n + 9;
//       break;
//     case "k":
//       sum = sum + n + 10;
//       break;
//     case "l":
//       sum = sum + n + 11;
//       break;
//     case "m":
//       sum = sum + n + 12;
//       break;
//     case "n":
//       sum = sum + n + 13;
//       break;
//     case "o":
//       sum = sum + n + 14;
//       break;
//     case "p":
//       sum = sum + n + 15;
//       break;
//     case "q":
//       sum = sum + n + 16;
//       break;
//     case "r":
//       sum = sum + n + 17;
//       break;
//     case "s":
//       sum = sum + n + 18;
//       break;
//     case "t":
//       sum = sum + n + 19;
//       break;
//     case "u":
//       sum = sum + n + 20;
//       break;
//     case "v":
//       sum = sum + n + 21;
//       break;
//     case "w":
//       sum = sum + n + 22;
//       break;
//     case "x":
//       sum = sum + n + 23;
//       break;
//     case "y":
//       sum = sum + n + 24;
//       break;
//     case "z":
//       sum = sum + n + 25;
//       break;
//   }
// }
// console.log(sum);

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var a = input[2].trim().split("");
  sum = 0;
  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case "a":
        sum = sum + n;
        break;
      case "b":
        sum = sum + n + 1;
        break;
      case "c":
        sum = sum + n + 2;
        break;
      case "d":
        sum = sum + n + 3;
        break;
      case "e":
        sum = sum + n + 4;
        break;
      case "f":
        sum = sum + n + 5;
        break;
      case "g":
        sum = sum + n + 6;
        break;
      case "h":
        sum = sum + n + 7;
        break;
      case "i":
        sum = sum + n + 8;
        break;
      case "j":
        sum = sum + n + 9;
        break;
      case "k":
        sum = sum + n + 10;
        break;
      case "l":
        sum = sum + n + 11;
        break;
      case "m":
        sum = sum + n + 12;
        break;
      case "n":
        sum = sum + n + 13;
        break;
      case "o":
        sum = sum + n + 14;
        break;
      case "p":
        sum = sum + n + 15;
        break;
      case "q":
        sum = sum + n + 16;
        break;
      case "r":
        sum = sum + n + 17;
        break;
      case "s":
        sum = sum + n + 18;
        break;
      case "t":
        sum = sum + n + 19;
        break;
      case "u":
        sum = sum + n + 20;
        break;
      case "v":
        sum = sum + n + 21;
        break;
      case "w":
        sum = sum + n + 22;
        break;
      case "x":
        sum = sum + n + 23;
        break;
      case "y":
        sum = sum + n + 24;
        break;
      case "z":
        sum = sum + n + 25;
        break;
    }
  }
  console.log(sum);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`30
  3
  abc`);
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
