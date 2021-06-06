const timer = {
  granted: false,
  state: "pomo",
  time: 1500,
  pomo: "25:00",
  short: "5:00",
  long: "15:00",
};

// ELEMENTS
const pomoSettings = document.getElementById("settings");
const pomoButtons = document.querySelectorAll(".pomodoro--button");
const pomoString = document.getElementById("pomodoro-string");

const buttonSound = new Audio("click.mp3");

// Misc.
function fibonacci(n) {
  return n < 1 ? 0
    : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
