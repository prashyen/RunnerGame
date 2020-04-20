export class Tree {
    private topHeight= 100;
    private topWidth= 60;
    private trunkHeight = 10;
    private trunkWidth = 10;
    private y = (this.ctx.canvas.height-(this.ctx.canvas.height/5)*2-10)-this.topHeight-this.trunkHeight;
    private speed = 5;
    private starPos;

    constructor(private ctx: CanvasRenderingContext2D, private pageWidth: number) {
      
     let rnd = getRandomIntInclusive(pageWidth, this.pageWidth+300);
      this.starPos = rnd;     
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }
    }
  

    translateLeft(x:number){
      
    setInterval(function () {
      this.draw(x);
    }, 10);
    }


    public translate(){

     if(this.starPos+this.topWidth<=0){
      this.starPos=this.pageWidth
     }
      this.draw(this.starPos);
      this.starPos=this.starPos-this.speed;;

    }


    public draw(x:number) {
      this.treeTop(x);
      this.treeTrunk(x);
    }

    treeTop(x:number){
      this.ctx.fillStyle = 'green';
      this.ctx.beginPath();
      //btmleft 
      this.ctx.moveTo(x,this.y+this.topHeight);
      //top
      this.ctx.lineTo(x+this.topWidth/2,this.y);
      //btmRight
      this.ctx.lineTo(x+this.topWidth,this.y+this.topHeight);
      this.ctx.fill();
      
      this.ctx.closePath();
    }

    treeTrunk(x:number){
      this.ctx.fillStyle = 'brown';
      this.ctx.beginPath();
      this.ctx.fillRect(x+((this.topWidth-this.trunkWidth)/2),this.y+this.topHeight, this.trunkWidth, this.trunkHeight);
      this.ctx.closePath();
    }
  }
  