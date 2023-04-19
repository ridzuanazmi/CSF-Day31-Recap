import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  // Covers the basic accessing properties, property binding and event binding

  // TypeScript, to assign a value to a property, you should use 
  // the = operator instead of the : operator. The : operator is used 
  // for specifying the type of a property
  title = 'testing hero-list-component';

  // Event binding
  updateTitle(): void {
    this.title = 'Title updated!';
  }

}
