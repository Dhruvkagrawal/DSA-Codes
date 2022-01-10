function runProgram(input) {
n = input.trim().split("\n")
var t = +n[0];
line = 1
for (let m = 0; m < t; m++) {
    var l = +n[line];
    line++
    var a = n[line].trim()
    line++
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            str = ""
            for (let k = i; k < j+1; k++) {
                str = str + a[k]
            }
            console.log(str);
        }
    }
}
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`4
  6
  lvpkql
  2
  ty
  9
  uswuvdgyk
  3
  psp`);
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