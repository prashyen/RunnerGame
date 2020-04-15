export class Character {
  private color = '#808080';
  private x = 20;
  private speed = 5;
  private characterBodyHeight = 44;
  private characterLegHeight = 16;
  private characterBodyWidth = 20;
  private y = (this.ctx.canvas.height - (this.ctx.canvas.height / 5) * 2 - 10) - this.characterBodyHeight - this.characterLegHeight;
  constructor(private ctx: CanvasRenderingContext2D) { }
  private toggleLeg: Boolean;

  public animateCharacter(toggleLeg: boolean, moveUp: boolean, moveDown: boolean, moveLeft: boolean, moveRight: boolean) {

    this.toggleLeg = false;
    setInterval(function () {
      this.draw(this.toggleLeg, moveUp, moveDown, moveLeft, moveRight);
      this.toggleLeg = (!this.toggleLeg);
    }, 150);
  }

  public draw(toggleLeg: boolean, moveUp: boolean, moveDown: boolean, moveLeft: boolean, moveRight: boolean) {

    if (moveRight) {
      this.ctx.clearRect(this.x + this.characterBodyWidth, this.y, this.speed, this.characterBodyHeight + 1);
      this.ctx.clearRect(this.x + 6, this.y + this.characterBodyHeight, this.speed + 6, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, this.speed, this.characterLegHeight);

      this.ctx.clearRect(this.x, this.y, this.speed, this.characterBodyHeight + 1);
      this.ctx.clearRect(this.x + 8, this.y + this.characterBodyHeight, 4, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 4, this.characterLegHeight);

      this.x = this.x + this.speed;
      this.lookRight(toggleLeg);
    } else if (moveLeft) {
      this.ctx.clearRect(this.x + this.characterBodyWidth - 5, this.y, this.speed + 6, this.characterBodyHeight + 1);
      this.ctx.clearRect(this.x + 10, this.y + this.characterBodyHeight, this.speed + 2, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, this.speed, this.characterLegHeight);
      this.x = this.x - this.speed;
      this.lookLeft(toggleLeg);
    }
    else {
      this.ctx.clearRect(this.x + this.characterBodyWidth, this.y, this.speed, this.characterBodyHeight + 1);
      this.ctx.clearRect(this.x + 6, this.y + this.characterBodyHeight, this.speed + 2, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 4, this.y + this.characterBodyHeight, this.speed + 1, this.characterLegHeight);
      this.ctx.clearRect(this.x + 12, this.y + this.characterBodyHeight, 2, this.characterLegHeight);
      this.lookRight(toggleLeg);
    }
  }


  lookRight(toggleLeg: boolean) {
    this.ctx.fillStyle = this.color;
    //body
    this.ctx.fillRect(this.x, this.y, this.characterBodyWidth, this.characterBodyHeight);

    //legs
    if (toggleLeg) {
      this.ctx.clearRect(this.x + 8, this.y + this.characterBodyHeight, 4, this.characterLegHeight - 6);
      this.ctx.fillRect(this.x + 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 4, this.characterLegHeight);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 6);
    } else {
      this.ctx.clearRect(this.x + 8, this.y + this.characterBodyHeight, 4, this.characterLegHeight);
      this.ctx.fillRect(this.x + 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 6);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 6, this.y + this.characterBodyHeight, 4, this.characterLegHeight - 6);
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
      this.ctx.clearRect(this.x + 6, this.y + this.characterBodyHeight, 4, this.characterLegHeight - 4);
      this.ctx.fillRect(this.x + 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 8, this.y + this.characterBodyHeight, 4, this.characterLegHeight);
      this.ctx.fillRect(this.x + this.characterBodyWidth - 8, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 4);
    } else {
      this.ctx.clearRect(this.x + 6, this.y + this.characterBodyHeight, 4, this.characterLegHeight);
      this.ctx.fillRect(this.x + 6, this.y + this.characterBodyHeight, 3, this.characterLegHeight - 4);
      this.ctx.clearRect(this.x + this.characterBodyWidth - 8, this.y + this.characterBodyHeight, 4, this.characterLegHeight - 4);
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
