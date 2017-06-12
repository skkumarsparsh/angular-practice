import { Component,Input } from '@angular/core';
import { Arr } from './multiple/arr.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number;
  @Input() names:Arr[];

  getnames(event) {
    this.names = event;
  }

  countUp() {
    this.count++;
  }

  countDown() {
    this.count--;
  }

  getCount():number {
    return this.count;
  }

  constructor() {
    this.count=0;
  }
}
