function drawLeftPath() {
  background("#231f20");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🪵", width / 2, 70);
  fill("#c0392b");
  textSize(24);
  text("The Dead Tree Branch", width / 2, 140);

  writeStoryText(
    "*Screeeech!* Your hammer slips, but you catch a branch. You are dangling precariously over the starting pond. Soft, mocking jazz music begins to play faintly in the background.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Vault blindly toward the floating cardboard box →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Slowly shimmy toward the steep granite cliffside →",
  );
}
