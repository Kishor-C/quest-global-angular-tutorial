import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent  {
  fileInfo = {name : "album", size : 25}
  user1 = {name : "Raj", gender : "Male"};
  user2 = {name : "Jennifer", gender : "Female"}
}
