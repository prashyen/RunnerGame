import { AppComponent } from '../app.component';
import { GameAreaComponent } from '../game-area/game-area.component';

export class Tree {
  public topHeight = 100;
  public topWidth = 60;
  public trunkHeight = 10;
  public slope = (this.topWidth / 2) / this.topHeight;
  public trunkWidth = 10;
  public y = (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.topHeight - this.trunkHeight;
  public speed = 5;
  public x;

  constructor(private ctx: CanvasRenderingContext2D, private pageWidth: number, public id: number) {

    let rnd = getRandomIntInclusive(pageWidth, this.pageWidth + 300);
    this.x = rnd;
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
  }

  public translate(x: number, y: number, width: number, height: number, speed: number, lives:number, score: number): number[] {
    if (this.x + this.topWidth <= 0) {
      this.x = this.pageWidth;
      GameAreaComponent.setScore(GameAreaComponent.score+1);
      this.speed = this.speed + (score / 100);
    }
    this.draw(this.x);
    this.x = this.x - this.speed;
    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + GameAreaComponent.score.toString(), window.innerWidth - 200, window.innerHeight - 550);
    return [lives, score]
  }




  public draw(x: number) {
    this.treeTop(x);
    this.treeTrunk(x);
  }

  treeTop(x: number) {
    this.ctx.fillStyle = 'green';
    this.ctx.beginPath();
    //btmleft 
    this.ctx.moveTo(x, this.y + this.topHeight);
    //top
    this.ctx.lineTo(x + this.topWidth / 2, this.y);
    //btmRight
    this.ctx.lineTo(x + this.topWidth, this.y + this.topHeight);
    this.ctx.fill();

    this.ctx.closePath();
  }

  treeTrunk(x: number) {
    this.ctx.fillStyle = 'brown';
    this.ctx.beginPath();
    this.ctx.fillRect(x + ((this.topWidth - this.trunkWidth) / 2), this.y + this.topHeight, this.trunkWidth, this.trunkHeight);
    this.ctx.closePath();
  }
}
