function drawEnding3() {
  background("#2c3e50");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("⛓️", width / 2, 90);
  fill(255);
  textSize(24);
  text("ENDING 3: The Softlock", width / 2, 170);
  writeStoryText(
    "Your hammer is permanently jammed under a rock bucket. You can no longer move. This is your life now.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Reset Map Geometry");
}
