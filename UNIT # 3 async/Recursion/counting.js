var a = 5;
function count(a) {
  if (a === 0) {
    return;
  }
  count(a - 1);
  console.log(a);
}
count(a);
