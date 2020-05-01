var randomNumber = [];
pickClassmates.onclick = function () {
  randomNumber = getAcyclicRandomNumber(classmates.length);
  for (var i = 0; i < classmates.length; i++) {
    if (i = randomNumber[0]) {
      alert(classmates[i]);
    }
    break;
  }
}
