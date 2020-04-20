export class Character {
  private color = '#808080';
  private x = 20;
  private speed = 5;
  private characterBodyHeight = 44;
  private characterLegHeight = 16;
  private characterBodyWidth = 20;
  private y;
  constructor(private ctx: CanvasRenderingContext2D) { 
    this.y =(this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight;
    console.log((this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight);
  }
  private toggleLeg: Boolean;

  public animateCharacter(toggleLeg: boolean, moveUp: boolean, moveDown: boolean, moveLeft: boolean, moveRight: boolean) {

    this.toggleLeg = false;
    setInterval(function () {
      this.draw(this.toggleLeg, moveUp, moveDown, moveLeft, moveRight);
      this.toggleLeg = (!this.toggleLeg);
    }, 150);
  }

  public draw(toggleLeg: boolean, moveUp: boolean, moveDown: boolean, moveLeft: boolean, moveRight: boolean): boolean[] {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //console.log(this.y);
    //console.log((this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight);
    if(this.y < 300 && moveUp){
      moveDown = true;
      moveUp= false;
    } else if (moveRight && !moveDown && !moveUp) {
      this.x = this.x+this.speed;
      this.lookRight(toggleLeg);
    }else if (moveLeft && !moveDown && !moveUp) {
      this.x = this.x - this.speed;
      this.lookLeft(toggleLeg);
    }else if (moveUp && !moveDown) {
      moveDown = false;
      this.y = this.y - this.speed;
      this.lookRight(toggleLeg);
    }
    else if(moveDown && this.y != (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight){
      this.y = this.y + this.speed;
      this.lookRight(toggleLeg);
    }
    else {
      moveDown = false;
      this.lookRight(toggleLeg);
    }
    return [moveUp, moveDown];
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
