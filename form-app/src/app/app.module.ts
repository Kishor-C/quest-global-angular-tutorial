import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { TdfBsFormComponent } from './tdf-bs-form/tdf-bs-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TdfBsFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
