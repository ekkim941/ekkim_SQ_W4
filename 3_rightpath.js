function drawRightPath() {
  background("#1c1d21");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("⛰️", width / 2, 70);
  fill("#2980b9");
  textSize(24);
  text("The Devil's Bottom", width / 2, 140);

  writeStoryText(
    "You are wedged tight between a rock and a giant metal playground sign. One single wrong twitch of your hand will send you sliding back to the absolute bottom.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Leverage your hammer off a balanced anvil →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Risk the slippery path up the vertical ice wall →",
  );
}
