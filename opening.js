function drawOpening() {
  background("#2b2625");
  textSize(70);
  text("🏺", width / 2, 70);
  fill("#e67e22");
  textSize(24);
  text("Getting Over It: The 15-File Ascent", width / 2, 140);

  writeStoryText(
    "You sit in a metal pot holding a heavy Yosemite hammer. Ahead lies an absurd mountain made of garbage, smooth rocks, and broken physics. Foddy's voice echoes: 'Starting over is harder than starting up.'",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Swing the hammer downward to launch over the Dead Tree →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Carefully hook your hammer onto the Devil's Bottom ledge →",
  );
}
