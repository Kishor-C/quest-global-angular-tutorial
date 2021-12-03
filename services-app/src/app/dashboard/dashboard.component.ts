import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any | undefined = undefined;
  constructor(private _sevice : UserService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((p: Params) => {
      let id: number = p.userId;
      this._sevice.fetchUser(id).subscribe((s) => {
        this.user = s;
      });
    });
  }

}
