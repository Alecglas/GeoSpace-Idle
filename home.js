let width;
let height;
let svg;
let radius = 50;
let x1 = 0;
let y1 = 0;
let sliderX = [];
let sliderY = [];
let currentSlide = 0;
const circleAmount = 300;
let circleNumb = [];
let resetX;
let resetY;
let slideAmount = .5;
let slideIter = .01;


    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;
        height = window.innerHeight;
        const ps = document.getElementsByTagName("p");
        let counter = 10;
        ps.forEach(element => {
          element.style.left = ""+counter+"px";
          element.style.top = "-25%";
          counter = counter + 120;
        });
        createSlider();
    });
  function goTo(page){
    window.location.href = page;
  }
  function setup() {
    console.log("works");
    createCanvas(width, height);
     
  }
  function draw() {
    //background(102);
    if (mouseIsPressed) {
      background(255);
      circle(width/2,height/2,radius);
      fill(255);
      radius+=30;
      if(radius>width+300){
        goTo("space/space.html");
      }
    } else {
      background(0);
      
    }
    let points = [0,10,10,0];
    
    for(let x = 0; x < 220; x++){
      line(points[0],points[1],points[2],points[3]);
      stroke(100);
      points[1] += 10;
      points[2] += 10;
    }
    for (let zz = 0; zz < circleAmount; zz++) {
      circle(sliderX[zz],sliderY[zz],8);
       sliderX[zz] += slideAmount;
       sliderY[zz] -= slideAmount;
       slideAmount += slideIter;

      if(zz%15 ===1){
        slideIter = slideIter*-1;
      }
      
      stroke(255);    
      fill("black");
    }
    slideAmount = .1;

    currentSlide = random(circleNumb);
    // if(currentSlide>150){
    //   sliderY[currentSlide] += Math.floor(random(-325,0));
    //   sliderX[currentSlide] += Math.floor(random(-325,0));
    //   resetX = width;
    //   resetY = height;
    // }else{
    //   sliderY[currentSlide] += Math.floor(random(0,325));
    //   sliderX[currentSlide] += Math.floor(random(0,325));
    //   resetX = 0;
    //   resetY = 0;
    // }
    // if((sliderY[currentSlide] && sliderX[currentSlide]) > 2000 || (sliderY[currentSlide] && sliderX[currentSlide]) <0){
    //   sliderY[currentSlide] = 0;
    //   sliderX[currentSlide] = 0;
    // }
    stroke(50);
  }

  function createSlider(){
    console.log("works");
    for (let xx = 0; xx < circleAmount; xx++) {
      sliderX.push(x1);
      sliderY.push(y1);
      circleNumb.push(xx);
      if(xx==circleAmount/2 ){
        x1 = width/2;
        y1 = 0;
        console.log("fart");
      }
       x1+=10;
       y1+=10;
    }
  }

  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  
  