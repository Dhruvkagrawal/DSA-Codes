// var a = new Array(8).fill(new Array(8).fill(0));
// var n = 4;
function runProgram(input) {
  let arr = input.split("\n");
  let pro = arr[1].trim().split(" ").map(Number);
  let ideal = arr[2].trim().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < pro.length; i++) {
    if (pro[i] === ideal[i]) {
      pro.shift();
      ideal.shift();
      count++;
    }

    while (pro[0] !== ideal[0]) {
      let temp = pro.shift();
      pro.push(temp);
      count++;
    }

    if (pro[0] === ideal[0]) {
      pro.shift();
      ideal.shift();
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  3 2 1
  1 3 2`);
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
