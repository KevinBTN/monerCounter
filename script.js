var moneyEarned = document.getElementById("money"),
    hourly = document.getElementById("hourlyWage");
var sendButton = document.getElementById("sendBtn");
var displayTime = document.getElementById("dateTime");
var resetButton = document.getElementById("resetBtn");
var wagePerSec;
var moneyEarnedSoFar = 0;
var displayMoney;

sendButton.addEventListener("click", intervalFunction);
sendButton.addEventListener("click", moneyCalcul);
resetButton.addEventListener("click", resetFunction);

function intervalFunction(){
  t = setInterval(repeat, 1000);
  sendButton.innerHTML = "Modifier";
  sendButton.removeEventListener("click", intervalFunction);
}

function resetFunction(){
  clearInterval(t);
  moneyEarnedSoFar = 0;
  displayTime.innerHTML = "";
  moneyEarned.innerHTML = "";
  sendButton.addEventListener("click", intervalFunction);
}

function moneyCalcul(){
  displayTime.innerHTML += hourly.value + " per hour, since " + new Date().toLocaleTimeString() + "<br>";
  wagePerSec = hourly.value / 3600;
}

function repeat(){
  moneyEarnedSoFar += wagePerSec;
  displayMoney = Math.round(moneyEarnedSoFar * 100) / 100;
  moneyEarned.innerHTML = displayMoney + " earned so far";
}
