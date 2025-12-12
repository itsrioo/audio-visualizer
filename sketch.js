let song;
let fft;

function preload() {
  song = loadSound('assets/song3.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  song.setVolume(0.5)
  textFont('Orbitron');
}


//draw and background
function draw() {

  drawGradientBackground();

  drawStars();
  drawPlanets();
  drawShootingStar();
  
  stroke(255);
  strokeWeight(2);
  noFill();

  let wave = fft.waveform();

  beginShape();

for (let i = 0; i < wave.length; i += 8) { 
  let x = map(i, 0, wave.length, 0, width);
  let y = wave[i] * 100 + height / 2;
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
  textSize(36);
  textFont('Orbitron');
  text("Audio Visualizer", width / 2, height * 0.15);

}

function drawStars() {
  fill(255, 255, 191);
  noStroke();

  let twinkle = map(sin(frameCount * 0.025), -1, 1, 5, 255);
  let twinkle2 = map(sin(frameCount * 0.025), -1, 1, 5, 255);

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
  
  //PLANET 1 - Mars one
  fill(255, 10, 50);
  circle(width * 0.15, height * 0.2, 60);
  fill(200, 80, 40, 100);
  circle(width * 0.15 - 6, height * 0.2 - 2, 60);
  
  // PLANET 2 - Pink one
  fill(100, 150, 255);
  circle(width * 0.83, height * 0.40, 40);
  fill(150, 180, 255, 100);
  ellipse(width * 0.83, height * 0.40, 90, 10);
  
  // PLANET 3 - Neptune + Saturn one
  fill(200, 100, 255, 60);
  circle(width * 0.18, height * 0.78, 58);
  fill(200, 100, 255);
  circle(width * 0.18, height * 0.78, 50);
  fill(150, 50, 200);
  circle(width * 0.18 + 10, height * 0.78 - 10, 20);
  circle(width * 0.18 - 15, height * 0.78 + 10, 15);

  //EARTH AKA MY PLANET
  fill(100, 100, 255);
  ellipse(width / 2, height / 2 + 300, 1200, 300);

  // left land
  fill(34, 139, 34);
  ellipse(width * 0.35, height / 2 + 215, 180, 70);
  ellipse(width * 0.38 + 50, height / 2 + 220, 120, 50);

  //middle-right land
  ellipse(width * 0.65, height / 2 + 225, 70, 40);
  ellipse(width * 0.63, height / 2 + 235, 50, 30);

  //right land
  ellipse(width * 0.35 + 500, height / 2 + 5 + 215, 180, 70);
  ellipse(width * 0.38 + 50, height / 2 + 220, 120, 50);

  //clouds
  fill(255, 255, 255, 180);
  ellipse(width * 0.28, height / 2 + 210, 60, 35);
  ellipse(width * 0.30, height / 2 + 205, 50, 30);
  ellipse(width * 0.26, height / 2 + 215, 45, 28);
  
  ellipse(width * 0.48, height / 2 + 230, 70, 40);
  ellipse(width * 0.50, height / 2 + 225, 55, 35);
  ellipse(width * 0.46, height / 2 + 235, 50, 30);

  ellipse(width * 0.72, height / 2 + 220, 65, 38);
  ellipse(width * 0.74, height / 2 + 215, 50, 32);
  ellipse(width * 0.70, height / 2 + 225, 45, 28);

  ellipse(width * 0.86, height / 2 + 210, 60, 35);
  
  ellipse(width * 0.64, height / 2 + 190, 50, 30);
  ellipse(width * 0.62, height / 2 + 200, 45, 28);
  



// ISS and Satellites 
  fill(200, 200, 200);
  rect(width * 0.3, height * 0.8, 8, 3);
  rect(width * 0.3 + 2, height * 0.8 - 2, 4, 2);

  fill(180, 180, 180);
  rect(width * 0.45, height * 0.78, 4, 4);
  rect(width * 0.45 - 2, height * 0.78 + 1, 2, 2);

  fill(180, 180, 180);
  rect(width * 0.8, height * 0.83, 3, 3);

  fill(180, 180, 180);
  rect(width * 0.55, height * 0.78, 4, 4);
  rect(width * 0.55 - 2, height * 0.78 + 1, 2, 2);
}

function drawShootingStar() {
  let shootingStar = (frameCount * 0.005) % 3; 
  
  
  if (shootingStar >= 0 && shootingStar < 2) {
    let progress = shootingStar / 1.5; 
    let x = width * 0.25 + progress * 900; 
    let y = height * 0.01 + progress * 500; 
    let opacity = sin(progress * 3.14) * 255;
    
    stroke(255, 255, 200, opacity);
    strokeWeight(2);
    line(x, y, x - 40, y - 20); 
    
    noStroke();
    fill(255, 255, 200, opacity);
    circle(x, y, 3);
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
  ellipse(width * 0.75, height * 0.25, 90, 90);

  //bigger glare
  fill(255, 255, 255, pulse / 2 + 4);
  ellipse(width * 0.85, height * 0.8, 180, 180);
  }

function drawWindowFrame() {
  noFill();
  
  //INNER FRAME
  stroke(80, 80, 100);
  strokeWeight(30);
  rect(0, 0, width, height);
  
  //MIDDLE FRAME
  stroke(50, 50, 70);
  strokeWeight(20);
  rect(0, 0, width, height);
  
  //OUTER FRAME
  stroke(30, 30, 50);
  strokeWeight(10);
  rect(0, 0, width, height);
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


//VOLUME SLIDER
//VOLUME SLIDER
//VOLUME SLIDER

function drawVolumeSlider() {
  let sliderX = width / 2;
  let sliderY = height * 0.72;
  let sliderWidth = 175;
  let sliderHeight = 5;
  
  // Slider track background
  noStroke();
  fill(150, 150, 180);
  rect(sliderX - sliderWidth / 2, sliderY, sliderWidth, sliderHeight, 4);
  
  let volume = song.getVolume();
  fill(255, 255, 200);
  rect(sliderX - sliderWidth / 2, sliderY, volume * sliderWidth, sliderHeight, 4);
  
  let knobX = sliderX - sliderWidth / 2 + volume * sliderWidth;
  let knobY = sliderY + sliderHeight / 2;
  
  // Moon circle
  fill(240, 240, 220);
  circle(knobX, knobY, 35);
  
  // Moon craters
  fill(200, 200, 180, 100);
  circle(knobX - 5, knobY - 3, 8);
  circle(knobX + 6, knobY + 4, 6);
  circle(knobX + 11, knobY - 3, 8);
  circle(knobX - 2, knobY + 8, 5);
  
  // Volume percent
  fill(255, 255, 200);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  let volumePercent = round(volume * 100);
  text(volumePercent + "%", sliderX + 2, sliderY + 40);
}

function mouseClicked() {
  let buttonX = width / 2;
  let buttonY = height / 2;
  let buttonSize = 80;
  
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
  let sliderWidth = 200;
  
  if (abs(mouseY - sliderY) < 30) {
    let volume = (mouseX - (sliderX - sliderWidth / 2)) / sliderWidth;
    volume = constrain(volume, 0, 1);
    
    song.setVolume(volume);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
