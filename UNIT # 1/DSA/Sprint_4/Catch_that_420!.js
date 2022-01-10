var a = "97420";
for (var i = 0; i < a.length; i++) {
    for (var j = 1; j < a.length; j++) {
        for (var k = i; k <= j; k++) {
            str = ' '
            str = str+ a[k];
            console.log(str);
        }
    }
}