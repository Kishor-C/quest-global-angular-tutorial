import { Component } from '@angular/core';

@Component({
    selector: 'user-app', 
    templateUrl : './user.component.html'
})
export class UserComponent {
    username: string = "Bruce";
    age: number = 45;
}