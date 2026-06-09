function drawEnding4() {
  background("#27ae60");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🍃", width / 2, 90);
  fill(255);
  textSize(24);
  text("ENDING 4: Digital Nirvana", width / 2, 170);
  writeStoryText(
    "By letting go, you accept gravity. You clear the boundaries of the map and achieve tranquility by quitting.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Return to Pot");
}
