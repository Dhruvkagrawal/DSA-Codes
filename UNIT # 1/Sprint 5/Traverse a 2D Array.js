function runProgram(input) {
    n = input.trim().split("\n");
    var rc = n[0].trim().split(" ").map(Number);
    var row = +rc[0];
    var colum = +rc[1];
    line = 1;
    a = []
    for (var m = 0; m < row; m++) {
        sub = n[line].trim().split(" ").map(Number);
        a.push(sub)
        line++
    }
    arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a[j].length; j++) {
            console.log(a[j][i]); 
        }
    }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5 10
  99 41 20 13 76 43 24 59 23 90
  79 57 84 85 34 2 48 34 92 92
  92 63 31 10 56 81 11 29 41 71
  76 99 43 87 29 57 94 1 44 19
  92 35 75 57 42 68 1 82 29 64`);
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