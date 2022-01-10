var a = "abcab";
count = 0;
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j <= a.length; j++) {
        var str = []
        for (let k = i; k < j; k++) {
            str.push(a[k])
        }
        console.log(str.join(" "));

    }
}