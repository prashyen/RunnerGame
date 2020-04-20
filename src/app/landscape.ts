export class Landscape {
    private color = '#583416';
    private x = 0;
    private y = this.ctx.canvas.height-(this.ctx.canvas.height/5)*2;
    private width = this.ctx.canvas.width;
    private soilHeight = (this.ctx.canvas.height/5)*2;
    private grassHeight = 10;
  
    constructor(private ctx: CanvasRenderingContext2D) {}

    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.soilHeight);

      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(this.x, this.y-this.grassHeight, this.width, this.grassHeight);

    }
  }
  