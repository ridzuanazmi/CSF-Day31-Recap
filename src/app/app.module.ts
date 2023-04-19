import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
