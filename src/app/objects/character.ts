import { GameAreaComponent } from '../game-area/game-area.component';
import { Tree } from './tree';

export class Character {
  public color = '#808080';
  public x = 20;
  public static speed = 5;
  public jumpSpeed = 5;
  public characterBodyHeight = 44;
  public characterLegHeight = 16;
  public d;
  public characterBodyWidth = 20;
  public y;
  constructor(private ctx: CanvasRenderingContext2D) {
    this.y = (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight;
    this.d = (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight;
  }
  
  public static increaseSpeed(){
    if(this.speed<10){
      this.speed = this.speed+5;
    }
  }

  public static decreaseSpeed(){
    if(this.speed>5){
      this.speed = this.speed-5;
    }
  }

  public draw(toggleLeg: boolean, moveUp: boolean, moveDown: boolean, moveLeft: boolean, moveRight: boolean): any[] {

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (this.y < ((this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight) -150 && moveUp) {
      moveDown = true;
      moveUp = false;
    } else if (moveRight && !moveDown && !moveUp && this.x + this.characterBodyWidth < window.innerWidth) {
      this.x = this.x + Character.speed;
      this.lookRight(toggleLeg);
    } else if (moveLeft && !moveDown && !moveUp && 0 < this.x) {
      this.x = this.x - Character.speed;
      this.lookLeft(toggleLeg);
    } else if (moveUp && !moveDown) {
      moveDown = false;
      this.y = this.y - Character.speed;
      this.lookRight(toggleLeg);
    }
    else if (moveDown && this.y != (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight) {
      this.y = this.y +Character.speed;
      this.lookRight(toggleLeg);
    }
    else {
      moveDown = false;
      this.lookRight(toggleLeg);
    }
    return [moveUp, moveDown, this.x, this.y, this.characterBodyWidth, this.characterBodyHeight + this.characterLegHeight, Character.speed];
  }


  lookRight(toggleLeg: boolean) {
    this.ctx.fillStyle = this.color;
    //body
    this.ctx.fillRect(this.x, this.y, this.characterBodyWidth, this.characterBodyHeight);

    //legs
    if (toggleLeg) {
      this.ctx.fillRect(this.x + 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 6);
    } else {
      this.ctx.fillRect(this.x + 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 6);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
    }
    //hand
    this.ctx.fillStyle = '#636161';
    this.ctx.fillRect(this.x + 9, this.y + 24, 2, 15);

    //face
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(this.x + 13, this.y + 2, 3, 3);
    this.ctx.fillRect(this.x + 17, this.y + 2, 3, 3);
    this.ctx.fillRect(this.x + 12, this.y + 10, 8, 2);
  }

  lookLeft(toggleLeg: boolean) {
    this.ctx.fillStyle = this.color;
    //body
    this.ctx.fillRect(this.x, this.y, this.characterBodyWidth, this.characterBodyHeight);

    //legs
    if (toggleLeg) {
      this.ctx.fillRect(this.x + 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 4);
    } else {
      this.ctx.fillRect(this.x + 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 4);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
    }
    //hand
    this.ctx.fillStyle = '#636161';
    this.ctx.fillRect(this.x + 9, this.y + 24, 2, 15);

    //face
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(this.x, this.y + 2, 3, 3);
    this.ctx.fillRect(this.x + 4, this.y + 2, 3, 3);
    this.ctx.fillRect(this.x, this.y + 10, 8, 2);
  }
}
