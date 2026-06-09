function drawEnding8() {
  background("#d946ef");
  textSize(70);
  text("👾", width / 2, 90);
  fill(255);
  textSize(24);
  text("ENDING 8: The Glitch Summit", width / 2, 170);
  writeStoryText(
    "Your hammer clips through geometry! The physics engine breaks, floating you straight into the hidden developer chatroom.",
  );
  makeButton(width / 2, BTN_Y2, 250, BTN_H, "Re-enter Reality");
}
