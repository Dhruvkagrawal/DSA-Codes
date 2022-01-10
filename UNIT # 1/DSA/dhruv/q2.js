// var a = "aman";
// count = 0;
// for (let i = 0; i < a.length; i++) {
//     for (let j = i; j <= a.length; j++) {
//         str = ""
//         for (let k = i; k < j; k++) {
//             str = str+a[k]
//         }
//         if (str[str.length-1]=="a") {
//             count++
//         }
        
//     }
// }
// console.log(count);




//1   ===>    no of textcases
//4   ===>    no of letters in the word
//aman   ===>   word
//a     ====>    target





function runProgram(input) {
  n = input.trim().split("\n");
  text = +n[0]
  line = 2;
  for (let m = 0; m < text; m++) {
    var arr = n[line].split(" ").map(Number)
    line++
    var target = n[line]
    line++
  }

  count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j <= arr.length; j++) {
      str = ""
      for (let k = i; k < j; k++) {
        str = str + a[k]
      }
      if (str[str.length - 1] === target) {
        count++
      }

    }
  }
  console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  4
  aman
  a`);
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
