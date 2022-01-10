// var a = "21321";
// a = a.split("").map(Number);
// ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (let i = 0; i < a.length; i++) {
//   switch (a[i]) {
//     case 0:
//       ans[0]++;
//       break;
//     case 1:
//       ans[1]++;
//       break;
//     case 2:
//       ans[2]++;
//       break;
//     case 3:
//       ans[3]++;
//       break;
//     case 4:
//       ans[4]++;
//       break;
//     case 5:
//       ans[5]++;
//       break;
//     case 6:
//       ans[6]++;
//       break;
//     case 7:
//       ans[7]++;
//       break;
//     case 8:
//       ans[8]++;
//       break;
//     case 9:
//       ans[9]++;
//       break;
//   }
// }
// console.log(ans.join(" "));

function runProgram(input) {
  n = input.split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    r = +n[line++];
    a = n[line++];
    a = a.toString();
    console.log(a);
    ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < a.length; i++) {
      switch (a[i]) {
        case "0":
          ans[0]++;
          break;
        case "1":
          ans[1]++;
          break;
        case "2":
          ans[2]++;
          break;
        case "3":
          ans[3]++;
          break;
        case "4":
          ans[4]++;
          break;
        case "5":
          ans[5]++;
          break;
        case "6":
          ans[6]++;
          break;
        case "7":
          ans[7]++;
          break;
        case "8":
          ans[8]++;
          break;
        case "9":
          ans[9]++;
          break;
      }
    }
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  5
  01234056789
  6
  235452`);
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

// var a = "4589";
// console.log(a[0]);
