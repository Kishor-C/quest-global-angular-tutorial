import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  emp1: Employee = new Employee(
    555, "Alex", "Male", new Date(1999, 10, 20), 45000);
  
}
