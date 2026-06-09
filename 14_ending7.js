function drawEnding7() {
  background("#0f172a");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🧊", width / 2, 90);
  fill("#38bdf8");
  textSize(24);
  text("ENDING 7: The Infinite Glide", width / 2, 170);
  writeStoryText(
    "The hammer sparks uselessly. You slide backward smoothly and elegantly all the way back into the spawn lake.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Regrip Handle");
}
