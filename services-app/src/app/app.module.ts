import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFetchComponent } from './user-fetch/user-fetch.component';
import { Routes, RouterModule } from '@angular/router';
// below is the routes configuration we need to use in RouterModule
const routesConfig : Routes = [
  {path : "", component : UserRegisterationComponent},
  {path : "register", component : UserRegisterationComponent},
  {path : "usersList", component : UserListsComponent},
  {path : "fetch", component : UserFetchComponent}
];
@NgModule({
  declarations: [
    AppComponent,    UserRegisterationComponent,
    UserListsComponent,    UserFetchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
