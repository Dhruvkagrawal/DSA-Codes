function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0];
    line = 2;
    for (let k = 0; k < t; k++) {
        var a = n[line].trim();
        line += 2
        str = "";
        i = 0;
        while (i < a.length) {
            count = 0;
            for (let j = i; j < a.length; j++) {
                if (a[i] !== a[j]) {
                    break;
                } else {
                    count++
                }
                i = j;
            }
            str = str + a[i] + count;
            i++
        }
        console.log(str);
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`2
  5
  aabcc
  5
  aazaa`);
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