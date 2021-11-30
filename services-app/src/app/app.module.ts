import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListsComponent } from './user-lists/user-lists.component';
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterationComponent,
    UserListsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
