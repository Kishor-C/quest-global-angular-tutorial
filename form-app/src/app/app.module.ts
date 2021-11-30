import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdfBsFormComponent } from './tdf-bs-form/tdf-bs-form.component';
import { RdfLoginComponent } from './rdf-login/rdf-login.component';
import { RdfUserInfoComponent } from './rdf-user-info/rdf-user-info.component';
import { MdfBuilderDemoComponent } from './mdf-builder-demo/mdf-builder-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TdfBsFormComponent,
    RdfLoginComponent,
    RdfUserInfoComponent,
    MdfBuilderDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
