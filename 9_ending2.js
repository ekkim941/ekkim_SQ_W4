function drawEnding2() {
  background("#111");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🌌", width / 2, 90);
  fill("#f1c40f");
  textSize(24);
  text("ENDING 2: Escape Velocity", width / 2, 170);
  writeStoryText(
    "Your swing hooks a radio tower! You break atmospheric gravity and ascend into space. You win!",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Ascend Again");
}
