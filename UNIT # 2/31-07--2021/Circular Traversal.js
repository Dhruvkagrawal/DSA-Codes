var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (let i = 0; i < a.length; i++) {
    for (let j = a.length - 1; j >= 0; j--) {
        if (i == 0) {
            console.log(a[j][i]);
        } for (let k = 0; k < a.length; k++) {
            if (i == 2&&i==a.length-1) {
                console.log(a[k][i]);
            }
        }
    }
}
