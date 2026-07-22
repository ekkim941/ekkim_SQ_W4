// ============================================================
// 2. sketch.js: Interactive Loop & Timeout Manager
// ============================================================

function setup() {
  createCanvas(800, 450);
  textFont("Georgia");
  startTimer(); // Boot initial 10s timer
}

function draw() {
  // 1. Check if the player ran out of time on a decision screen
  if (isChoiceScreen() && isTimeUp()) {
    changeScene(E_TIMEOUT);
  }

  // 2. Draw active screen
  if (currentScene === OPENING) drawOpening();
  else if (currentScene === LEFT_PATH) drawLeftPath();
  else if (currentScene === RIGHT_PATH) drawRightPath();
  else if (currentScene === ORANGE) drawOrangeScreen();
  else if (currentScene === CLIFF) drawCliffScreen();
  else if (currentScene === ANVIL) drawAnvilScreen();
  else if (currentScene === ICE) drawIceScreen();
  else if (currentScene === SNAKE_ATTACK) drawSnakeAttackScreen();
  else if (currentScene === E1) drawEnding1();
  else if (currentScene === E2) drawEnding2();
  else if (currentScene === E3) drawEnding3();
  else if (currentScene === E4) drawEnding4();
  else if (currentScene === E5) drawEnding5();
  else if (currentScene === E6) drawEnding6();
  else if (currentScene === E7) drawEnding7();
  else if (currentScene === E8) drawEnding8();
  else if (currentScene === E_TIMEOUT) drawTimeoutEnding();

  // 3. Draw HUD timer on active choice screens
  if (isChoiceScreen()) {
    drawTimerDisplay();
  }
}

// Helper to determine if the player is currently on a timed screen
function isChoiceScreen() {
  return (
    currentScene === OPENING ||
    currentScene === LEFT_PATH ||
    currentScene === RIGHT_PATH ||
    currentScene === ORANGE ||
    currentScene === CLIFF ||
    currentScene === ANVIL ||
    currentScene === ICE ||
    currentScene === SNAKE_ATTACK
  );
}

function mousePressed() {
  if (isChoiceScreen()) {
    if (
      mouseX > width / 2 - BTN_W / 2 &&
      mouseX < width / 2 + BTN_W / 2 &&
      mouseY > BTN_Y1 - BTN_H / 2 &&
      mouseY < BTN_Y1 + BTN_H / 2
    ) {
      handleMove(1);
    } else if (
      mouseX > width / 2 - BTN_W / 2 &&
      mouseX < width / 2 + BTN_W / 2 &&
      mouseY > BTN_Y2 - BTN_H / 2 &&
      mouseY < BTN_Y2 + BTN_H / 2
    ) {
      handleMove(2);
    }
  } else {
    // Reset from any Game Over/Ending screen back to OPENING
    if (
      mouseX > width / 2 - 250 / 2 &&
      mouseX < width / 2 + 250 / 2 &&
      mouseY > BTN_Y2 - BTN_H / 2 &&
      mouseY < BTN_Y2 + BTN_H / 2
    ) {
      changeScene(OPENING);
    }
  }
}

function handleMove(choice) {
  if (currentScene === OPENING) {
    changeScene(choice === 1 ? LEFT_PATH : RIGHT_PATH);
  } else if (currentScene === LEFT_PATH) {
    changeScene(choice === 1 ? SNAKE_ATTACK : CLIFF);
  } else if (currentScene === SNAKE_ATTACK) {
    changeScene(choice === 1 ? ORANGE : E1);
  } else if (currentScene === RIGHT_PATH) {
    changeScene(choice === 1 ? ANVIL : ICE);
  } else if (currentScene === ORANGE) {
    changeScene(choice === 1 ? E1 : E2);
  } else if (currentScene === CLIFF) {
    changeScene(choice === 1 ? E3 : E4);
  } else if (currentScene === ANVIL) {
    changeScene(choice === 1 ? E5 : E6);
  } else if (currentScene === ICE) {
    changeScene(choice === 1 ? E7 : E8);
  }
}
