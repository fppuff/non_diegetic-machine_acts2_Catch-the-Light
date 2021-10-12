
class WalkingPainting{
    constructor(x,y){
      this.x = x;
      this.y = y; 
      this.smallerSize = 100;
      this.activatedSize = 400;
      this.currentSize = this.smallerSize;
      this.moveIncrement = 10; 
    }
  
  
    
    checkEdges(){  
      if(this.x < this.currentSize){
        this.x = canvasWidth - this.currentSize   
       } else if(this.x > canvasWidth - this.currentSize){
         this.x = 0
       } else if(this.y < this.currentSize){
         this.y = canvasHeight - this.currentSize
       } else if(this.y > canvasHeight - this.currentSize){
         this.y = 0
       }
    }
  
    checkTouched() {
      console.log(mouseX > this.x)
      if (mouseX > this.x - 100 / 2 && mouseX < this.x + 100 / 2 
        && mouseY > this.y - 100/ 2 && mouseY < this.y + 100 / 2){
        return true;
      } else {
        return false;
      }
  
    }
  
    display(){
      image(imgPainting[0], this.x, this.y, this.currentSize, this.currentSize);
    }
    
 
    move(){
      const coin = Math.random() //give 80% of the chance to move; 
      if(coin > 0.2){
        let choice = floor(random(4));
      if (choice === 0) {
        this.x = this.x + this.moveIncrement;
      } else if (choice == 1) {
        this.x = this.x - this.moveIncrement;
      } else if (choice == 2) {
        this.y = this.y + this.moveIncrement;
      } else {
        this.y = this.y - this.moveIncrement;
      }
      }
    }
  
    update(){
      // these all became this.
      // WalkingPainting.move()
      // WalkingPainting.checkEdges()
      // WalkingPainting.checkTouched()
      if(!this.activated){
        this.move()
      }
     
      this.checkEdges()
      const touched = this.checkTouched()
      console.log(touched)
      if(touched){
          this.activated = true
          this.currentSize = this.activatedSize
      }else{
        this.activated = false
        this.currentSize = this.smallerSize
      }
    }
    
      
      //************* BROKEN CODE**************************************
      // activatePainting() {
      //   if(checkTouched()) {
      //     image(imgPainting[0], this.x, this.y, 1000, 1000);
      //   }
      // }
  }