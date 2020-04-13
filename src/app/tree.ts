export class Tree {
    private color = 'green';
    private x = 20;
    private height= 50;
    private width= 20;
    private y = (this.ctx.canvas.height-(this.ctx.canvas.height/5)*2 -20)-this.height;
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.moveTo(this.width,this.height/2);
      this.ctx.lineTo(0,this.height/2);
      this.ctx.lineTo(this.width/2,0);
      this.ctx.fill();
    }
  }
  