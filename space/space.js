let height, width;
let cloudShift = 5;
let circSize = 50;
let circD = [];
let circX = [];
let circY = [];
let x1 = 25;
let y1 = 0;
let strokeColor = 255;
let fillColor = [0,0,0,0]
const circNumb = 500;
let x = 0;

//saves(key,value);
document.addEventListener("DOMContentLoaded", function(){
    width = window.innerWidth;
    height = window.innerHeight;
    y1 = height;
    checkSave();
    // createCircWave(0,height,50,50);
    // createCircWave(0,25,-50,50);
 });
function goTo(page){
    window.location.href = page;
}
function checkSave(){
    if(getSave('startingEvent')===true){
        if(getSave('tutorial')===true){
            if(getSave('startingEvent')===true){
                
            }else{}
        }else{}

    }else{
        createCircWave(0,height,50,50);
        createCircWave(0,25,-50,50);
        let audio = new Audio('/assets/Bluebird.mp3');
        audio.play();
    }
}
function saves(key,value){
    localStorage.setItem(key,value);
}
function getSave(key){
    return localStorage.getItem(key);
}
function setup(){
    createCanvas(width, height);
    background(10);

}
function draw(){
        stroke(strokeColor);
        fill(0,0,0,0);
        if(getSave('startingEvent')===true){
        
        }
        circle(circX[x],circY[x],circD[x]);
        if(x<circX.length){
           x++; 
        }
        if(x === circX.length/2){
            document.getElementById('interface').style.height = "300px"; 
         }
        // if(x>=circX.length ){
        //     x = 0;
        //     strokeColor = 0;
        // }
        
}
function createCircWave(startX,startY,scaler,startSize){
    x1 = startX;
    y1 = startY;
    circsize = startSize;
    for (let x = 0; x < circNumb; x++) {
        circX.push(x1);
        circY.push(y1);
        circD.push(circSize);
        x1+=50;
        if(x1 >= width){
            x1 = startX;
            y1 -=scaler;
            circSize-=2;
        }
        
    }
}
