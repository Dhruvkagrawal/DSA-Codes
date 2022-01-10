// var a = [1, 2, 3, 5, 5];
// k = 10;

// function findPairs(array, k) {
//     let start = 0;
//     let end = array.length - 1;
//     while (start < end) {
//         if (array[start] + array[end] === k) {
//             return [start, end];
//         } else if (array[start] + array[end] < k) {
//             start++;
//         } else {
//             end--;
//         }
//     }
//     return [-1, -1];
// }

// console.log(findPairs(a, k).join(" "));

function runProgram(input) {
    n = input.trim().split("\n");
    var t = n[0];
    line = 1;
    for (let i = 0; i < t; i++) {
        var lt = n[line++].trim().split(" ").map(Number);
        var k = +lt[1];
        var a = n[line++].trim().split(" ").map(Number);

        function findPairs(array, k) {
            let start = 0;
            let end = array.length - 1;
            while (start < end) {
                if (array[start] + array[end] === k) {
                    return [start, end];
                } else if (array[start] + array[end] < k) {
                    start++;
                } else {
                    end--;
                }
            }
            return [-1, -1];
        }

        console.log(findPairs(a, k).join(" "));
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}