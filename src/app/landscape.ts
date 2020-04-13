export class Landscape {
    private color = '#583416';
    private x = 0;
    private y = this.ctx.canvas.height-(this.ctx.canvas.height/5)*2;
    private width = this.ctx.canvas.width;
    private height = (this.ctx.canvas.height/5)*2;
  
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(this.x, this.y-10, this.width, 10);
      
      this.ctx.fillStyle = '#eee';
      this.ctx.fillRect(0, 0, this.width, this.ctx.canvas.height-10-(this.ctx.canvas.height/5)*2);
    }
  }
  