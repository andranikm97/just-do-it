const inputBox = document.getElementById('time-to');
let today = new Date();
today = getDateToday(today);
console.log(today);

// inputBox.setAttribute('min', )
inputBox.addEventListener('change', countdown);
function countdown(e) {
  console.log(e.target.value);
  return;
}

function getDateToday(date) {
  let dd = String(date.getDate().padStart(2, '0'));
  let mm = String(date.getMonth().padStart(2, '0'));
  let yy = String(date.getFullYear());

  return yy + '-' + mm + '-' + dd;
}
