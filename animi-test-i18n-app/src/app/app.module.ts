import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorTransitionComponent } from './color-transition/color-transition.component';
import { BoxCircleComponent } from './box-circle/box-circle.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ColorTransitionComponent,
    BoxCircleComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
