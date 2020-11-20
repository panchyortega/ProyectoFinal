// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV



let time = 0;
let wave = [];

let slider, s1, s2, s3, sc;

function setup() {

  createCanvas(windowWidth, 500);
  slider = createSlider(1, 50, 5);
  s1 = createSlider(1, 100, 2);
  s2 = createSlider(1, 8, 4);
  s3 = createSlider(1, 2, 1);
  sc = createSlider(1, 2, 1);
}

function draw() {
  background(240);
  translate(300, 200);

  let x = 0;
  let y = 0;


  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let a = s1.value();
    //let b = s2.value();

    let n = i * a + 1;
    let m = pow((n * PI), s3.value())


    let s = sin(n * time);
    let r = cos(n * time);

    let radius = 75 * (s2.value() / m);
    
    if(sc.value()==2){
    x += radius * sin(n * time);
    y += radius * cos(n * time);
    }

    if (sc.value() == 1) {
      x += radius * r;
      y += radius * s;
    }



    strokeWeight(3);
    stroke(20,180);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(20,180);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);

  translate(500, 0);
  line(x - 500, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.02;

  if (wave.length > 1500) {
    wave.pop();
  }
}