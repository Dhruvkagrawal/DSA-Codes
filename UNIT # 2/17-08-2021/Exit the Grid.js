function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    var l = +n[line++];
    a = [];
    for (let j = 0; j < l; j++) {
      sub = n[line++].trim().split("");
      a.push(sub);
    }
    // console.log(l);
    // console.log(a);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  4 
  RRRR
  LLLL
  UUUU
  DDDD
  3
  LRL
  UUU
  DLR
  2
  RL
  DD
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
