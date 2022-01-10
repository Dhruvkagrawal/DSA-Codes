var a = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = i;k < j;k++) {
            console.log(a[i][j][k]);
        }
    }
}