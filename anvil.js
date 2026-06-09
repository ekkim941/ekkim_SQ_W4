function drawAnvilScreen() {
  background("#4b4b4b");
  textSize(70);
  text("🔨", width / 2, 70);
  fill("#f1c40f");
  textSize(24);
  text("The Rusty Anvil Ledge", width / 2, 140);

  writeStoryText(
    "The massive iron anvil begins tipping forward. You have a split second to utilize its momentum before it plunges down the mountain sides.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Launch aggressively off the tipping point →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Brace yourself tightly against the mountain wall →",
  );
}
