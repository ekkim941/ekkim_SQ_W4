// ============================================================
// 1. game.js: Core State & Bulletproof Timer
// ============================================================

const OPENING = "OPENING";
const LEFT_PATH = "LEFT_PATH";
const RIGHT_PATH = "RIGHT_PATH";
const ORANGE = "ORANGE";
const CLIFF = "CLIFF";
const ANVIL = "ANVIL";
const ICE = "ICE";
const SNAKE_ATTACK = "SNAKE_ATTACK";

const E1 = "E1";
const E2 = "E2";
const E3 = "E3";
const E4 = "E4";
const E5 = "E5";
const E6 = "E6";
const E7 = "E7";
const E8 = "E8";
const E_TIMEOUT = "E_TIMEOUT";

let currentScene = OPENING;

// TIMER VARIABLES
let sceneStartTime = 0;
const DECISION_TIME_LIMIT = 10; // 10 seconds

function startTimer() {
  sceneStartTime = millis();
}

function getRemainingTime() {
  let elapsedSeconds = (millis() - sceneStartTime) / 1000;
  let remaining = DECISION_TIME_LIMIT - elapsedSeconds;
  return max(0, ceil(remaining));
}

function isTimeUp() {
  return (millis() - sceneStartTime) / 1000 >= DECISION_TIME_LIMIT;
}

// Scene switcher that explicitly resets the timer stamp
function changeScene(newScene) {
  currentScene = newScene;
  startTimer();
}

// UI HELPERS
const BTN_W = 540;
const BTN_H = 45;
const BTN_Y1 = 300;
const BTN_Y2 = 360;

function makeButton(x, y, w, h, txt) {
  let hovered =
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2;
  push();
  rectMode(CENTER);
  fill(hovered ? color(74, 63, 61) : color(40, 35, 34));
  stroke("#e67e22");
  strokeWeight(hovered ? 2 : 1);
  rect(x, y, w, h, 4);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(CENTER, CENTER);
  text(txt, x, y);
  pop();
  return hovered;
}

function writeStoryText(narrative) {
  fill("#d9ceb2");
  textSize(14);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  text(narrative, width / 2, 210, 650, 100);
}

function drawTimerDisplay() {
  let timeLeft = getRemainingTime();
  push();
  textAlign(RIGHT, TOP);
  textSize(18);
  fill(timeLeft <= 3 ? "#e74c3c" : "#f1c40f");
  text("⏱️ Time Left: " + timeLeft + "s", width - 20, 20);
  pop();
}
