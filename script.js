let suspense = new Audio("../assets/audio/suspense.mp3");
let ambulance = new Audio("../assets/audio/ambulance.mp3");
let congrats = new Audio("../assets/audio/congrats.mp3");
let escaped = false;

/* TODO: add stop function to timer?
* QUESTION: HOW TO MAKE CLOCK VISIBLE ON ALL PAGES?
*/
// countdown clock
let gameTimer = 3600000;
let countDownDate = new Date().getTime() + gameTimer;
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);

  if (distance < 0 && !escaped) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    $('div').hide();
    $("#time-expired").show();
  }
}, 1000);

function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
}

//gamefunctions rooms
function l(x) {
    return document.getElementById(x);
}
function L(x) {
    return document.getElementsByClassName(x);
}
