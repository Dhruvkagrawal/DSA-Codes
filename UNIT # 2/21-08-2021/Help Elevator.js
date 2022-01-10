function helpElevator(N, elements) {
  for (let i = 0; i < N; i++) {
    a = [];
    if (elements[i] < 85) {
      a.push("Enter");
    } else {
      a.push("Beep");
    }
    console.log(a.join(" "));
  }
}
