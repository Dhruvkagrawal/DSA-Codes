function evenSumBelowN(num) {
    sum = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 2 == 0 && i > 0) {
                sum = sum + i;
            }
        }
        console.log(sum)
    }
    function runProgram(input) {
        var num = Number(input);
        evenSumBelowN(num)
    }
    
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });
    
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });