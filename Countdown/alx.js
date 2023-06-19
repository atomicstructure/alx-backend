function alxEndDate(){
  const countDownDate = Date.parse('July 22, 2023')
  const finalDay = new Date()
  const daysRemain = countDownDate - finalDay

  days = Math.floor(daysRemain / (1000 * 60 * 60 * 24));
  hours = Math.floor(daysRemain / (1000 * 60 * 60));
  mins = Math.floor(daysRemain / (1000 * 60));
  secs = Math.floor(daysRemain / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  console.log(daysRemain)

  document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '<span>Days</span></div>' +
  '<div>' + h + '<span>Hours</span></div>' +
  '<div>' + m + '<span>Minutes</span></div>' +
  '<div>' + s + '<span>Seconds</span></div>';
}

function nalxEndDate(){
  setInterval('alxEndDate()', 1000)
};

nalxEndDate();