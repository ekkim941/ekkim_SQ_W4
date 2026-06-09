function drawIceScreen() {
  background("#bdc3c7");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("❄️", width / 2, 70);
  fill("#2980b9");
  textSize(24);
  text("The Frozen Slope", width / 2, 140);

  writeStoryText(
    "Absolute sub-zero friction. Your hammer slides like butter on a hot pan. You are losing vertical height dangerously fast.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Jam your hammer straight down to try and brake →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Execute a high-risk blind momentum swing upward →",
  );
}
