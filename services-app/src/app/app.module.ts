import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFetchComponent } from './user-fetch/user-fetch.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserAuthGuard } from './user-auth.guard';
// below is the routes configuration we need to use in RouterModule
const routesConfig : Routes = [
  {path : "", component: LoginComponent},
  {path : "register", component : UserRegisterationComponent},
  {path : "success/:userId", component: SuccessComponent, 
    canActivate: [UserAuthGuard], children : [
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "search", component : UserFetchComponent},
    {path : "update", component : UpdateUserComponent},
    {path : "showAll", component : UserListsComponent}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,    UserRegisterationComponent,
    UserListsComponent,   UserFetchComponent, LoginComponent, 
    SuccessComponent, DashboardComponent, UpdateUserComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
