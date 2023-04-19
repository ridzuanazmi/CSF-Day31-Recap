import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  
  @Input()
  counter = 0; // counter is a number initialize with value 0

  // The event name is "onValueChanged and the object is of number type"
  @Output()
  onValueChanged = new Subject<number>(); // initialize it with a value 0

  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }

  // This method below is a combi of increment and decrement
  count(delta: number) {

    this.counter += delta
    console.info(">>> count: ", this.counter)

    // notify user of the change
    // to fire an event
    this.onValueChanged.next(this.counter)
  }
}
