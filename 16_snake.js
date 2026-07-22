function drawSnakeAttackScreen() {
  background("#3a1c1c");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🐍", width / 2, 70);
  fill("#e74c3c");
  textSize(24);
  text("OBSTACLE: The Mountain Snake", width / 2, 140);

  writeStoryText(
    "A giant orange snake lunges from a garbage chute! It snaps at your hammer handle. You have seconds to react before it knocks you off the branch.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Smack the snake with your hammer to launch toward Orange Hell →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Duck inside your pot and hope it misses →",
  );
}
