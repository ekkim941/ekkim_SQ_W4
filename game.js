// ============================================================
// 1. game.js: Global State Constants & Universal Render Helpers
// ============================================================

// Definitions for the 15 strict screen state keys
const OPENING = "OPENING";
const LEFT_PATH = "LEFT_PATH";
const RIGHT_PATH = "RIGHT_PATH";
const ORANGE = "ORANGE";
const CLIFF = "CLIFF";
const ANVIL = "ANVIL";
const ICE = "ICE";
const E1 = "E1";
const E2 = "E2";
const E3 = "E3";
const E4 = "E4";
const E5 = "E5";
const E6 = "E6";
const E7 = "E7";
const E8 = "E8";

// Track player positioning on the mountain
let currentScene = OPENING;

// Unified layout configurations
const BTN_W = 540;
const BTN_H = 45;
const BTN_Y1 = 300;
const BTN_Y2 = 360;

// Shared UI element rendering methods
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
