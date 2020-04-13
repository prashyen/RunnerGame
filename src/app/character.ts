export class Character {
    private color = '#808080';
    private x = 20;
    private characterHeight= 50;
    private characterWidth= 20;
    private y = (this.ctx.canvas.height-(this.ctx.canvas.height/5)*2 -20)-this.characterHeight;
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    public draw(toggleLeg:boolean, moveUp:boolean, moveDown:boolean, moveLeft:boolean, moveRight:boolean) {
    if(moveLeft){
        this.ctx.clearRect(this.x, this.y, 1, 12);
        this.x = this.x-1;
    }
    if(moveRight){
        this.ctx.clearRect(this.x, this.y-this.characterWidth/2, 1,  this.characterHeight-6+this.characterWidth/2+16);
        this.ctx.clearRect(this.x, this.y+this.characterHeight-6,9, 16);
        this.ctx.clearRect(this.x+8+3, this.y+this.characterHeight-6,+this.characterWidth-6, 16);
        this.x=this.x+1;
    }
      this.ctx.fillStyle = this.color;
      //body
      //this.ctx.ellipse(this.x+10, this.y, this.characterWidth/2, this.characterWidth/2, 0,360, 1,false);
      //this.ctx.fill();
      this.ctx.fillRect(this.x, this.y, this.characterWidth, this.characterHeight-6);

      //legs
      if(toggleLeg){
        this.ctx.clearRect(this.x+8, this.y+this.characterHeight-6, 4, 12);
        this.ctx.fillRect(this.x+8, this.y+this.characterHeight-6, 3, 16);
        this.ctx.clearRect(this.x +this.characterWidth-6,  this.y+this.characterHeight-6, 4, 16);
        this.ctx.fillRect(this.x +this.characterWidth-6,  this.y+this.characterHeight-6, 3, 12);
      }else{
        this.ctx.clearRect(this.x+8, this.y+this.characterHeight-6, 4, 16);
        this.ctx.fillRect(this.x+8, this.y+this.characterHeight-6, 3, 12);
        this.ctx.clearRect(this.x +this.characterWidth-6,  this.y+this.characterHeight-6, 4, 12);
        this.ctx.fillRect(this.x +this.characterWidth-6,  this.y+this.characterHeight-6, 3, 16);
      }
      //hand
      this.ctx.fillStyle = '#636161';
      this.ctx.fillRect(this.x+9, this.y+24, 2, 15);
      
      //face
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(this.x+13, this.y+2, 3, 3);
      this.ctx.fillRect(this.x+17, this.y+2, 3, 3);
      this.ctx.fillRect(this.x+12, this.y+10, 8, 2);
    }
  }
  