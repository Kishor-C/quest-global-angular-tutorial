import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { MediaComponent } from './media/media.component';
import { FileSizeKb, FileSizeMb, NameBasedOnGender} from './pipeDemo'
@NgModule({
  declarations: [
    AppComponent, UserComponent, StudentComponent, MediaComponent,
    FileSizeKb, FileSizeMb, NameBasedOnGender
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
