import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "register", component: RegisterComponent},
  {path : "profile/:profileId", component : ProfileComponent, 
    children : [
      {path : "dashboard", component : DashboardComponent},
      {path: "contactList", component: ContactListComponent},
      {path: "addContact", component: AddContactComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
