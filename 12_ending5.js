function drawEnding5() {
  background("#1a252f");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🔔", width / 2, 90);
  fill("#2ecc71");
  textSize(24);
  text("ENDING 5: The Church Bell Triumph", width / 2, 170);
  writeStoryText(
    "The anvil catapults you straight over the gaps onto the highest peak church tower! You ring the golden bell of victory.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Start New Run");
}
