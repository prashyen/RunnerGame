import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-game-over-modal',
  templateUrl: './game-over-modal.component.html',
  styleUrls: ['./game-over-modal.component.css']
})
export class GameOverModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GameOverModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
