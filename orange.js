function drawOrangeScreen() {
  background("#d35400");
  textSize(70);
  text("🍊", width / 2, 70);
  fill(255);
  textSize(24);
  text("Orange Hell", width / 2, 140);

  writeStoryText(
    "You have landed squarely on the giant, rolling orange. The physics engine is breaking down. Your palms are sweating and the summit is in view.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Pogo-jump violently directly upward →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Perform a calculated 360-degree momentum swing →",
  );
}
