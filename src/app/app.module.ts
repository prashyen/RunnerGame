import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { GameAreaComponent } from './game-area/game-area.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {DemoMaterialModule} from '../app/material-module';

import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { GameOverModalComponent } from './game-over-modal/game-over-modal.component';



const appRoutes: Routes = [
  {path:'', component: GameAreaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    GameAreaComponent,
    GameOverModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    MatChipsModule, BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  entryComponents: [ModalComponent],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }