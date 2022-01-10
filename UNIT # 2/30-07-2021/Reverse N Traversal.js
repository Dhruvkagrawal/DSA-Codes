function runProgram(input) {
    n = input.trim().split("\n")
    var t = +n[0]
    for (let k = 0; k < n.length; k++) {
        n[k] = n[k].trim().split(" ").map(Number)
    }
    n = n.slice(1)
    for (let l = 0; l < t; l++) {
        mat = n.splice(0, n[0][0] + 1)
        a = mat.slice([1])
        arr = []
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[i].length; j++) {
                if (i == 0 || i == a.length - 1) {
                    arr.push(a[j][i])
                } else if (i + j == a.length - 1) {
                    arr.push(a[j][i])
                }
            }
        }
        console.log(arr.join(" "));
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  4
  1 2 3 4
  4 5 6 7
  7 4 4 8
  4 4 7 8`);
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