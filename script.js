let countDate = new Date("Jan 1, 2022 00:00:00").getTime();
function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

setInterval(function () {
  newYear();
}, 1000);
