function runProgram(input) {
    n = input.trim().split("\n")
    var len = +n[0]
    mat = [];
    a = n[1].trim().split(" ").map(Number);
    var max = a[0];
    var mf = 1;
    for (let i = 0; i < len; i++) {
        count = 1;
        for (let j = 1; j < len; j++) {
            if (a[i] == a[j]) {
                count++
            }
        }
        if (mf < count) {
            mf = count;
            max = a[i]
        }if (mf==count) {
            max = a[0]
        }
    }
    console.log(max);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5
   -2 0 0`);
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