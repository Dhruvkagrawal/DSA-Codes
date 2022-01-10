// sum = 0;
//  for (let i = 0; i < a.length; i++) {
//     if (a[i]=="L") {
//         sum = sum +1
//     }if (a[i]=="R") {
//         sum = sum + (-1)
//     }if (a[i]=="U") {
//         sum = sum + (-1)
//     }if (a[i]=="D") {
//         sum = sum + (1)
//     }
//  }
//  if (sum == 0) {
//      console.log("YES");
//  }else{
//      console.log("No");
//  }


function runProgram(input) {
n = input.trim().split("\n");
var  t = +n[0]
line = 1
for (let k = 0; k < t; k++) {
   var l = +n[line++];
n = input.trim().split("\n");
   var a = n[line++].trim()
//    console.log(a);
   sum = 0;
   for (let i = 0; i < a.length; i++) {
      if (a[i]=="L") {
          sum = sum +1
          console.log(sum);
      }if (a[i]=="R") {
          sum = sum + (-1)
          console.log(sum)
      }if (a[i]=="U") {
          sum = sum + (-1)
          console.log(sum);
      }if (a[i]=="D") {
          sum = sum + (1)
          console.log(sum);
      }
    }
    if (sum != 0) {
        console.log("No");
    }else if(sum == 0){
        console.log("Yes");
    }
}
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
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
