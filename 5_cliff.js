function drawCliffScreen() {
  background("#7f8c8d");
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text("🧗", width / 2, 70);
  fill("#34495e");
  textSize(24);
  text("The Granite Cliff Face", width / 2, 140);

  writeStoryText(
    "The rock surface is completely smooth. Zero traction. Bennett Foddy begins talking calmly about the cultural history of frustrating game design.",
  );

  makeButton(
    width / 2,
    BTN_Y1,
    BTN_W,
    BTN_H,
    "Scrape frantically to find a micro-crevice →",
  );
  makeButton(
    width / 2,
    BTN_Y2,
    BTN_W,
    BTN_H,
    "Accept defeat and let gravity take you down →",
  );
}
