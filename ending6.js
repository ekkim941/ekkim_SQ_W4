function drawEnding6() {
  background("#3e2723");
  textSize(70);
  text("💥", width / 2, 90);
  fill(255);
  textSize(24);
  text("ENDING 6: Crushed Dreams", width / 2, 170);
  writeStoryText(
    "The anvil falls directly onto you, shattering your progress and burying your pot under junk.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Respawn at Base");
}
