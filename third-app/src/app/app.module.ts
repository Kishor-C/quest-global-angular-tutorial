import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoIfComponent } from './demo-if/demo-if.component';
import { DemoForComponent } from './demo-for/demo-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoIfComponent,
    DemoForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
