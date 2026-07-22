function drawTimeoutEnding() {
  background("#1a0000");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("⏰", width / 2, 90);

  fill("#e74c3c");
  textSize(24);
  text("GAME OVER: Hesitation Kills", width / 2, 170);

  writeStoryText(
    "You hesitated too long on the mountain! Your grip loosened, gravity pulled your pot backward, and you tumbled all the way down to the starting lake.",
  );

  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Try Again / Reset Ascent");
}
