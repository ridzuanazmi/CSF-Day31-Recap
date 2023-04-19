import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = "I miss the rage"
  value = 10
  // Create an array object to track the counter values
  historicalValue: number[] = [] // initialise with an empty array

  valueChange(value: number) {
    console.info(">>> value change: ", value)
    this.value = value
    this.historicalValue.push(value) // add the value in the array
  }

  deleteValue(i: number) {
    this.historicalValue.splice(i, 1);
  }
}
