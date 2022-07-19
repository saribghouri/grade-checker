function calculate() {
  var a = parseInt(document.getElementById("bookone").value);
  var b = parseInt(document.getElementById("booktwo").value);
  var c = parseInt(document.getElementById("bookthree").value);
  var d = parseInt(document.getElementById("bookfour").value);
  var e = parseInt(document.getElementById("bookfive").value);

  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    alert("fajnwerjw");
  } else {
    var obtained = a + b + c + d + e;
    document.getElementById("obtain").innerHTML = obtained;
    var per = (obtained / 500) * 100;
    document.getElementById("per").innerHTML = per;
    if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
      document.getElementById("remarks").innerHTML = "pass";
    }
    return false;
  }
}
