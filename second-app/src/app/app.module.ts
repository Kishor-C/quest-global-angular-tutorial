import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { EventBind2Component } from './event-bind2/event-bind2.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { StyleClassBindComponent } from './style-class-bind/style-class-bind.component';
import { TwoDataBindComponent } from './two-data-bind/two-data-bind.component';
import { FormsModule } from '@angular/forms';
import { FormsTwoWayBindComponent } from './forms-two-way-bind/forms-two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,    FirstComponent,
    SecondComponent,    EventBindComponent,
    EventBind2Component,    PropertyBindComponent,
    StyleClassBindComponent,    TwoDataBindComponent, FormsTwoWayBindComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
