import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Landscape } from './landscape';
import "@angular/compiler";
import { Character } from './character';
import { timer } from 'rxjs';
import { Tree } from './tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild('myCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private currDate: Date;
  private ctx: CanvasRenderingContext2D;
private x:boolean;
  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    ///Sharpen shape edges, code from https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
      // Set display size (css pixels).
      this.canvas.nativeElement.style.width = window.innerWidth+ "px";
      this.canvas.nativeElement.style.height = window.innerHeight + "px";

      // Set actual size in memory (scaled to account for extra pixel density).
      var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
      this.canvas.nativeElement.width =window.innerWidth * scale;
      this.canvas.nativeElement.height = window.innerHeight * scale;

      // Normalize coordinate system to use css pixels.
      this.ctx.scale(scale, scale);
    ///
    this.animate();
  }

  animate() {
    
    this.ctx.fillStyle = 'brown';
    const square = new Landscape(this.ctx);
    square.draw();

    const tree = new Tree(this.ctx);
    tree.draw();

    this.x = false;
    const char = new Character(this.ctx);
    setInterval(function(){ 
      console.log(this.x);
      char.draw(this.x,false, false,  false, true);
      this.x=(!this.x);
    }, 150);
    
    
  }
}
