let song;
let fft;

function preload() {
  song = loadSound('assets/song1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
}


//draw and background
function draw() {
  background(0);
  
  drawStars();
  drawPlanets();
  
  stroke(255, 0, 0);
  strokeWeight(1);
  noFill();

  let wave = fft.waveform();

  beginShape();
  for (let i = 0; i < width; i++) {
    let index = floor(map(i, 0, width, 0, wave.length));
    let x = i;
    let y = wave[index] * 100 + height / 2;
    vertex(x, y);
  }
  endShape();
  
  drawPlayPauseButton();
}

function drawStars() {
  fill(255, 255, 191);
  noStroke();

  let twinkle = map(sin(frameCount * 0.035), -1, 1, 50, 255);
  let twinkle2 = map(sin(frameCount * 0.035), -1, 1, 25, 255);

  // non twinkling stars
  circle(width * 0.08, height * 0.1, 2);
  circle(width * 0.15, height * 0.15, 3);
  circle(width * 0.25, height * 0.08, 2);
  circle(width * 0.35, height * 0.12, 4);
  circle(width * 0.48, height * 0.09, 2);
  circle(width * 0.6, height * 0.11, 3);
  circle(width * 0.7, height * 0.07, 2);
  circle(width * 0.82, height * 0.13, 3);
  circle(width * 0.92, height * 0.1, 2);
  circle(width * 0.12, height * 0.35, 2);
  circle(width * 0.28, height * 0.4, 3);
  circle(width * 0.42, height * 0.38, 2);
  circle(width * 0.68, height * 0.36, 2);
  circle(width * 0.78, height * 0.41, 3);
  circle(width * 0.88, height * 0.37, 2);
  circle(width * 0.05, height * 0.65, 3);
  circle(width * 0.18, height * 0.7, 2);
  circle(width * 0.32, height * 0.68, 3);
  circle(width * 0.45, height * 0.72, 2);

  // twinkling stars
  fill(255, 255, 191, twinkle);
  circle(width * 0.22, height * 0.18, 3);
  circle(width * 0.52, height * 0.25, 2);
  circle(width * 0.75, height * 0.2, 4);
  circle(width * 0.15, height * 0.52, 2);
  circle(width * 0.65, height * 0.55, 3);
  circle(width * 0.9, height * 0.48, 2);
  circle(width * 0.4, height * 0.8, 3);
  circle(width * 0.7, height * 0.78, 2);
  circle(width * 0.58, height * 0.67, 4);
  circle(width * 0.72, height * 0.73, 2);
  circle(width * 0.85, height * 0.69, 3);
  circle(width * 0.95, height * 0.71, 2);
  circle(width * 0.38, height * 0.22, 3);
  circle(width * 0.2, height * 0.25, 2);
  circle(width * 0.5, height * 0.18, 3);
  circle(width * 0.73, height * 0.24, 2);
  circle(width * 0.9, height * 0.28, 4);
  circle(width * 0.1, height * 0.55, 2);
  circle(width * 0.35, height * 0.6, 3);
  circle(width * 0.52, height * 0.58, 2);
  circle(width * 0.75, height * 0.62, 3);
  circle(width * 0.93, height * 0.57, 2);
  circle(width * 0.08, height * 0.82, 3);
  circle(width * 0.25, height * 0.88, 2);
  circle(width * 0.42, height * 0.85, 4);
  circle(width * 0.63, height * 0.9, 2);
  circle(width * 0.78, height * 0.87, 3);
  circle(width * 0.92, height * 0.92, 2);

  fill(255, 255, 191, twinkle2);
  circle(width * 0.3, height * 0.28, 2);
  circle(width * 0.62, height * 0.32, 3);
  circle(width * 0.08, height * 0.85, 2);
  circle(width * 0.48, height * 0.88, 3);
  circle(width * 0.82, height * 0.9, 2);
  circle(width * 0.17, height * 0.45, 3);
  circle(width * 0.55, height * 0.75, 2);
  circle(width * 0.88, height * 0.82, 3);
}

function drawPlanets() {
  noStroke();
  
  //PLANET 1
  fill(255, 100, 50);
  circle(width * 0.15, height * 0.2, 60);
  fill(200, 80, 40, 100);
  circle(width * 0.15 - 9, height * 0.2 - 8, 50);
  
  // PLANET 2
  fill(100, 150, 255);
  circle(width * 0.83, height * 0.40, 40);
  fill(150, 180, 255, 150);
  ellipse(width * 0.83, height * 0.40, 90, 10);
  
  // PLANET 3
  fill(200, 100, 255);
  circle(width * 0.18, height * 0.78, 50);
  fill(150, 50, 200);
  circle(width * 0.18 + 10, height * 0.78 - 10, 20);
  circle(width * 0.18 - 15, height * 0.78 + 10, 15);

  //EARTH AKA MY PLANET
  fill(100, 100, 255);
  ellipse(width / 2, height / 2 + 300, 1200, 300);
}


// PLAY AND PAUSE
// PLAY AND PAUSE
// PLAY AND PAUSE
// PLAY AND PAUSE

function drawPlayPauseButton() {
  let buttonX = width / 2;
  let buttonY = height / 2;
  let buttonSize = 100;

  //PULSING RING FOR PLAY/PAUSE BUTTON
  let pulse = map(sin(frameCount * 0.045), -1, 1, 10, 45);

  noStroke();
  fill(255, 255, 255, pulse); // Pulsing opacity
  ellipse(buttonX, buttonY, buttonSize + 40, buttonSize + 40);
  
  fill(255, 255, 255, pulse + 20);
  ellipse(buttonX, buttonY, buttonSize + 20, buttonSize + 20);
  
  fill(255, 255, 255, pulse + 40);
  ellipse(buttonX, buttonY, buttonSize + 10, buttonSize + 10);
  
  fill(255);
  stroke(255, 155, 5);
  strokeWeight(2);
  ellipse(buttonX, buttonY, buttonSize, buttonSize);
  
  //PLAY PAUSE ICONS/SYMBOLS
  noStroke();
  fill(0);
  if (song.isPlaying()) {
    //playing icon
    rect(buttonX - 15, buttonY - 20, 10, 40);
    rect(buttonX + 5, buttonY - 20, 10, 40);
  } 
  else {
    //paused icon
    triangle(buttonX - 15, buttonY - 20, buttonX - 15, buttonY + 20, buttonX + 20, buttonY);
  }
}

function mouseClicked() {
  let buttonX = width / 2;
  let buttonY = height / 2;
  let buttonSize = 80;
  
  let d = dist(mouseX, mouseY, buttonX, buttonY);
  
  if (d < buttonSize / 2) {
    if (song.isPlaying()) {
      song.pause();
      noLoop();
    } else {
      song.play();
      loop();
    }
  }
}