const inputBox = document.getElementById('time-to');
const outputBox = document.querySelectorAll('.output-value');
let today = new Date();
let interval;
let intervals = [];

inputBox.setAttribute('min', today);
inputBox.addEventListener('change', () => {
  if (intervals) {
    intervals.forEach((int) => {
      clearInterval(int);
    });
  }

  interval = setInterval(countdown, 1000);
  intervals.push(interval);
});

function countdown() {
  today = Date.now();
  let futureDate = new Date(inputBox.value);
  let diff = Math.abs(futureDate - today);
  let millisecondsLeft = 0;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  millisecondsLeft = diff - days * 1000 * 60 * 60 * 24;
  let hours = Math.floor(millisecondsLeft / (1000 * 60 * 60));
  millisecondsLeft -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(millisecondsLeft / (1000 * 60));
  millisecondsLeft -= minutes * 1000 * 60;
  let seconds = Math.floor(millisecondsLeft / 1000);
  millisecondsLeft -= seconds * 1000;

  outputBox[0].innerHTML = days;
  outputBox[1].innerHTML = hours;
  outputBox[2].innerHTML = minutes;
  outputBox[3].innerHTML = seconds;
}

function getDateToday(date) {
  let dd = String(date.getDay()).padStart(2, '0');
  let mm = String(date.getMonth()).padStart(2, '0');
  let yy = String(date.getFullYear());

  return yy + '-' + mm + '-' + dd;
}
