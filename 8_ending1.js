function drawEnding1() {
  background("#4a0000");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("❌", width / 2, 90);
  fill(255);
  textSize(24);
  text("ENDING 1: The Snake Pit", width / 2, 170);
  writeStoryText(
    "Your jump missed. You slid completely down a hidden pipe all the way back to the starting spawn point.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Try Again / Reset Ascent");
}
