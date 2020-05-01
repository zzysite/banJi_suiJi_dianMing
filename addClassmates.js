var classmates = [];
function addClassmate (number) {
  var classmateName;
  for (var i = 0; i < number; i++) {
    classmateName = prompt("请问那位同学叫什么名字？");
    classmates[i] = classmateName;
  }
}
addClassmates.onclick = function () {
  var number = prompt("请问您的班级有多少人？");
  addClassmate(number);
}
