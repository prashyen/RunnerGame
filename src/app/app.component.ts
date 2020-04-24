import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import "@angular/compiler";
import { GameAreaComponent } from './game-area/game-area.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = "RunnerGame";
  ngOnInit(): void {    
  }

 }
