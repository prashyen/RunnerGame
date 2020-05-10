import { Component, OnInit, SimpleChange, SimpleChanges, Inject } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Landscape } from '../objects/landscape';
import "@angular/compiler";
import { Character } from '../objects/character';
import { timer } from 'rxjs';
import { Tree } from '../objects/tree';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Lives } from '../objects/lives';
import { collisionDetector } from '../collisionDetector';
import { GameOverModalComponent } from '../game-over-modal/game-over-modal.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})

export class GameAreaComponent implements OnInit {

  @ViewChild('myCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  pageWidth: number;
  keyBoard: Number;
  moveLeft: boolean;
  gameOver: Boolean = false;
  moveRight: boolean;
  moveDown: boolean;
  moveUp: boolean = false;
  static lives: number = 5;
  toggleLeg: boolean;
  legSpeed: number = 20;
  treeCount: number = 5;
  static score: number;
  static treeSpace: number = 600;
  static ctx: any;
  static can: ElementRef<HTMLCanvasElement>;
  name: any;
  animal: any;

  constructor(public dialog: MatDialog) {
    GameAreaComponent.can = this.canvas;
  }

  openStartUpDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50vw',
      height: '60vh',
      minHeight: '300px',

      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initializeGame();
      this.animal = result;
    });
  }

  openGameOverDialog(): void {
    const dialogRef = this.dialog.open(GameOverModalComponent, {
      width: '30vw',
      height: '36vh',
      minHeight: '200px',
      data: { name: GameAreaComponent.score, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initializeGame();
    });
  }

  updateDisplayRatio() {
    ///Sharpen shape edges, code from https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
    // Set display size (css pixels).
    this.canvas.nativeElement.style.width = window.innerWidth + "px";
    this.canvas.nativeElement.style.height = window.innerHeight + "px";
    // Set actual size in memory (scaled to account for extra pixel density).
    var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    this.canvas.nativeElement.width = window.innerWidth * scale;
    this.canvas.nativeElement.height = window.innerHeight * scale;
    // Normalize coordinate system to use css pixels.
    this.ctx.scale(scale, scale);
    ///
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.updateDisplayRatio();
    this.canvas.nativeElement.getElementsByTagName("button")[0].click()
  }

  initializeGame() {
    GameAreaComponent.score = 0;
    this.start(this.canvas);
    this.monitorKeys();
  }

  monitorKeys() {
    window.addEventListener('keyup', keyup)
    window.addEventListener('keydown', keydown)
    function keyup(e: KeyboardEvent) {

      if (e.keyCode == 37) {
        this.moveLeft = false;
      }
      if (e.keyCode == 39) {
        this.moveRight = false;
      }
      //X
      if (e.keyCode == 88 && !this.moveUp) {
        Character.increaseSpeed()
      }
      if (e.keyCode == 90 && !this.moveUp) {
        Character.decreaseSpeed()
      }
    }
    function keydown(e: KeyboardEvent) {
      this.keyBoard = e.keyCode

      if (e.keyCode == 38) {
        this.moveUp = true;
      }
      if (this.keyBoard == 37) {
        this.moveLeft = true;
      }
      if (this.keyBoard == 39) {
        this.moveRight = true;
      }
    }

  }
  static displayScore(score: number) {
    this.ctx.font = 100 + " " + 100;
    this.ctx.fillStyle = "black";
    this.ctx.fillText(score.toString(), window.innerWidth/5, window.innerHeight/10);
  }

  public static setLives(newLives: number) {
    GameAreaComponent.lives = newLives;
  }

  public static setScore(newScore: number) {
    GameAreaComponent.score = newScore;
  }


  start(canvas: any) {
    const bkgd = new Landscape(this.ctx);
    const char = new Character(this.ctx);
    const lives = new Lives(this.ctx);
    var trees = []

    function game(intId) {
      clearInterval(intId);
      canvas.nativeElement.getElementsByTagName("button")[1].click()
    }

    var i: number;
    for (i = 1; i <= this.treeCount; i++) {
      trees.push(new Tree(this.ctx, window.innerWidth + GameAreaComponent.treeSpace * i, i))
    }

    this.toggleLeg = false;
    collisionDetector.gameOver = false;
    var intId = setInterval(function (): Boolean {
      var x = char.draw(this.toggleLeg, this.moveUp, this.moveDown, this.moveLeft, this.moveRight);
      this.moveUp = x[0];
      this.moveDown = x[1];
      let charx = x[2];
      let chary = x[3];
      let charwidth = x[4];
      let charheight = x[5];
      let charspeed = x[6];
      this.toggleLeg = (!this.toggleLeg);
      var gameover;
      var i: any;
      trees.forEach(function (entry) {
        entry.translate(charx, chary, charwidth, charheight, charspeed, GameAreaComponent.lives, GameAreaComponent.score);
        gameover = collisionDetector.detect(entry, char);
      })
      lives.drawLives(GameAreaComponent.lives);

      if (gameover) {
        game(intId);
      }
      bkgd.draw();
      return gameover;
    }, this.legSpeed, this.gameOver);


  }
}

