import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Landscape } from './landscape';
import "@angular/compiler";
import { Character } from './character';
import { timer } from 'rxjs';
import { Tree } from './tree';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild('myCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  
  pageWidth:number;
  keyBoard: Number;
  moveLeft: boolean;
  moveRight: boolean;
  moveDown: boolean;
  moveUp: boolean = false;
  toggleLeg: boolean;
  legSpeed: number = 10;
  treeCount: number = 5;
  static treeSpace:number = 600;
  static ctx: any;

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
    this.start();
    this.monitorKeys();
  }


  monitorKeys() {
    window.addEventListener('keyup', keyup)
    window.addEventListener('keydown', keydown)
    function keyup(e:KeyboardEvent) {
      
      if (e.keyCode == 37) {
        this.moveLeft = false;
      }
       if (e.keyCode == 39) {
        this.moveRight = false;
      } 
    }
    function keydown(e:KeyboardEvent) {
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

  private start() {
    const bkgd = new Landscape(this.ctx);
    var trees = []
    var i;
    for(i=1; i<=this.treeCount;i++){
      trees.push(new Tree(this.ctx,window.innerWidth+AppComponent.treeSpace*i))
    }
    this.toggleLeg = false;
    const char = new Character(this.ctx);

    setInterval(function () {
      console.log(this.moveDown);
      var x =char.draw(this.toggleLeg, this.moveUp, this.moveDown, this.moveLeft, this.moveRight);
      this.moveUp = x[0];
      this.moveDown= x[1];
      //console.log(this.moveDown);
      this.toggleLeg = (!this.toggleLeg);

      var i;
      for(i=0; i<trees.length;i++){
        trees[i].translate();
      }
      bkgd.draw();
    }, this.legSpeed);

  }
}
