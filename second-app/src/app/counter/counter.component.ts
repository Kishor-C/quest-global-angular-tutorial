import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("constructor() in the CounterComponent")
  }
  counter = 0;
  interval : any;
  ngOnInit(): void {
    console.log("ngOnInit() in the CounterComponent");
    this.interval = setInterval(() => {
      this.counter++;
      console.log("Counter: "+this.counter);
    }, 1000);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy() in the CounterComponent");
    clearInterval(this.interval);
  }

}
