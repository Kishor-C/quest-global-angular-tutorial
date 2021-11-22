import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { EventBind2Component } from './event-bind2/event-bind2.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EventBindComponent,
    EventBind2Component,
    PropertyBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
