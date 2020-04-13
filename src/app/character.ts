export class Character {
    private color = '#808080';
    private x = 20;
    private characterHeight= 20;
    private characterWidth= 10;
    private y = (this.ctx.canvas.height-(this.ctx.canvas.height/5)*2 -10)-this.characterHeight;
  
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.characterWidth, this.characterHeight-6);
    }
  }
  