export class Lives {
    private color = '#808080';
    private x;
    private speed = 5;
    private characterBodyHeight = 22;
    private characterLegHeight = 8;
    private characterBodyWidth = 10;
    private y = 10;
    constructor(private ctx: CanvasRenderingContext2D) { }
    private toggleLeg: Boolean;

    drawLives(livesCount: number) {
        this.x=10;
        var i;
        for (i=0; i<livesCount;i++){
            this.lookRight(this.x);
            this.x = this.x+15;
        }
    }

    lookRight(x:number) {
        this.ctx.fillStyle = this.color;
        //body
        this.ctx.fillRect(x, this.y, this.characterBodyWidth, this.characterBodyHeight);

        this.ctx.fillRect(x + 4, this.y + this.characterBodyHeight, 1, this.characterLegHeight);
        this.ctx.fillRect(x + this.characterBodyWidth - 3, this.y + this.characterBodyHeight, 1, this.characterLegHeight);

        //hand
        this.ctx.fillStyle = '#636161';
        this.ctx.fillRect(x + 4, this.y + 12, 1, 7);

        //face
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(x + 6, this.y + 1, 1, 1);
        this.ctx.fillRect(x + 8, this.y + 1, 1, 1);
        this.ctx.fillRect(x + 6, this.y + 5, 4, 1);
    }


}
