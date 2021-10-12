const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
// ** for the animation spirit ****//
let spriteImage;
let animation = [];
let counter = 0; 
const spriteImageFrame = 10; 
// ** for the images of contents ****//
let imgPainting = [];
let imgBinary = [];

let walkingPainting ;
let toggle = false; 


function preload() {
 // ** for the animation spirit ****//
 spriteImage = loadImage('assets/dog-walking.png'); 
 // ** for the images of contents ****//
 imgPainting[0] = loadImage("assets/0_painting.jpg");
 imgPainting[1] = loadImage("assets/1_painting.jpg");
 imgPainting[2] = loadImage("assets/2_painting.jpg");
 imgPainting[3] = loadImage("assets/3_painting.jpg");
 imgBinary[0] = loadImage("assets/0_binary.jpg");
//  imgBinary[1] = loadImage("assets/1_binary.jpg");
//  imgBinary[2] = loadImage("assets/2_binary.jpg");
//  imgBinary[3] = loadImage("assets/3_binary.jpg");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight); 
  background(0, 0, 255 );
  // *** get position of dog walking sequence********// 
  for(let i = 0; i < spriteImageFrame; i++ )
  animation[i] = spriteImage.get(i * 200, 0, 200, 200)
  walkingPainting = new WalkingPainting(canvasWidth/2, canvasHeight/2); 

}

function draw() {
 background(0, 0, 255);
   //  *** display dog walking sequence********// 
   image(animation[counter % animation.length], mouseX, mouseY, 100, 100)
   counter ++;  
  walkingPainting.update()
  walkingPainting.display()

}


//   //  for(let i = 0; i < imgPainting.length; i++){
//   //    image(imgPainting[i], 0 + i * 150, 0 + i % 2 * 150 , 150, 150);
//   // 
//   walkingPainting[0].step();
//   walkingPainting[0].display();
// ///  ???????BROKEN funtions BECUASE OF  BROKEN CODE???????????????*******
//  // walkingPainting[0].checkTouched();
//  // walkingPainting[0].activatePainting();