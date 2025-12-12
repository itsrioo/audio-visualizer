let song;
let fft;
let currentVolume = 0.5;

function preload() {
  song = loadSound('assets/song3.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  song.setVolume(currentVolume);
  textFont('Orbitron');
}


//draw and background
function draw() {

  drawGradientBackground();

  drawStars();
  drawPlanets();
  drawShootingStar();
  
  stroke(255);
  strokeWeight(4);
  noFill();

  let wave = fft.waveform();

  beginShape();

for (let i = 0; i < wave.length; i += 8) { 
  let x = map(i, 0, wave.length, 0, width);
  let y = wave[i] * 200 + height / 2;
  curveVertex(x, y);
}

endShape();

  drawVolumeSlider();
  drawGlass();
  drawPlayPauseButton();
  drawWindowFrame();
  drawTitle();

}

function drawGradientBackground() {
  noStroke();
  
  let gradientStart = height * 0.75;
  let steps = 400;
  
  for (let i = 0; i < steps; i++) {
    let y = map(i, 0, steps, 0, height);
    
    let amount = map(y, gradientStart, height, 0, 1);
    amount = constrain(amount, 0, 1);
    
    let r = lerp(0, 100, amount);
    let g = lerp(0, 100, amount);
    let b = lerp(0, 255, amount);
    
    fill(r, g, b);
    rect(0, y, width, height / steps + 1);
  }
}

function drawTitle() {
  fill(255, 255, 200);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(72);
  textFont('Orbitron');
  text("Audio Visualizer", width / 2, height * 0.15);

}

function drawStars() {
  fill(255, 255, 191);
  noStroke();

  let twinkle = map(sin(frameCount * 0.025), -1, 1, 5, 255);
  let twinkle2 = map(sin(frameCount * 0.025), -1, 1, 5, 255);

  // non twinkling stars
  circle(width * 0.08, height * 0.1, 4);
  circle(width * 0.15, height * 0.15, 6);
  circle(width * 0.25, height * 0.08, 4);
  circle(width * 0.35, height * 0.12, 8);
  circle(width * 0.48, height * 0.09, 4);
  circle(width * 0.6, height * 0.11, 6);
  circle(width * 0.7, height * 0.07, 4);
  circle(width * 0.82, height * 0.13, 6);
  circle(width * 0.92, height * 0.1, 4);
  circle(width * 0.12, height * 0.35, 4);
  circle(width * 0.28, height * 0.4, 6);
  circle(width * 0.42, height * 0.38, 4);
  circle(width * 0.68, height * 0.36, 4);
  circle(width * 0.78, height * 0.41, 6);
  circle(width * 0.88, height * 0.37, 4);
  circle(width * 0.05, height * 0.65, 6);
  circle(width * 0.18, height * 0.7, 4);
  circle(width * 0.32, height * 0.68, 6);
  circle(width * 0.45, height * 0.72, 4);

  // twinkling stars
  fill(255, 255, 191, twinkle);
  circle(width * 0.22, height * 0.18, 6);
  circle(width * 0.52, height * 0.25, 4);
  circle(width * 0.75, height * 0.2, 8);
  circle(width * 0.15, height * 0.52, 4);
  circle(width * 0.65, height * 0.55, 6);
  circle(width * 0.9, height * 0.48, 4);
  circle(width * 0.4, height * 0.8, 6);
  circle(width * 0.7, height * 0.78, 4);
  circle(width * 0.58, height * 0.67, 8);
  circle(width * 0.72, height * 0.73, 4);
  circle(width * 0.85, height * 0.69, 6);
  circle(width * 0.95, height * 0.71, 4);
  circle(width * 0.38, height * 0.22, 6);
  circle(width * 0.2, height * 0.25, 4);
  circle(width * 0.5, height * 0.18, 6);
  circle(width * 0.73, height * 0.24, 4);
  circle(width * 0.9, height * 0.28, 8);
  circle(width * 0.1, height * 0.55, 4);
  circle(width * 0.35, height * 0.6, 6);
  circle(width * 0.52, height * 0.58, 4);
  circle(width * 0.75, height * 0.62, 6);
  circle(width * 0.93, height * 0.57, 4);
  circle(width * 0.08, height * 0.82, 6);
  circle(width * 0.25, height * 0.88, 4);
  circle(width * 0.42, height * 0.85, 8);
  circle(width * 0.63, height * 0.9, 4);
  circle(width * 0.78, height * 0.87, 6);
  circle(width * 0.92, height * 0.92, 4);

  fill(255, 255, 191, twinkle2);
  circle(width * 0.3, height * 0.28, 4);
  circle(width * 0.62, height * 0.32, 6);
  circle(width * 0.08, height * 0.85, 4);
  circle(width * 0.48, height * 0.88, 6);
  circle(width * 0.82, height * 0.9, 4);
  circle(width * 0.17, height * 0.45, 6);
  circle(width * 0.55, height * 0.75, 4);
  circle(width * 0.88, height * 0.82, 6);
}

function drawPlanets() {
  noStroke();
  
  //PLANET 1 - Mars one
  fill(255, 10, 50);
  circle(width * 0.15, height * 0.2, 120);
  fill(200, 80, 40, 100);
  circle(width * 0.15 - 12, height * 0.2 - 4, 120);
  
  // PLANET 2 - Pink one
  fill(100, 150, 255);
  circle(width * 0.83, height * 0.40, 80);
  fill(150, 180, 255, 100);
  ellipse(width * 0.83, height * 0.40, 180, 20);
  
  // PLANET 3 - Neptune + Saturn one
  fill(200, 100, 255, 60);
  circle(width * 0.18, height * 0.78, 116);
  fill(200, 100, 255);
  circle(width * 0.18, height * 0.78, 100);
  fill(150, 50, 200);
  circle(width * 0.18 + 20, height * 0.78 - 20, 40);
  circle(width * 0.18 - 30, height * 0.78 + 20, 30);

  //EARTH AKA MY PLANET
  fill(100, 100, 255);
  ellipse(width / 2, height / 2 + 600, 2400, 600);

  // left land
  fill(34, 139, 34);
  ellipse(width * 0.35, height / 2 + 430, 360, 140);
  ellipse(width * 0.38 + 100, height / 2 + 440, 240, 100);

  //middle-right land
  ellipse(width * 0.65, height / 2 + 450, 140, 80);
  ellipse(width * 0.63, height / 2 + 470, 100, 60);

  //right land
  ellipse(width * 0.35 + 1000, height / 2 + 10 + 430, 360, 140);
  ellipse(width * 0.38 + 100, height / 2 + 440, 240, 100);

  //clouds
  fill(255, 255, 255, 180);
  ellipse(width * 0.28, height / 2 + 420, 120, 70);
  ellipse(width * 0.30, height / 2 + 410, 100, 60);
  ellipse(width * 0.26, height / 2 + 430, 90, 56);
  
  ellipse(width * 0.48, height / 2 + 460, 140, 80);
  ellipse(width * 0.50, height / 2 + 450, 110, 70);
  ellipse(width * 0.46, height / 2 + 470, 100, 60);

  ellipse(width * 0.72, height / 2 + 440, 130, 76);
  ellipse(width * 0.74, height / 2 + 430, 100, 64);
  ellipse(width * 0.70, height / 2 + 450, 90, 56);

  ellipse(width * 0.86, height / 2 + 420, 120, 70);
  
  ellipse(width * 0.64, height / 2 + 380, 100, 60);
  ellipse(width * 0.62, height / 2 + 400, 90, 56);
  



// ISS and Satellites 
  fill(200, 200, 200);
  rect(width * 0.3, height * 0.8, 16, 6);
  rect(width * 0.3 + 4, height * 0.8 - 4, 8, 4);

  fill(180, 180, 180);
  rect(width * 0.45, height * 0.78, 8, 8);
  rect(width * 0.45 - 4, height * 0.78 + 2, 4, 4);

  fill(180, 180, 180);
  rect(width * 0.8, height * 0.83, 6, 6);

  fill(180, 180, 180);
  rect(width * 0.55, height * 0.78, 8, 8);
  rect(width * 0.55 - 4, height * 0.78 + 2, 4, 4);
}

function drawShootingStar() {
  let shootingStar = (frameCount * 0.005) % 3; 
  
  
  if (shootingStar >= 0 && shootingStar < 2) {
    let progress = shootingStar / 1.5; 
    let x = width * 0.25 + progress * 1800; 
    let y = height * 0.01 + progress * 1000; 
    let opacity = sin(progress * 3.14) * 255;
    
    stroke(255, 255, 200, opacity);
    strokeWeight(4);
    line(x, y, x - 80, y - 40); 
    
    noStroke();
    fill(255, 255, 200, opacity);
    circle(x, y, 6);
  }
}

function drawGlass() {

  noStroke();
  fill(255, 255, 255, 20);
  rect(0, 0, width, height);

  //top left glare
  fill(255, 255, 255, 50);
  triangle(0, 0, width * 0.25, 0, 0, height * 0.25);
  
  let pulse = map(sin(frameCount * 0.045), -1, 1, 0, 20);

  //smaller glare
  fill(255, 255, 255, pulse + 4);
  ellipse(width * 0.75, height * 0.25, 180, 180);

  //bigger glare
  fill(255, 255, 255, pulse / 2 + 4);
  ellipse(width * 0.85, height * 0.8, 360, 360);
  }

function drawWindowFrame() {
  noFill();
  
  //INNER FRAME
  stroke(80, 80, 100);
  strokeWeight(60);
  rect(0, 0, width, height);
  
  //MIDDLE FRAME
  stroke(50, 50, 70);
  strokeWeight(40);
  rect(0, 0, width, height);
  
  //OUTER FRAME
  stroke(30, 30, 50);
  strokeWeight(20);
  rect(0, 0, width, height);
}


// PLAY AND PAUSE
// PLAY AND PAUSE
// PLAY AND PAUSE
// PLAY AND PAUSE

function drawPlayPauseButton() {
  let buttonX = width / 2;
  let buttonY = height / 2;
  let buttonSize = 200;

  //PULSING RING FOR PLAY/PAUSE BUTTON
  let pulse = map(sin(frameCount * 0.045), -1, 1, 10, 45);

  noStroke();
  fill(255, 255, 255, pulse); // Pulsing opacity
  ellipse(buttonX, buttonY, buttonSize + 80, buttonSize + 80);
  
  fill(255, 255, 255, pulse + 20);
  ellipse(buttonX, buttonY, buttonSize + 40, buttonSize + 40);
  
  fill(255, 255, 255, pulse + 40);
  ellipse(buttonX, buttonY, buttonSize + 20, buttonSize + 20);
  
  fill(255);
  stroke(255, 155, 5);
  strokeWeight(4);
  ellipse(buttonX, buttonY, buttonSize, buttonSize);
  
  //PLAY PAUSE ICONS/SYMBOLS
  noStroke();
  fill(0);
  if (song.isPlaying()) {
    //playing icon
    rect(buttonX - 30, buttonY - 40, 20, 80);
    rect(buttonX + 10, buttonY - 40, 20, 80);
  } 
  else {
    //paused icon
    triangle(buttonX - 30, buttonY - 40, buttonX - 30, buttonY + 40, buttonX + 40, buttonY);
  }
}


//VOLUME SLIDER
//VOLUME SLIDER
//VOLUME SLIDER

function drawVolumeSlider() {
  let sliderX = width / 2;
  let sliderY = height * 0.72;
  let sliderWidth = 350;
  let sliderHeight = 10;
  
  // Slider track background
  noStroke();
  fill(150, 150, 180);
  rect(sliderX - sliderWidth / 2, sliderY, sliderWidth, sliderHeight, 8);
  
  // Use currentVolume instead of song.getVolume()
  fill(255, 255, 200);
  rect(sliderX - sliderWidth / 2, sliderY, currentVolume * sliderWidth, sliderHeight, 8);
  
  let knobX = sliderX - sliderWidth / 2 + currentVolume * sliderWidth;
  let knobY = sliderY + sliderHeight / 2;
  
  // Moon circle
  fill(240, 240, 220);
  circle(knobX, knobY, 70);
  
  // Moon craters
  fill(200, 200, 180, 100);
  circle(knobX - 10, knobY - 6, 16);
  circle(knobX + 12, knobY + 8, 12);
  circle(knobX + 22, knobY - 6, 16);
  circle(knobX - 4, knobY + 16, 10);
  
  // Volume percent
  fill(255, 255, 200);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(36);
  let volumePercent = round(currentVolume * 100);
  text(volumePercent + "%", sliderX + 4, sliderY + 80);
}

function mouseClicked() {
  let buttonX = width / 2;
  let buttonY = height / 2;
  let buttonSize = 160;
  
  let d = dist(mouseX, mouseY, buttonX, buttonY);
  
  if (d < buttonSize / 2) {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}

//CHECKS IF THE MOUSE IS ON THE SLIDER/KNOB

function mouseDragged() {
  let sliderX = width / 2;
  let sliderY = height * 0.72;
  let sliderWidth = 400;
  
  if (abs(mouseY - sliderY) < 60) {
    currentVolume = (mouseX - (sliderX - sliderWidth / 2)) / sliderWidth;
    currentVolume = constrain(currentVolume, 0, 1);
    
    song.setVolume(currentVolume);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}