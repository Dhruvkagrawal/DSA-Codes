var a = "aba"
var sum = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i]==="a") {
        sum = sum+1;
    }else if (a[i]==="b") {
        sum = sum+2
    }
}
console.log(sum);