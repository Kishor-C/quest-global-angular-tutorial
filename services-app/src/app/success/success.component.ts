import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user : any = undefined;
  constructor(private _service: UserService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this._activatedRoute.params.subscribe(p => console.log(p))
    this._activatedRoute.params.subscribe(p => {
      let id = p.userId;
      this._service.fetchUser(id).subscribe((s) => this.user = s);
    });
  }

}
