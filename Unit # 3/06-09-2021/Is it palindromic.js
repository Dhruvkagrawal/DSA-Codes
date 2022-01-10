var arr = [
  1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2,
  2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
];
n = arr.length;
function isItPalindrome(n, arr) {
  one = 0;
  two = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      one++;
    } else if (arr[i] === 2) {
      two++;
    }
  }
  if (
    (one % 2 === 0 && two % 2 === 0) ||
    (one % 2 === 1 && two % 2 === 0) ||
    (one % 2 === 0 && two % 2 === 1) ||
    one === two - 1 ||
    one - 1 === two ||
    one === 0 ||
    two === 0
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

isItPalindrome(n, arr);
