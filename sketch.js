// ============================================================
// 15. sketch.js: Main Execution Router Loop
// ============================================================

function setup() {
  createCanvas(800, 450);
  textFont("Georgia");
}

function draw() {
  // Delegate rendering directly to the function inside each unique file
  if (currentScene === OPENING) drawOpening();
  else if (currentScene === LEFT_PATH) drawLeftPath();
  else if (currentScene === RIGHT_PATH) drawRightPath();
  else if (currentScene === ORANGE) drawOrangeScreen();
  else if (currentScene === CLIFF) drawCliffScreen();
  else if (currentScene === ANVIL) drawAnvilScreen();
  else if (currentScene === ICE) drawIceScreen();
  else if (currentScene === E1) drawEnding1();
  else if (currentScene === E2) drawEnding2();
  else if (currentScene === E3) drawEnding3();
  else if (currentScene === E4) drawEnding4();
  else if (currentScene === E5) drawEnding5();
  else if (currentScene === E6) drawEnding6();
  else if (currentScene === E7) drawEnding7();
  else if (currentScene === E8) drawEnding8();
}

function mousePressed() {
  // Handle Multi-Choice Screen Input (Levels 1, 2, 3)
  if (
    currentScene !== E1 &&
    currentScene !== E2 &&
    currentScene !== E3 &&
    currentScene !== E4 &&
    currentScene !== E5 &&
    currentScene !== E6 &&
    currentScene !== E7 &&
    currentScene !== E8
  ) {
    // Detect top button click
    if (
      mouseX > width / 2 - BTN_W / 2 &&
      mouseX < width / 2 + BTN_W / 2 &&
      mouseY > BTN_Y1 - BTN_H / 2 &&
      mouseY < BTN_Y1 + BTN_H / 2
    ) {
      handleMove(1);
    }
    // Detect bottom button click
    else if (
      mouseX > width / 2 - BTN_W / 2 &&
      mouseX < width / 2 + BTN_W / 2 &&
      mouseY > BTN_Y2 - BTN_H / 2 &&
      mouseY < BTN_Y2 + BTN_H / 2
    ) {
      handleMove(2);
    }
  }
  // Handle Reset clicks on Endings (Level 4)
  else {
    if (
      mouseX > width / 2 - 250 / 2 &&
      mouseX < width / 2 + 250 / 2 &&
      mouseY > BTN_Y2 - BTN_H / 2 &&
      mouseY < BTN_Y2 + BTN_H / 2
    ) {
      currentScene = OPENING;
    }
  }
}

// Binary choice mapping structure
function handleMove(choice) {
  if (currentScene === OPENING) {
    currentScene = choice === 1 ? LEFT_PATH : RIGHT_PATH;
  } else if (currentScene === LEFT_PATH) {
    currentScene = choice === 1 ? ORANGE : CLIFF;
  } else if (currentScene === RIGHT_PATH) {
    currentScene = choice === 1 ? ANVIL : ICE;
  } else if (currentScene === ORANGE) {
    currentScene = choice === 1 ? E1 : E2;
  } else if (currentScene === CLIFF) {
    currentScene = choice === 1 ? E3 : E4;
  } else if (currentScene === ANVIL) {
    currentScene = choice === 1 ? E5 : E6;
  } else if (currentScene === ICE) {
    currentScene = choice === 1 ? E7 : E8;
  }
}
