import { AppComponent } from './app.component';

export class Tree {
    private topHeight= 100;
    private topWidth= 60;
    private trunkHeight = 10;
    private slope = (this.topWidth/2)/this.topHeight;
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
  
    public translate(x:number, y:number, width:number, height:number, speed:number, score:number):number{
     if(this.starPos+this.topWidth<=0){
      this.starPos=this.pageWidth;
      score++;
     }
      this.draw(this.starPos);
      //console.log(x+" "+width);
      //console.log("p"+this.y);
     // console.log(((this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10)));

    if(y==((this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - height) &&this.starPos<(x+width)&& (x+width)<(this.starPos+this.topWidth)) {
    //  window.alert("crashed I");
    }
    else if((y+height-16)<this.y+this.topHeight && y+height-16>this.y){
      var i;
      for(i=0;i<=this.topHeight;i=i+speed){
       // this.ctx.fillStyle = 'red';
        //this.ctx.beginPath();
        //this.ctx.fillRect(this.starPos+((3/10)*i),this.y+this.topHeight-i, 6, 6);
        //this.ctx.fillRect((this.starPos+this.topWidth-((3/10)*i)),this.y+this.topHeight-i, 6, 6);
        //this.ctx.closePath();
        if(this.starPos+(this.slope*i)+3<(x+width) && (x+width)<(this.starPos+this.topWidth-(this.slope*i)) && this.y+this.topHeight-i==y+height){
         // console.log(this.starPos+((3/10)*i)+"<"+(x+width) +"&&"+ (x+width)+"<"+(this.starPos+this.topWidth-((3/10)*i)));
         // window.alert("crashed II");
        }
      }
    }
     this.starPos=this.starPos-this.speed;
     this.ctx.font = "15px Arial";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Score: " +AppComponent.score.toString(), window.innerWidth-300, window.innerHeight-500);
     return score
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
  